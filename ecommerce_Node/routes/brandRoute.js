const express = require('express');
const { createBrand, updateBrand, deleteBrand, getBrand, getallBrand } = require('../controller/brandCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createBrand);
router.get('/:id',authMiddleware,isAdmin,getBrand);
router.get('/',getallBrand);
router.put('/:id',authMiddleware,isAdmin,updateBrand);
router.delete('/:id',authMiddleware,isAdmin,deleteBrand);

module.exports= router;