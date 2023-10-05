// DEPENDENCIES
const getAbilitiesController = require('../../controllers/abilitiesControllers/getAbilitiesController');

const getAbilitiesHandler = async (req, res) => {
    try {
        const response = await getAbilitiesController();
        res.status(200).json(response);
    } catch {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = getAbilitiesHandler;