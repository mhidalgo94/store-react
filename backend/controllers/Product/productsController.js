const db = require('../../models/index.js');
const path = require('path');
const { Op, NUMBER } = require('sequelize');

const Product = db.products;
const User = db.user;
const Category = db.category;
const Wishlist = db.wishlist;


function makeRelativeFilesRoute(files){
    // This make list route relative files static for save in model Products
    const listSeparateRoutes = [];
    for(let i=0; i <files.length;i++ ){
        const splitRoute = files[i].destination.split(path.sep).splice(-2)
        splitRoute.push(files[i].filename)
        const relativePath  = `${splitRoute[0]}/${splitRoute[1]}/${splitRoute[2]}`
        listSeparateRoutes.push(relativePath);
    }
    return listSeparateRoutes;
}
const addProduct = async (req, res)=>{

    try{
        const userEmail = req.user.email
        // Find id user request.
        const user = await User.findOne({where:{email:userEmail}})
        if(user.role !== 'admin' && user.role !== 'moderator'){
            return res.status(401).json({message:"You do not have authorization to create this product."})
        }
        // validation field images.
        const files = req.files;
        if(!files.length){
            return res.status(400).json({message:"Requires at least one image to create this product."})
        }
        const values = req.body;
        const categories = values.categories.split(',').map(id=>parseInt(id));
        const relativeRouteFilestoStr = makeRelativeFilesRoute(files).toString();
        const images = relativeRouteFilestoStr;

        const newValues = {
            name : values.name,
            description: values.description,
            specification: values.specification,
            price : values.price,
            old_price: values.old_price,
            available: values.available,
            user_id: user.id,
            images,
        }

        const product = await Product.create(newValues).then(product=>{
            product.addCategories(categories);
            return product;
        })

        res.status(200).json({message:'Product add successfully'});
    }
    catch(err){
        console.log('Something Wrong in create product');
        res.status(500).json({"message":"Server Error"});
    }

}

// This controller without filter, just is manager
const getAllProducts = async (req,res)=>{
    try{
        let products = await Product.findAll({
            attributes:{
                exclude:['updatedAt','user_id']
            },
            order:[
                ['createdAt','DESC']
            ],
            include: [
                {
                    model: db.user,
                    as:'user',
                    attributes:{
                        exclude:['password','is_active','role','updatedAt','createdAt','UUID']
                    }
                }
            ]   
        }).then(product=> {
            return product  
        });


        res.status(200).json(products);
    }catch(err){
        console.log('Something Wrong in get all products');
        res.status(500).json({"message":"Server Error"});
    }
    
}

const getAvailableProducts = async (req,res)=>{
    try {
        const { page = 1, limit = 9, search = '' } = req.query;
        const offset = (page - 1) * limit;
    
        const products = await Product.findAndCountAll({
          where: {
            [Op.or]: [
              { name: { [Op.like]: `%${search}%` } },
              { description: { [Op.like]: `%${search}%` } },
              { specification: { [Op.like]: `%${search}%` } },
            ],
            available:true,
          },
          attributes:{
            exclude:['user_id','UUID']
          },
          order:[
            ['createdAt','DESC']
            ],
          include:[
            {
                model: Category,
                as:'categories',
                attributes:['nombre'],
                through: { attributes: [] } 
            }
        ],
          offset,
          limit,
        })
        const totalPages = Math.ceil(products.count / limit);
    
        res.status(200).json({
          data: products.rows,
          currentPage: page,
          totalPages,
        });
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
      }
}

const getOneProduct = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Product.findOne({
            where:{ id:id },
            attributes:['id','name', 'available','price','old_price', 'images','specification','description']
        }).then(values=>values.toJSON());

        if(req?.user){
            const user = await User.findOne({where:{email:req.user.email}})
            const checkWishlist =  await Wishlist.findOne({where:{ProductId: getOne.id, userId:user.id}});
            if(checkWishlist){
                getOne.favorite = true;
            }else{
                getOne.favorite = false;
            }
        }

        if(!getOne){
            res.status(401).json({message:"The product does not exist"})
        }
        res.status(200).json(getOne);
    }catch{
        console.log('Something Wrong in get a product.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updateProduct = async (req,res)=>{
    try{
        console.log('Service updated product')
        const userEmail = req.user.email
       // Find id user request.
       const user = await User.findOne({where:{email:userEmail}})
       if(user.role !== 'admin' && user.role !== 'moderator'){
           return res.status(401).json({message:"You do not have authorization to create this product."})
       }

        const values = req.body;
        const files = req.files;
        const categories = values.categories.split(',').map(id=>parseInt(id));
        
        const newValues = {
            name : values.name,
            description: values.description,
            specification: values.specification,
            price : values.price,
            old_price: values.old_price,
            available: values.available,
            user_id: user.id,
        }
        const relativeRouteFilestoStr = makeRelativeFilesRoute(files).toString();
        const images = relativeRouteFilestoStr;
        if(files.length){
            newValues.images = images;
        }

        let id = req.params.id;
        const product = await Product.findOne({where:{id}})
        if(!product){
            return res.status(401).json({message:"The product does not exist."})
        }

        product.update(newValues);

        res.status(200).json({message:"Product updated successfully."});
    }catch(err){
        console.log('Something Wrong for update a product.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeProduct = async (req,res)=>{

    try{

        let id = req.params.id;
        const userEmail = req.user.email;
        // Find id user request.
        const user = await User.findOne({where:{email:userEmail}})
        if(user.role !== 'admin' && user.role !== 'moderator'){
            return res.status(401).json({message:"You do not have authorization to delete this product."})
        }

        const product = await Product.findOne({where: {id: id}})
        if(!product){
            return res.status(401).json({message:"The product does not exist"})
        }
        product.destroy()
        res.status(200).json({"message":"Product deleted successfully."});
    }catch{
        console.log('Something Wrong for remove a product.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports = {
    addProduct,
    getAllProducts,
    getAvailableProducts,
    getOneProduct,
    updateProduct,
    removeProduct,
}