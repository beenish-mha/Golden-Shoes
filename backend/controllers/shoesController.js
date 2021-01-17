const Shoes = require("../models/Shoes");

module.exports = {
    getAll : (req, res)=>{
        Shoes.find()
        .then (shoes=>res.status(200).json(shoes))
        .catch(err=> res.status(400)
        .json("error " +err));
    },

    addShoe : (req,res) =>{
        const shoe = new Shoes ({
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
        shoe.save()
        .then (data => {
            res.status(200).json(data)
        })
        .catch(err=> res.status(400)
        .json("error " +err));
    }
}