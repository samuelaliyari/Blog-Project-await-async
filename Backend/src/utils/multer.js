const multer = require("multer");



// initiate Storage for Post Images
const storagePosts = multer.diskStorage({
    destination: "./public/postImg",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});


const uploadPostImg = multer({ storage: storagePosts });


module.exports = { uploadPostImg }