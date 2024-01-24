const { dataAccess } = require("../data-access")

const usersPath = __dirname + "/../../users.json"
const getAllUsers = () => {
    return dataAccess.readJson(usersPath)
}



module.exports = { getAllUsers };