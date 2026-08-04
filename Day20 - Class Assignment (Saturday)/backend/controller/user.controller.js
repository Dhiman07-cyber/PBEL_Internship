const { userModel } = require("../model/user.model");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
    const { fullName, email, password, phoneNumber } = req.body;

    if (!fullName || !email || !password || !phoneNumber) {
        return res.status(400).send({ message: "All fields are required" });
    }

    try {
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(400).send({ message: "User already exists" });
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(500).send({ message: "Error hashing password" });
            }
            const user = new userModel({ fullName, email, password: hash, phoneNumber });
            await user.save();
            res.status(200).send({ message: "Registration successful" });
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "All fields are required" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(400).send({ message: "Invalid credentials" });
            }
            res.status(200).send({
                message: "Login successful",
                user: {
                    id: user._id,
                    fullName: user.fullName
                }
            });
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    registration,
    login
};
