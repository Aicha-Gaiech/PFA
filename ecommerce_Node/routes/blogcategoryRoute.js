const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory, getallCategory } = require('../controller/blogcategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createCategory);
router.get('/:id',authMiddleware,isAdmin,getCategory);
router.get('/',getallCategory);
router.put('/:id',authMiddleware,isAdmin,updateCategory);
router.delete('/:id',authMiddleware,isAdmin,deleteCategory);

module.exports= router;