const { service } = require("../service")




const addPostCtrl = async (req, res) => {
    try {
        const newPost = {
            id: Date.now(),
            title: req.body.postTitle,
            body: req.body.postContent,
            img: req.file.path
        }
        const allPosts = await service.getAllPosts()
        const updatedData = await service.saveAllPosts([newPost, ...allPosts])
        res.json({ success: true, result: updatedData })
    }
    catch (error) {
        res.json({ success: false, error: error })
    }

}


module.exports = { addPostCtrl }