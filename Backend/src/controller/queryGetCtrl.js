const { searchByUser, filterTag } = require("../../searchFunctions")
const { service } = require("../service")


const queryGet = async (req, res) => {

    try {
        const userID = req.query.userId
        const tag = req.query.tag
        const allPosts = await service.getAllPosts()
        const postResults = allPosts.filter(post => searchByUser(post, userID)).filter(post => filterTag(post, tag))
        res.json({ success: true, result: postResults })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}


module.exports = { queryGet }