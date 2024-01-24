const { getAllPosts } = require("./getAllPosts");
const { saveAllPosts } = require("./saveAllPosts");
const { getAllUsers } = require("./getAllUsers");
const { saveAllUsers } = require("./saveAllUsers");

const service = {
    getAllPosts,
    saveAllPosts,
    getAllUsers,
    saveAllUsers
}

module.exports = { service };