// DEPENDENCIES
const filterController = require('../../controllers/filtersControllers/filterController');

const filterHandler = async (req, res) => {
    try {
        const { prop, filter, pokemons } = req.body;
        const result = await filterController(prop, filter, pokemons);
        res.status(200).json(result);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = filterHandler;