const Category = require('../models/blogcategoryModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createCategory= asyncHandler(async (req,res) =>{
    try{
        const newcategory = await Category.create(req.body);
        res.json(newcategory);
    }catch(error){
        throw new Error(error);
    }
});
//update Category
const updateCategory= asyncHandler(async (req,res) =>{
    const {id}= req.params;
    validateMongoDbId(id);
    try{
        const updatedcategory = await Category.findByIdAndUpdate(id, req.body ,{
            new: true,
        });
        res.json(updatedcategory);
    }catch(error){
        throw new Error(error);
    }
});

//delete Category
const deleteCategory= asyncHandler(async (req,res) =>{
    const {id}= req.params;
    validateMongoDbId(id);
    try{
        const deletedcategory = await Category.findByIdAndDelete(id);
        res.json(deletedcategory);
    }catch(error){
        throw new Error(error);
    }
});

//Get Category
const getCategory= asyncHandler(async (req,res) =>{
    const {id}= req.params;
    validateMongoDbId(id);
    try{
        const getacategory = await Category.findById(id);
        res.json(getacategory);
    }catch(error){
        throw new Error(error);
    }
});
//Get All Categories
const getallCategory= asyncHandler(async (req,res) =>{
    
    try{
        const getallcategory = await Category.find();
        res.json(getallcategory);
    }catch(error){
        throw new Error(error);
    }
});



module.exports= {createCategory,updateCategory,deleteCategory,getCategory,getallCategory};

