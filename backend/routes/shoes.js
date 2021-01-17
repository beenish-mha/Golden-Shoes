//const express = require("express");
const router = require("express-promise-router")();
const shoesController = require("../controllers/shoesController");

//Allshoes
router.route('/')
.get(shoesController.getAll)
.post(shoesController.addShoe);

//get shoe by id
router.route('/id/:_id')
.get(shoesController.getById)
.put(shoesController.replaceShoe)
.delete(shoesController.deleteShoeById);

//get shoe by color
router.route('/color/:color')
.get(shoesController.getAllByColor);

module.exports = router;