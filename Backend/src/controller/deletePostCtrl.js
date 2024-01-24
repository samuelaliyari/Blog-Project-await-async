const { dataAccess } = require("../data-access");
const { service } = require("../service");



const deletePostCtrl = async (req, res) => {
    try {
        const postId = req.params.postId;
        const allPosts = await service.getAllPosts()
        const file = allPosts.find(post => post.id.toString() === postId)
        if (typeof file.img !== "undefined") {
            dataAccess.deleteAttachment(file.img)
        }
        const newData = allPosts.filter(post => post.id.toString() !== postId)
        await service.saveAllPosts(newData)
        console.log()
        res.json({ success: true, result: newData })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}




module.exports = { deletePostCtrl }