const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoesController");

router.route('/')
.get(shoesController.getAll)
.post(shoesController.addShoe);

module.exports = router;