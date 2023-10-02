// DEPENDENCIES
const filterController = require('../../controllers/filtersControllers/filterController');

const filterHandler = async (req, res) => {
    try {
        const filtersData = req.query;
        const response = await filterController(filtersData);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = filterHandler;