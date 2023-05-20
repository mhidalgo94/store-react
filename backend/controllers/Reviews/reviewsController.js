const db = require('../../models/index.js');

const Reviews = db.reviews;
const User = db.user;
const Product = db.products;

const addReview = async (req, res)=>{
    try{
        const {email} = req.user;
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.status(404).json({message:'User does not exist'})
        }
        const {id: productId, rate, body} = req.body;
        const product = await Product.findByPk(productId);
        if(!product){
            return res.status(404).json({message:'Product does not exist'})
        }
        const reviews = await Reviews.create({
            userId:user.id,
            product_id : productId,
            rate,
            body
        }).then(rev=>{
            const reload =  rev.reload({ 
                include: {
                    model:User,
                    attributes:['firstName','lastName','image','email']
                },
          
            })
            return reload;
        }).then(rectify=>{
            const {available,UUID, userId, ...rest } = rectify.toJSON();
            return rest;
        });
        res.status(200).json({data:reviews});
    }
    catch(error){
        console.error('Something Wrong in create review')
        res.status(500).json({"message":"Server Error"})
    }
}

const getReviews = async (req,res)=>{
    try{
        console.log(req.params)
        let { id } = req.params
        let reviews = await Reviews.findAll({
            where:{product_id: parseInt(id), available:true},
            attributes:{
                exclude:['available', 'UUID']
            },
            include:{
                model: User,
                attributes:['firstName','lastName','image','email']
            }
        })
        res.status(200).json(reviews);
    }catch(error){
        console.log('Something Wrong in get all reviews product id');
        console.log(error)
        res.status(500).json({"message":"Server Error"});
    }
    
}

const getAllReviews = async (req,res)=>{
    try{
        let reviews = await Reviews.findAll();
        res.status(200).json(reviews);
    }catch{
        console.error('Something Wrong in get all reviews');
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
    getReviews,
    getAllReviews,
    getOneReview,
    updateReview,
    removeReview,
}