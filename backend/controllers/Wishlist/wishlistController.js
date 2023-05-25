const db = require('../../models/index.js');

const User = db.user;
const Wishlist = db.wishlist;
const Product = db.products

const addWishList = async (req,res)=>{
    try{
        if(!req.user){
            return res.status(401).json({message:'You must login or create an account to add the wishlist.'})   
        }
        
        const user = await User.findOne({where:{email: req.user.email, is_active:true}});
        if(!user){
            return res.status(401).json({message:'You must login or create an account to add the wishlist.'})
        }
        const {ProductId} = req.body;


        const existingWishList = await Wishlist.findOne({
            where:{
                userId: user.id,
                ProductId
            }
        })
        if (existingWishList) {
            existingWishList.destroy();
            return res.status(200).json({ message: 'The product has been removed wishlist.' });
        }
      
        // Crear una nueva entrada en la tabla de wishlist
        await Wishlist.create({
            userId: user.id,
            ProductId
        });
        res.status(200).json({message:"Product added wish list"})
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Server Error' });
    }
}


const getWishListUser = async (req, res)=>{
    try{
        const {email} = req.user;
        const user = await User.findOne({where:{email, is_active:true}});
        if(!user){
            return res.status(401).json({message:'Require authentication'})
        }
        const { count , rows: wishlist} = await Wishlist.findAndCountAll({
            where: { userId :1 },
            attributes:{
                exclude:['userId']
            },
            include:[
                {
                    model : Product,
                }
            ]
        })
        
        res.status(200).json({wishlist, count})
    }catch(error){
        console.log('Error getWishListUser')
        console.log(error)
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    addWishList,
    getWishListUser
}