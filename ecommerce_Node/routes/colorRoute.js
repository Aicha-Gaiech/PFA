const express = require('express');

const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewares');
const { createColor, getColor, getallColor, updateColor, deleteColor } = require('../controller/colorCtrl');
const router = express.Router();

router.post('/',authMiddleware,isAdmin,createColor);
router.get('/:id',authMiddleware,isAdmin,getColor);
router.get('/',getallColor);
router.put('/:id',authMiddleware,isAdmin,updateColor);
router.delete('/:id',authMiddleware,isAdmin,deleteColor);

module.exports= router;