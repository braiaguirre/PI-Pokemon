// DEPENDENCIES
const postUsersController = require('../../controllers/usersControllers/postUsersController');

const postUserHandler = async (req, res) => {
    try {
        const userData = req.body;
        const response = await postUsersController(userData);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = postUserHandler;