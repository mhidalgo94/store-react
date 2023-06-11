const db = require('../../models/index.js');

const SalesOrder = db.salesOrder;
const User = db.user;
const OrderSalesProducts = db.orderSalesProducts
const Products = db.products


const listOrderSales = async (req,res)=>{

    try{
        const user = req?.user
        const queryUser = await User.findOne({where:{email:user.email,is_active:true}})

        if(!queryUser){
            return res.status(404).json({message:'User does not exist'})
        }
        const queryOrderSale = await SalesOrder.findAll({
            where:{userId:queryUser.id},
            attributes:{
                exclude:['id', 'idPayment']
            }
        })

        res.status(200).json(queryOrderSale)

    }catch(err){
        console.log('Something Error in listOrderSales')
        console.log(err)
    }
}



const getOneOrderSales = async (req,res)=>{
    try{       
      let id = req.params.id;
      let orderSales = await SalesOrder.findOne({
        where:{ UUID:id },
        attributes:{
            exclude:['idCard','idPayment','userId']
        }    
        })
        if(!orderSales){
            return res.status(404).json({message:'The order does not exist'})
        }
        orderSales = orderSales.toJSON()
        let orderSalesProducts = await OrderSalesProducts.findAll(
        {where:{orderSaleId: orderSales.id},
        attributes:{exclude:['ProductId']},
        include: { model:Products,attributes:{exclude:['user_id']} }
        });
        orderSales.orderSalesProducts = orderSalesProducts;    
        res.status(200).json(orderSales);
    }catch(err){
      console.error('Something Wrong in get a order sales.');
      console.log(err)

      res.status(500).json({"message":"Server Error"});
    }
  }
  
  
  const updateOrderSales = async (req,res)=>{
  try{
      let id = req.params.id;
      const values= req.body;
  
      const address = await OrderSales.update(values, {where: { id },attributes:['id','nombre','telefono','direccion', 'zip_code']})
  
      res.status(200).json({message:'Address successfully updated', address});
  }catch{
      console.error('Something Wrong for update a address.');
      res.status(500).json({"message":"Server Error"});
  }
  }

module.exports = {
    listOrderSales,
    getOneOrderSales,
    updateOrderSales
}