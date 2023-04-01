const { v4: uuidv4 } = require('uuid')
const db = require('../../models/index.js');
const User = db.user;

const addUser =  async (req,res)=>{
    let values = req.body.data;
    try{
        const user = await User.create(values).then(user=>{
            // Aqui debes enviar email para activate
            console.log(user.UUID)
            res.status(200).json({message:'User create successfully. Need verify code with your email for activated.'});
        })
    }catch(err){
        res.status(400).json({
            success: false,
            msg: err.errors.map(e => e.message)
        });
    } 
    // res.status(500).json({"message":"Server Error"})
}

const verifyCodeUser = async (req,res)=>{

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
            await delete userValues.dataValues.id;
            await delete userValues.dataValues.is_active;
            await delete userValues.dataValues.UUID;

            res.status(200).json({user:userValues.dataValues, message:"User activate successfully."});
        }else{
            res.status(400).json({message:"Time code verification expired."})
        }
    }else{
        res.status(400).json({message:"Code validation invalid."});
    }
}

const resetCodeVerifyUser = async (req,res)=>{

    let email = req.body.data.email;
    console.log(email);
    const user = await User.findOne({where:{email}})
    if(user){
        user.UUID = uuidv4();
        user.save();
        // aqui donde tienes que enviar el Email para un nuevo codigo
        res.status(200).json({message:"Need verify code with your email for activated."})
    }else{
        res.status(400).json({message:"Your email is not valid."})
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
        let id = req.user.id
        const user = await User.update(req.body, {where: { id:id }})
        res.status(200).json(user);
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

    // res.status(200).json({mssage :"Prueba User "})

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
    removeUser
}