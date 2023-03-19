const db = require('../../models/index.js');

const Addresses = db.addresses;


const addAddress = async (req, res)=>{
    
    let values = {
        name : req.body.body
    }

    try{
        const category = await Addresses.create(values);
        res.status(200).json(category);
    }
    catch{
        console.error('Something Wrong in create address.')
        res.status(500).json({"message":"Server Error"})
    }
}

const getAllAddresses = async (req,res)=>{
    try{
        let addresses = await Addresses.findAll({});
        console.log(addresses);
        res.status(200).json(addresses);
    }catch{
        console.log('Something Wrong in get all addresses.');
        res.status(500).json({"message":"Server Error"});
    }
    
}


const getOneAddres = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Addresses.findOne({where:{ id:id }});
        res.status(200).json(getOne);
    }catch{
        console.error('Something Wrong in get a address.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updateAddress = async (req,res)=>{
    try{
        let id = req.params.id
        const address = await Addresses.update(req.body, {where: { id:id }})
        res.status(200).json(address);
    }catch{
        console.error('Something Wrong for update a address.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeAddress = async (req,res)=>{

    try{

        let id = req.params.id
        Addresses.destroy({where: {id: id}})
        res.status(200).json({"message":"Catergory deleted successfully."});
    }catch{
        console.error('Something Wrong for remove a address.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports = {
    addAddress,
    getAllAddresses,
    getOneAddres,
    updateAddress,
    removeAddress,
}