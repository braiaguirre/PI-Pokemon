// DEPENDENCIES
const getLoginController = require('../../controllers/usersControllers/getLoginController');

const getLoginHandler = async (req, res) => {
    try {
        const accessData = req.body;
        const access = await getLoginController(accessData);
        res.status(200).json(access);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getLoginHandler;