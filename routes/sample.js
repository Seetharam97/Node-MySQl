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

// get the details
router.get("/getTheDetails", async(req,res)=>{
    try {
        const data = await details.findAll();
        if(data.length > 0){
            return res.status(200).json({'status': "Success", 'message': "Details added successfully", data});
        }else{
            return res.json({'status': "Success", 'message': "No data found"});
        }
    } catch (err) {
        return res.status(400).json({'status': "Failed", 'message': err.message});
    }
});

router.get('/getDataById', async(req,res)=>{
    try {
        const data = await details.findByPk(req.query.id);
        if(data){
            return res.status(200).json({'status': "Success", 'message': "Details added successfully", data});
        }else{
            return res.json({'status': "Success", 'message': "No data found"});
        }
    } catch (err) {
        return res.status(400).json({'status': "Failed", 'message': err.message});
    }
});

// delete the data
router.delete("/deleteTheRecord", async(req,res)=>{
    try {
        const data = await details.destroy({ where: { id: req.query.id } });
        return res.status(200).json({'status': "Success", 'message': "Details successfully deleted"});
    } catch (err) {
        return res.status(400).json({'status': "Failed", 'message': err.message});
    }
});

// update the details
router.put("/updateDetails", async(req,res)=>{
    try {
        var updateData = {
            name:req.body.name,
            technology:req.body.technology,
            description:req.body.description,
            mobile:req.body.mobile
        }
        const data = await details.update(updateData, { where: { id:req.body.id } })
        return res.status(200).json({'status': "Success", 'message': "Details are successfully updated"});
    } catch (error) {
        return res.status(400).json({'status': "Failed", 'message': error.message});
    }
});

module.exports = router;