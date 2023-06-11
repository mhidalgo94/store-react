const config = require('../../config/config.js');
const Stripe = require('stripe');
const db = require('../../models/index.js');


const User = db.user;
const OrderSales= db.salesOrder;
const OrderSaleProduct = db.orderSalesProducts;

const stripe = new Stripe(config.STRIPE_PRIVATE_KEY);



const addCheckout = async (req,res)=>{

    try{
        const user = req?.user;
        let userId = null;
        if(user){
          const queryUser = await User.findOne({where:{email: user.email, is_active:true}}).then(user=> user.toJSON());
          userId = queryUser.id;
        }
        
        const values = req.body;
        const token = values?.token;
        if(!token){
          return res.status(400).json({message:"Payment values are not completed."})
        }
        const idPayment = values.token.id;
        const amount = values.amount * 100; // stripe require in Cents
        const products = values.products;

        if(!values?.addressLine && !values?.zip_code){
          return res.status(400).json({message:"You must fill in address and zip code."})
        }

        const address = `${values.addressLine}  ${values.zip_code}`
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_data: {
                type: 'card',
                card: {
                  token: idPayment, // Pasa solo el ID del token dentro de card[token]
                },
              },
            confirm:true
        });
        if(payment.status === 'succeeded'){
          const order = await OrderSales.create(
            { 
              userId,
              amount:values.amount,
              quantity:products.length, 
              address, 
              idPayment, 
              brand: token?.card?.brand,
              country: token?.card?.brand,
              idCard: token?.card?.id, last4 : token?.card?.last4
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
            

            const emailSalesOrder = values?.emailOrderSale;
            if(!userId && emailSalesOrder){
              // Send email to emailSalesOrder
    
            }
        }
        

        res.status(200).json({message:'Payment confirmed. Thank you for your purchase!'})

    }catch(err){
        console.log('Something Wrong for add checkout.');
        console.log(err)
        res.status(500).json({"message":"Server Error"});
    }
}


module.exports={
    addCheckout
}