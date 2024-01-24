const { service } = require("../service")

const getUsers = async (_, res) => {
    try {
        const allUsers = await service.getAllUsers()
        res.json({ success: true, result: allUsers })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}


module.exports = { getUsers }