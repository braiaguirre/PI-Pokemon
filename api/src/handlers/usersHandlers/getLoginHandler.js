// DEPENDENCIES
const getLoginController = require('../../controllers/usersControllers/getLoginController');

const getLoginHandler = async (req, res) => {
    try {
        const { userOrEmail, password } = req.body;
        const response = await getLoginController(userOrEmail, password);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getLoginHandler;