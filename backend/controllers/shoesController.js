const Shoes = require("../models/Shoes");

module.exports = {
    getAll : async(req, res, next)=>{
        const shoes = await Shoes.find();
        res.status(200).json(shoes)
    },

    getById: async(req,res,next) => {
        const shoeId = req.params._id;
        const shoe = await Shoes.findById(shoeId);
        res.status(200).json(shoe);
    },

    getAllByColor : async(req,res,next)=>{
        const color = req.params.color;
        const shoes = await Shoes.find({Color:color});
        res.status(200).json(shoes);
    },

    addShoe : async(req,res,next) =>{
        const newshoe = new Shoes ({
            Style: req.body.Style,
            Color: req.body.Color,
            Size: req.body.Size,
            Image: req.body.Image,
            Quantity: req.body.Quantity,
            Gender: req.body.Gender,
            Description: req.body.Description,
            Ratings: req.body.Ratings,
            Reviews: req.body.Reviews
        })
        
            const shoe = await newshoe.save()
            res.status(200).json(shoe);
        
    }
}