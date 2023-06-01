const express = require("express");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddlewares");
const { createEnquiry, getallEnquiry, updateEnquiry, deleteEnquiry } = require("../controller/enquiryCtrl");
const router = express.Router();



router.post("/",authMiddleware,isAdmin,createEnquiry);
router.get("/",getallEnquiry);
router.put("/:id",authMiddleware,isAdmin,updateEnquiry);
router.delete("/:id",authMiddleware,isAdmin,deleteEnquiry);
module.exports=router;