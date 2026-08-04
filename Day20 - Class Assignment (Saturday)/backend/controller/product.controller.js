const { productModel } = require("../model/product.model");

const getProducts = async (req, res) => {
    try {
        let products = await productModel.find();
        
        if (products.length === 0) {
            const apiRes = await fetch("https://fakestoreapi.com/products");
            const data = await apiRes.json();
            
            const formatted = data.map(item => ({
                name: item.title,
                price: item.price,
                description: item.description,
                image: item.image,
                category: item.category
            }));

            products = await productModel.insertMany(formatted);
        }

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    const { name, price, description, image, category } = req.body;
    if (!name || !price) {
        return res.status(400).send({ message: "Name and price are required" });
    }
    try {
        const product = new productModel({ name, price, description, image, category });
        await product.save();
        res.status(201).send({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    getProducts,
    createProduct
};
