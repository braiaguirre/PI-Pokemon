// DEPENDENCIES
const editUsersController = require('../../controllers/usersControllers/editUsersController');

const editUsersHandler = async (req, res) => {
    try {
        const editUserData = req.body;
        const result = await editUsersController(editUserData);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = editUsersHandler;