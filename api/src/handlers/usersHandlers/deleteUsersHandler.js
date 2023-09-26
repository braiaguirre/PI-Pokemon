// DEPENDENCIES
const deleteUsersController = require('../../controllers/usersControllers/deleteUsersController');

const deleteUsersHandler = async (req, res) => {
    try {
        const { user } = req.body;
        const result = await deleteUsersController(user);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = deleteUsersHandler;