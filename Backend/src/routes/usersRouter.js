const express = require("express");
const { controller } = require("../controller");


const usersRouter = express.Router();

usersRouter.get("/", controller.getUsers);



module.exports = { usersRouter };