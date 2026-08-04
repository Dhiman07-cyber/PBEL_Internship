const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    }
});

const productModel = mongoose.model("product", productSchema);

module.exports = {
    productModel
};
