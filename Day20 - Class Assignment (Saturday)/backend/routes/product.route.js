const express = require("express");
const { getProducts, createProduct } = require("../controller/product.controller");
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);

module.exports = {
    productRouter
};
