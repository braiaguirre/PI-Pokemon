// DEPENDENCIES
const getLoginController = require('../../controllers/usersControllers/getLoginController');

const getLoginHandler = async (req, res) => {
    try {
        const { userOrEmail, password } = req.query;
        const response = await getLoginController(userOrEmail, password);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            alertType: 'accept'
        })
    }
}

module.exports = getLoginHandler;