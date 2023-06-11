const db = require('../../models/index.js');

const PaymentMethods = db.paymentMethods;
const User = db.user;
const { ValidationError } = require('sequelize');


const addPaymentMethods = async (req, res)=>{
    try{
        const user = await User.findOne({where:{email:req.user.email}})
        if(!user){
            return res.status(401).json({message:"User not exists."})
        }

        const vart = req.body
        const {card,nameCard} = req.body;
        
        const expirationDate = `${card.exp_month}/${card.exp_year}`
        values= {brand: card.brand,expirationDate,nameCard,numberCard:card.last4}
        values.userId = user.id;
        const paymentMetods = await PaymentMethods.create(values);
        res.status(200).json({message:"Added new payment method."});
    }
    catch(err){
        console.error('Something Wrong in create method payment.');
        // Verifica si el error es de duplicación de datos
        if (err.name === 'SequelizeUniqueConstraintError') {
        // Maneja el error de duplicación de datos
        return res.status(400).json({ message: 'This card exist in you payment method' });
        }
        if (err instanceof ValidationError) {
            const errors = err.errors.map(error => error.message);
            return res.status(422).json({ errors });
          } else {
            console.error(err);
            return res.status(500).json({ error: 'Error al crear el método de pago' });
          }
    }
}

const getAllPaymentMethods = async (req,res)=>{
    try{
        const user = await User.findOne({where:{email:req.user.email}})
        if(!user){
            return res.status(401).json({message:"User not exists."})
        }
        let paymentMetods = await PaymentMethods.findAll({where:{userId:user.id},attributes:{
            exclude:['userId']
        }});
        res.status(200).json(paymentMetods);
    }catch(err){
        console.log('Something Wrong in get all payment methods.');
        console.log(err);
        res.status(500).json({"message":"Server Error"});
    }
    
}


const getOnePaymentMethods = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await PaymentMethods.findOne({where:{ id:id }});
        res.status(200).json(getOne);
    }catch{
        console.error('Something Wrong in get a get one payment methods.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updatePaymentMethods = async (req,res)=>{
    try{
        let id = req.params.id;
        const paymentMetods = await PaymentMethods.update(req.body, {where: { id:id }})
        res.status(200).json({message:'Payment method updated successfully.'});
    }catch{
        console.error('Something Wrong for update a payment methods.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removePaymentMethods = async (req,res)=>{
    try{
        let id = req.params.id
        PaymentMethods.destroy({where: {id: id}})
        res.status(200).json({"message":"Payment Method deleted successfully."});
    }catch{
        console.error('Something Wrong for remove a payment method.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports = {
    addPaymentMethods,
    getAllPaymentMethods,
    getOnePaymentMethods,
    updatePaymentMethods,
    removePaymentMethods,
}