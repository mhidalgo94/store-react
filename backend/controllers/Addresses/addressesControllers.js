const db = require('../../models/index.js');

const Addresses = db.addresses;
const User = db.user;


const addAddress = async (req, res)=>{
    try{
        const email = req.user.email

        const values= req.body;
        
        const user = await User.findOne({where:{email, is_active:true}}).then(user=>{
            if(!user.is_active){
                return res.status(404).json({"message":"Your user exists but is not verified. You need to verify your account."})
            }
            Addresses.create(values).then(address=>{
                user.addAddress(address);
                res.status(200).json({"message":"Address created successfully"});
            }).catch(err=>{
                console.error('Something Wrong in create address.')
                res.status(500).json({"message":"Server Error"})

            })
        })
    }
    catch(error){
        console.error('Something Wrong in create address.')
        console.log(error)
        res.status(500).json({"message":"Server Error"})
    }
}

const getAllAddresses = async (req,res)=>{
    try{
        const userEmail= req.user.email;
        let {addresses} = await User.findOne({ 
            where:{email:userEmail, is_active:true}, 
            attributes: ['email', 'firstName', 'lastName', 'phone', 'address'],
            include:[{model:Addresses, as : 'addresses', attributes:['id','nombre','telefono','direccion', 'zip_code']}]
        })

        res.status(200).json({addresses, message:"New address created successfully"});
    }catch(err){
        console.log('Something Wrong in get all addresses.');
        res.status(500).json({"message":"Server Error"});
    }
    
}


const getOneAddres = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Addresses.findOne({where:{ id:id }, attributes:['id','nombre','telefono','direccion', 'zip_code']});
        res.status(200).json(getOne);
    }catch{
        console.error('Something Wrong in get a address.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updateAddress = async (req,res)=>{
    try{
        let id = req.params.id;
        const values= req.body;

        const address = await Addresses.update(values, {where: { id },attributes:['id','nombre','telefono','direccion', 'zip_code']})

        res.status(200).json({message:'Address successfully updated', address});
    }catch{
        console.error('Something Wrong for update a address.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeAddress = async (req,res)=>{

    try{

        let id = req.params.id
        console.log(id)
        const deleted = Addresses.destroy({where: {id: id}})
        res.status(200).json({"message":"Address successfully removed."});
    }catch(err){
        console.error('Something Wrong for remove a address.');

        console.log(err)
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