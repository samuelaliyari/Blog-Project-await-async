const { dataAccess } = require("../data-access")

const usersPath = "../../users.json"
const saveAllUsers = (data) => {
    return dataAccess.writeJson(usersPath, data)
}

module.exports = { saveAllUsers };