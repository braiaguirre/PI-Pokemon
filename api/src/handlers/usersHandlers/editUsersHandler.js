// DEPENDENCIES
const editUsersController = require('../../controllers/usersControllers/editUsersController');

const editUsersHandler = async (req, res) => {
    try {
        const { id, edits } = req.body;
        const response = await editUsersController(id, edits);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = editUsersHandler;