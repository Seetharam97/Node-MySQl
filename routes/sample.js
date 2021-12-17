const express = require('express');
const router = express.Router();
const details = require('../models/sample');

// add the details
router.post("/addTheDetails", async(req,res)=>{
    try{
        const datas = new details(req.body);
        const data = await datas.save();
        return res.status(200).json({'status': "Success", 'message': "Details added successfully", data});
    }catch(err){
        return res.status(400).json({'status': "Failed", 'message': err.message});
    }
});

module.exports = router;