const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const { cartRouter } = require("./routes/cart.route");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Database connection error:", error);
    }
    console.log(`Server is running on port ${PORT}`);
});
