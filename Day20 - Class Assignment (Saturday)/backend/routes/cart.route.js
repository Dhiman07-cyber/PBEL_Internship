const express = require("express");
const { getCart, addToCart, removeFromCart } = require("../controller/cart.controller");
const cartRouter = express.Router();

cartRouter.get("/:userId", getCart);
cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);

module.exports = {
    cartRouter
};
