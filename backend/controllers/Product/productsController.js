const db = require('../../models/index.js');

const Product = db.products;


const addProduct = async (req, res)=>{

    const user_id = req.user.id;
    console.log(user_id)
    
    let values = {
        name : req.body.name,
        description : req.body.desc,
        specification: req.body.spec,
        price: req.body.price,
        old_price : req.body.oldPrice,
        available: req.body.available,
        user_id
    }

    try{
        const product = await Product.create(values);
        res.status(200).json(product);
    }
    catch{
        console.log('Something Wrong in create product')
        res.status(500).json({"message":"Server Error"})
    }
}

const getAllProducts = async (req,res)=>{
    try{
        let products = await Product.findAll({});

        res.status(200).json(products);
    }catch{
        console.log('Something Wrong in get all products');
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
        let id = req.params.id
        const product = await Product.update(req.body, {where: { id:id }})
        if(!product){
            res.status(401).json({message:"The product does not exist"})
        }
        res.status(200).json(product);
    }catch{
        console.log('Something Wrong for update a product.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeProduct = async (req,res)=>{

    try{

        let id = req.params.id
        const product = Product.destroy({where: {id: id}})
        if(!product){
            res.status(401).json({message:"The product does not exist"})
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