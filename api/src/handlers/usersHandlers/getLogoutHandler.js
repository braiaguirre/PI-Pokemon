// DEPENDENCIES
const getLogoutController = require('../../controllers/usersControllers/getLogoutController');

const getLogoutHandler = async (req, res) => {
    try {
        const { user } = req.body;
        const access = await getLogoutController(user);
        res.status(200).json(access);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getLogoutHandler;