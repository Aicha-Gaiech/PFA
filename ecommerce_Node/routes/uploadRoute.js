const express = require("express");
const {

  uploadImages,
} = require("../controller/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddlewares");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();


router.post("/",authMiddleware,isAdmin,uploadPhoto.array('images',10),productImgResize,uploadImages );


module.exports = router;