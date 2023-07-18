const express=require("express");
const uploadMiddleware=require("../middleware/Multer");
const UploadModel=require("../models/UploadModel");
const router=express.Router();


router.get("/api/get",async (req,res)=>{
    const allPhotos=await UploadModel.find().sort({createdAt:"descending"});
    res.send(allPhotos);
});

router.post("/api/save",uploadMiddleware.single("photo"),async (req,res)=>{
    const photo=req.file.filename;
    await UploadModel.create({photo});
})

module.exports=router;