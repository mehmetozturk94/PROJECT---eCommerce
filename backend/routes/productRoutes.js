const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

//Route for Get Products Over Controller
router.route("/").get(getProducts);

//Route for Get Product By Id Over Controller
router.route("/:id").get(getProductById);

module.exports = router;
