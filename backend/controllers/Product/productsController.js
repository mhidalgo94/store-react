const db = require('../../models/index.js');
const path = require('path');
const Product = db.products;
const Category = db.category;
const User = db.user;

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
                    association:Product.User,
                    as:'user',
                    attributes:{
                        exclude:['password','is_active','role','updatedAt','createdAt','UUID']
                    }
                }]
        });


        res.status(200).json(products);
    }catch(err){
        console.log('Something Wrong in get all products');
        console.error(err)
        res.status(500).json({"message":"Server Error"});
    }
    
}

const getAvailableProducts = async (req,res)=>{
    try{
        let getAvailable = await Product.findAll({available:true});
        res.status(200).json(getAvailable);
    }catch{
        console.log('Something Wrong in get available all products');
        res.status(500).json({"message":"Server Error"});
    }
}

const getOneProduct = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Product.findOne({where:{ id:id }});
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

        let id = req.params.id
        const product = await Product.update(newValues, {where: { id:id }})
        if(!product){
            return res.status(401).json({message:"The product does not exist."})
        }
        res.status(200).json({message:"Product updated successfully."});
    }catch(err){
        console.log('Something Wrong for update a product.');
        console.log(err)
        res.status(500).json({"message":"Server Error"});
    }
}

const removeProduct = async (req,res)=>{

    try{

        let id = req.params.id
        const userEmail = req.user.email
        // Find id user request.
        const user = await User.findOne({where:{email:userEmail}})
        if(user.role !== 'admin' && user.role !== 'moderator'){
            return res.status(401).json({message:"You do not have authorization to delete this product."})
        }

        const product = await Product.destroy({where: {id: id}})
        if(!product){
            return res.status(401).json({message:"The product does not exist"})
        }
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