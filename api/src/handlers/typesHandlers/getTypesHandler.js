const getTypesController = require('../../controllers/typesControllers/getTypesController');

const getTypesHandler = async (req, res) => {
    try {
        const types = await getTypesController();
        res.status(200).json(types);
    } catch {
        res.status(404).json({ error: error.message })
    }
}

module.exports = getTypesHandler;