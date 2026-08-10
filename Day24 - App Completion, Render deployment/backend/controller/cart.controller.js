const { userModel } = require("../model/user.model");

const userProfile = async (req, res) => {
    const { userId } = req.headers;

    try {
        const user = await userModel.findById(userId).select("-password");

        if (user) {
            res.status(200).send({ "message": "User profile fetched successfully", user });
        } else {
            res.status(404).send({ "message": "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}

module.exports = {
    userProfile
}