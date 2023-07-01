const config = require('../../config/config.js');
const Stripe = require('stripe');
const db = require('../../models/index.js');
const {OrderComplete} = require('../../sendEmail/sendEmail.js')


// const { STRIPE_PUBLISHABLE_KEY } = require('../../config/config.js');

const User = db.user;
const OrderSales= db.salesOrder;
const OrderSaleProduct = db.orderSalesProducts;

const stripe = new Stripe(config.STRIPE_PRIVATE_KEY);


// const configPayment = async (req,res)=>{
//   res.status(200).json({publishableKey: STRIPE_PUBLISHABLE_KEY})
// }

const createPaymentIntent= async (req, res) => {
  const {amount} = req.body;
  const amt = amount * 100
  const paymentIntent = await stripe.paymentIntents.create({
    amount:amt, // Monto en centavos (aquí puedes personalizarlo según tus necesidades)
    currency: 'usd', // Moneda (cambia según tus necesidades)
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
};



const addCheckout = async (req,res)=>{

    try{
        const user = req?.user;
        if(!user){
          return res.status(401).json({message:'Require authentication'})
        } 
        const queryUser = await User.findOne({where:{email: user.email, is_active:true}}).then(user=> user.toJSON());
        let userId = queryUser.id;
        const values = req.body;
        
        const idPayment = values.paymentIntent.id;
        const amount = parseFloat(values.amount) * 100; // stripe require in Cents
        const products = values.products;

        const {addressLine, zip_code, NameDelivery,phone} = values?.delivery

        if(!addressLine && !zip_code && !NameDelivery && !phone){
          return res.status(400).json({message:"You must fill in address and zip code."})
        }

        const fullAddress = `${addressLine}  ${zip_code}`
        
        const order = await OrderSales.create(
          { 
            userId,
            amount:values.amount,
            quantity:products.length, 
            address:fullAddress, 
            idPayment, 
            NameDelivery,
            phone,
            payment_method: values.paymentIntent.payment_method,
            client_secret: values.paymentIntent.client_secret,
          }).then(order=>{
            return order.toJSON();
          })
        const listSaleProducts = products.map((product) => ({
            orderSaleId: order.id,
            ProductId: product.id,
            quantity: product.quantity,
            price: product.price,
          }));
          
        await OrderSaleProduct.bulkCreate(listSaleProducts)  
        
        
        const fullName = `${user.firstName} ${user.lastName}`;
        const link = `${process.env.HOST_FRONTEND}/order-sales/${order.UUID}`
        OrderComplete(user.email,fullName,link)
        
        res.status(200).json({message:'Payment confirmed. Thank you for your purchase!'})

    }catch(err){
        console.log('Something Wrong for add checkout.');
        console.log(err)
        res.status(500).json({"message":"Server Error"});
    }
}


module.exports={
  // configPayment,
  createPaymentIntent,
  addCheckout
}