// DEPENDENCIES
const deleteUsersController = require('../../controllers/usersControllers/deleteUsersController');

const deleteUsersHandler = async (req, res) => {
    try {
        const { user } = req.body;
        const response = await deleteUsersController(user);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = deleteUsersHandler;