const { service } = require("../service")


const likePostCtrl = async (req, res) => {
    try {
        const postId = req.params.postId
        console.log(postId)
        const allPosts = await service.getAllPosts();
        const newPosts = allPosts.filter(post => {
            if (post.id.toString() === postId) {
                return { ...post, reactions: post.reactions++ }
            } else {
                return post
            }
        })
        await service.saveAllPosts(newPosts)
        res.json({ success: true, result: newPosts })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}


module.exports = { likePostCtrl }