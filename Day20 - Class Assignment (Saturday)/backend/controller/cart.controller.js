const { cartModel } = require("../model/cart.model");

const getCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cartItems = await cartModel.find({ userId }).populate("productId");
        res.status(200).send(cartItems);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId) {
        return res.status(400).send({ message: "User ID and Product ID are required" });
    }
    const qty = quantity ? Number(quantity) : 1;

    try {
        let cartItem = await cartModel.findOne({ userId, productId });
        if (cartItem) {
            cartItem.quantity += qty;
            await cartItem.save();
        } else {
            cartItem = new cartModel({ userId, productId, quantity: qty });
            await cartItem.save();
        }
        res.status(200).send({ message: "Item added to cart", cartItem });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
        return res.status(400).send({ message: "User ID and Product ID are required" });
    }

    try {
        const cartItem = await cartModel.findOne({ userId, productId });
        if (!cartItem) {
            return res.status(404).send({ message: "Cart item not found" });
        }

        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            await cartItem.save();
            res.status(200).send({ message: "Quantity decremented", cartItem });
        } else {
            await cartModel.deleteOne({ _id: cartItem._id });
            res.status(200).send({ message: "Item removed from cart" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart
};
