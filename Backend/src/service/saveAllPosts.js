const { dataAccess } = require("../data-access")

const postsPath = __dirname + "/../../posts.json"
const saveAllPosts = (data) => {
    return dataAccess.writeJson(postsPath, data)
}

module.exports = { saveAllPosts };