const fs = require("fs");

const readJson = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(JSON.parse(data.toString()));
        })
    })
}


module.exports = { readJson };