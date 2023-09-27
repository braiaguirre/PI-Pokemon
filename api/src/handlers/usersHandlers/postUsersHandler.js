// DEPENDENCIES
const postUsersController = require('../../controllers/usersControllers/postUsersController');

const postUserHandler = async (req, res) => {
    try {
        const { user, email } = req.body;
        const response = await postUsersController(user, email);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = postUserHandler;