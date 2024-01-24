const fs = require("fs");



const deleteAttachment = (path) => {
    fs.unlink(path, (err) => console.log(err))
}



module.exports = { deleteAttachment }