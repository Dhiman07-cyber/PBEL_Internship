const express = require("express");
const { registration, login } = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/register", registration);
userRouter.post("/login", login);

module.exports = {
    userRouter
};
