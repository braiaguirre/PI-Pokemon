// DEPENDENCIES
const postUsersController = require('../../controllers/usersControllers/postUsersController');

const postUserHandler = async (req, res) => {
    try {
        const userData = req.body;
        const response = await postUsersController(userData);
        res.status(200).json({
            title: 'Yeah!',
            message: response.message,
            alertType: 'accept'
        });
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            alertType: 'accept'
        })
    }
}

module.exports = postUserHandler;