const express = require("express");
const router = express.Router();
const shoesController = require("../controllers/shoesController");

router.route('/')
.get(shoesController.getAll)
.post();

module.exports = router;