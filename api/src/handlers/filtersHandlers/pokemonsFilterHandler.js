// DEPENDENCIES
const pokemonsFilterController = require('../../controllers/filtersControllers/pokemonsFilterController');

const pokemonsFilterHandler = async (req, res) => {
    try {
        const filtersData = req.query;
        const response = await pokemonsFilterController(filtersData);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = pokemonsFilterHandler;