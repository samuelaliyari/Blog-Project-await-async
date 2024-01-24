const { getPosts } = require("./getPostsCtrl")
const { getUsers } = require("./getUsersCtrl")
const { queryGet } = require("./queryGetCtrl")
const { addPostCtrl } = require("./addPostCtrl")
const { deletePostCtrl } = require("./deletePostCtrl")
const { likePostCtrl } = require("./likePostCtrl")


const controller = {
    getPosts,
    getUsers,
    queryGet,
    addPostCtrl,
    deletePostCtrl,
    likePostCtrl
}


module.exports = { controller }