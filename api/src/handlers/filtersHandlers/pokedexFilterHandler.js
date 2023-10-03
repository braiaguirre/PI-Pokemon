// DEPENDENCIES
const pokedexFilterController = require('../../controllers/filtersControllers/pokedexFilterController');

const pokedexFilterHandler = async (req, res) => {
    try {
        const filtersData = req.query;
        const response = await pokedexFilterController(filtersData);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = pokedexFilterHandler;