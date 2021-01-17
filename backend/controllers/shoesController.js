const shoes = require("../models/Shoes");

module.exports = {
    getAll : (req, res)=>{
        shoes.find()
        .then (shoes=>res.status(200).json(shoes))
        .catch(err=> res.status(400)
        .json("error " +err));
    }
}