const { dataAccess } = require("../data-access")

const postsPath = __dirname + "/../../posts.json"
const getAllPosts = () => {
    return dataAccess.readJson(postsPath)
}



module.exports = { getAllPosts };