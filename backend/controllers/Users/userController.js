const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const db = require('../../models/index.js');
const {generateToken} = require('../Auth/auth.js');
const {SignInVerifyCode,RegistrationCompleted, RecoveryPassword} = require('../../sendEmail/sendEmail.js')
const User = db.user;


const addUser =  async (req,res)=>{
    let values = req.body.data;
    try{
        if(!values?.email){
            return res.status(400).json({message:'Complete email input for create user account.'})
        }
        const checkEmail = await User.findOne({where:{email:values.email}})

        if(checkEmail){
            return res.status(400).json({message:"There is already an account with this email."})
        }

        const user = await User.create(values).then(user=>{
            // Aqui debes enviar email para activate
            const fullName = `${user.firstName} ${user.lastName}`;
            SignInVerifyCode(user.email,fullName, user.UUID);
            res.status(200).json({message:'User create successfully. Need verify code with your email for activated.'});
        })
    }catch(err){
        res.status(400).json({
            success: false,
            msg: err.errors.map(e => e.message)
        });
        // res.status(500).json({"message":"Server Error"})
    } 
}

const verifyCodeUser = async (req,res)=>{
    try{

        const code = req.body.data.code;
        const user = await User.findOne({where:{UUID:code},attributes:{
            exclude:['password','createdAt']
        }});
        if (user){
            const updatedAt = user.dataValues.updatedAt.getTime(); // Obtener la fecha de creación del usuario en milisegundos
            const now = new Date().getTime();
            const diff = now - updatedAt

        if(diff < 3600000){
                const userValues = await user.update({is_active: true,UUID:uuidv4()});
                delete userValues.dataValues.id;
                delete userValues.dataValues.is_active;
                delete userValues.dataValues.UUID;
                const fullName = `${user.firstName} ${user.lastName}`;
                // email register complete
                RegistrationCompleted(user.email,fullName);
                res.status(200).json({message:"User activate successfully."});
            }else{
                res.status(400).json({message:"Time code verification expired."})
            }
        }else{
            res.status(400).json({message:"Code validation invalid."});
        }
    }catch(err){
        res.status(500).json({message:'Error Server'});
    }
}

const resetCodeVerifyUser = async (req,res)=>{
    try{
        let email = req.body.data.email;
        const user = await User.findOne({where:{email}})
        if(user){
            user.UUID = uuidv4();
            user.save();
            // send  Email to new code verfication
            const fullName = `${user.firstName} ${user.lastName}`;
            SignInVerifyCode(user.email,fullName, user.UUID);
            res.status(200).json({message:"Need verify code with your email for activated."})
        }else{
            res.status(400).json({message:"Your email is not valid."});
        }
    }catch(err){
        console.log('Error for resetCodeVerifyUser');
        res.status(500).json({message:'Error Server'});
    }
}

const verifyEmailUser = async (req,res)=>{
    try{
        const values = req.body;

        if(!values?.email){
            return res.status(400).json({message:'Require field email'});
        }
        const user = await User.findOne({where:{email: values.email}})
        if(!user){
            return res.status(400).json({message:'There is no account with this email.'});
        }
        // Enviar correo para recuperar contrasena
        user.UUID = uuidv4();
        user.save();
        const fullName = `${user.firstName} ${user.lastName}`;
        const link = `${process.env.HOST_FRONTEND}/change-password/${user.UUID}`;
        RecoveryPassword(user.email, fullName,link);

        res.status(200).json({message:'Check your email to retrieve password'});
    }catch(err){
        console.log(err)
        console.log('Error for Verify Email');
        res.status(500).json({message:'Error Server'});
    }
}

const changePassword = async (req,res)=>{
    try{
        const values = req.body;
        if(!values?.id){
            return res.status(400).json({message:"Require codigo."})
        }
        // query user
        const user = await User.findOne({where:{UUID:values.id}})
        if(!user){
            return res.status(400).json({message:"Code expired. Try to recover password again."})
        }

        const updatedAt = user.dataValues.updatedAt.getTime(); // Obtener la fecha de creación del usuario en milisegundos
        const now = new Date().getTime();
        const diff = now - updatedAt;
        
        if(diff > 3600000){
            return res.status(400).json({message:"Code expired. Try to recover password again."})
        }
        const salt = bcrypt.genSalt(10);
        user.password = bcrypt.hashSync(values.password1, parseInt(salt))
        user.UUID = uuidv4();
        user.save();
        res.status(200).json({message:"Password updated successfully"})
    }catch(err){
        console.log('Error for Change Password');
        res.status(500).json({message:'Error Server'});
    }
}

// find all users activate
const getAllUsers = async (req,res)=>{

    try{
        let users = await User.findAll({is_active:true});

        res.status(200).json(users);
    }catch(err){
        console.log('Something Wrong in get all users');
        res.status(500).json({"message":"Server Error"});
    }
    
}

// Find one user with params id
const getOneUser = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOneUser = await User.findOne({where:{ id:id }});
        res.status(200).json(getOneUser);
    }catch(err){
        console.log('Something Wrong in get a user.');

        res.status(500).json({"message":"Server Error"});
    }
}
// self-update user
const selfUpdateUser = async (req,res)=>{
    try{
        const userEmail = req.user.email;
        const user = await User.findOne({where: { email:userEmail }})
        // Verfiy users exist.
        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        // Get values request
        let {firstName, lastName, email, phone,address, zip_code} = req.body;
        // uPdate values 
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;
        user.address = address;
        user.zip_code = zip_code;
        // Save if exist file in values
        if (req.file){
            user.image = req.file.filename;
        }
        await user.save()

        const token = generateToken(user)
        res.status(200).json({token});
    }catch(err){
        console.log('Something Wrong for update user.');
        res.status(500).json({"message":"Server Error"});
    }
}

const updateUser = async (req,res)=>{
    
    try{
        let id = req.params.id
        const user = await User.update(req.body, {where: { id:id }})
        res.status(200).json(user);
    }catch(err){
        console.log('Something Wrong for update user.');
        res.status(500).json({"message":"Server Error"});
    }


}

const removeUser = async (req,res)=>{

    try{

        let id = req.params.id
        User.destroy({where: {id: id}})
        res.status(200).json({"message":"User deleted successfully."});
    }catch(err){
        console.log('Something Wrong for remove this user.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports ={
    addUser,
    verifyCodeUser,
    resetCodeVerifyUser,
    getAllUsers,
    getOneUser,
    updateUser,
    selfUpdateUser,
    removeUser,
    verifyEmailUser,
    changePassword
}