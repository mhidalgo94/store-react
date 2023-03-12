const db = require('../../models/index.js');

const Category = db.category;


const addCategory = async (req, res)=>{
    
    let values = {
        name : req.body.body
    }

    try{
        const category = await Category.create(values);
        res.status(200).json(category);
    }
    catch{
        console.error('Something Wrong in create category.')
        res.status(500).json({"message":"Server Error"})
    }
}

const getAllCategories = async (req,res)=>{
    try{
        let categories = await Category.findAll({});

        res.status(200).json(categories);
    }catch{
        console.log('Something Wrong in get all categories.');
        res.status(500).json({"message":"Server Error"});
    }
    
}


const getOneCategory = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Category.findOne({where:{ id:id }});
        res.status(200).json(getOne);
    }catch{
        console.error('Something Wrong in get a category.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updateCategory = async (req,res)=>{
    try{
        let id = req.params.id
        const category = await Category.update(req.body, {where: { id:id }})
        res.status(200).json(category);
    }catch{
        console.error('Something Wrong for update a category.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeCategory = async (req,res)=>{

    try{

        let id = req.params.id
        Category.destroy({where: {id: id}})
        res.status(200).json({"message":"Catergory deleted successfully."});
    }catch{
        console.error('Something Wrong for remove a category.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports = {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    removeCategory,
}