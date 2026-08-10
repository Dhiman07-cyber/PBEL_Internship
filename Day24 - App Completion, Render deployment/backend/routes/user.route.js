const express = require("express");
const { registration, userLogin, changePassword, getAllUsers, forgotPassword } = require("../controller/user.controller");
const { authCheck } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/registration", registration);
userRouter.post("/login", userLogin);
userRouter.post("/change-password", authCheck, changePassword);
userRouter.post("/forgot-password", forgotPassword);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;