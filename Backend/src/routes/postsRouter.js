const { controller } = require("../controller");
const express = require("express");
const { uploadPostImg } = require("../utils/multer");
const { deletePostCtrl } = require("../controller/deletePostCtrl");
const postsRouter = express.Router()

postsRouter.get("/", controller.getPosts)



postsRouter.get("/query", controller.queryGet)

postsRouter.post("/uploadimg", uploadPostImg.single("postImg"), controller.addPostCtrl)

postsRouter.delete("/:postId/delete", controller.deletePostCtrl)

postsRouter.patch("/:postId/like", controller.likePostCtrl)

module.exports = { postsRouter }