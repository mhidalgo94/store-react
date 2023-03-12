const db = require('../../models/index.js');

const Reviews = db.reviews;


const addReview = async (req, res)=>{
    
    let values = {
        name : req.body.body,
        rate : req.body.rate,
        product_id : req.body.product_id
    }

    try{
        const reviews = await Reviews.create(values);
        res.status(200).json(reviews);
    }
    catch{
        console.error('Something Wrong in create review')
        res.status(500).json({"message":"Server Error"})
    }
}

const getAllReviews = async (req,res)=>{
    try{
        let reviews = await Reviews.findAll({});

        res.status(200).json(reviews);
    }catch{
        console.log('Something Wrong in get all reviews');
        res.status(500).json({"message":"Server Error"});
    }
    
}

const getAvailableReviews = async (req,res)=>{
    try{
        let getAvailable = await Reviews.findAll({available:true});
        res.status(200).json(getAvailable);
    }catch{
        console.error('Something Wrong in get available all reviews');
        res.status(500).json({"message":"Server Error"});
    }
}

const getOneReview = async (req,res)=>{
    try{       
        let id = req.params.id;
        let getOne = await Reviews.findOne({where:{ id:id }});
        res.status(200).json(getOne);
    }catch{
        console.error('Something Wrong in get a review.');

        res.status(500).json({"message":"Server Error"});
    }
}


const updateReview = async (req,res)=>{
    try{
        let id = req.params.id
        const review = await Reviews.update(req.body, {where: { id:id }})
        res.status(200).json(review);
    }catch{
        console.error('Something Wrong for update a error.');
        res.status(500).json({"message":"Server Error"});
    }
}

const removeReview = async (req,res)=>{

    try{

        let id = req.params.id
        Reviews.destroy({where: {id: id}})
        res.status(200).json({"message":"Review deleted successfully."});
    }catch{
        console.error('Something Wrong for remove a review.');
        res.status(500).json({"message":"Server Error"});
    }

}

module.exports = {
    addReview,
    getAllReviews,
    getAvailableReviews,
    getOneReview,
    updateReview,
    removeReview,
}