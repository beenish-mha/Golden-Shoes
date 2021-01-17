//const express = require("express");
const router = require("express-promise-router")();
const shoesController = require("../controllers/shoesController");

router.route('/')
.get(shoesController.getAll)
.post(shoesController.addShoe);

module.exports = router;