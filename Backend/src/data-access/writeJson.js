const fs = require("fs");

const writeJson = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data), err => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else resolve(data)
        })
    })
}


module.exports = { writeJson };