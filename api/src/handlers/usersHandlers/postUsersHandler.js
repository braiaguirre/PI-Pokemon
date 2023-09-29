// DEPENDENCIES
const postUsersController = require('../../controllers/usersControllers/postUsersController');

const postUsersHandler = async (req, res) => {
    console.log('handler', 'aaa')
    try {
        const userData = req.body;
        const response = await postUsersController(userData);
        res.status(200).json({
            title: 'Yeah!',
            message: response,
            type: 'alert'
        });
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'alert'
        })
    }
}

module.exports = postUsersHandler;