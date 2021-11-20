const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//Fetch All Products
//GET api/products
const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//Fetch Single Product By Id
//GET /api/products/:id
const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

module.exports = { getProducts, getProductById };
