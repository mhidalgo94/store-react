const db = require('../../models/index.js');
const User = db.user

const addUser =  async (req,res)=>{
    let values = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        address : req.body.phone,
    }
    try{
        const user = await User.create(values);
        res.status(200).json(user);
    }
    catch(err){
        console.log('Something Wrong in create user')
        res.status(500).json({"message":"Server Error"})
    }
}


const getAllUsers = async (req,res)=>{

    try{
        let users = await User.findAll({});

        res.status(200).json(users);
    }catch(err){
        console.log('Something Wrong in get all users');
        res.status(500).json({"message":"Server Error"});
    }
    
}


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
    getAllUsers,
    getOneUser,
    updateUser,
    removeUser
}