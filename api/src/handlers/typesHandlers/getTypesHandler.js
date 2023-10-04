// DEPENDENCIES
const getTypesController = require('../../controllers/typesControllers/getTypesController');

const getTypesHandler = async (req, res) => {
    try {
        const response = await getTypesController();
        res.status(200).json(response);
    } catch {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = getTypesHandler;