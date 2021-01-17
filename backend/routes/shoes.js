const express = require("express");
const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.status(200).json({Message: "Allah is the great"})
})
.post();

module.exports = router;