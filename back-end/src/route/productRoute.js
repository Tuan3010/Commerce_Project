const express = require("express");
// const authController = require("../controllers/AuthController.js");
const productRouter = express.Router();

// authRouter.get("/", authController.getCommentPost);
productRouter.get("/", (req,res) => {
  res.send('HELO ROUTE PRODUCT');
});


module.exports = productRouter;