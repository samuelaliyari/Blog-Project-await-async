const { service } = require("../service")



const getPosts = async (_, res) => {
    try {
        const allPosts = await service.getAllPosts()
        res.json({ success: true, result: allPosts })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}


module.exports = { getPosts }