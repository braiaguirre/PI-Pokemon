// DEPENDENCIES
const getLogoutController = require('../../controllers/usersControllers/getLogoutController');

const getLogoutHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getLogoutController(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        })
    }
}

module.exports = getLogoutHandler;