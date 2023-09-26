// DEPENDENCIES
const getAccessController = require('../../controllers/typesControllers/getTypesController');

const getAccessHandler = async (req, res) => {
    try {
        const accessData = req.body;
        const access = await getAccessController(accessData);
        res.status(200).json(access);
    } catch {
        res.status(404).json({ error: error.message })
    }
}

module.exports = getAccessHandler;