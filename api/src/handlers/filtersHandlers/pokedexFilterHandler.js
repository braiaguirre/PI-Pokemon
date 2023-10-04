// DEPENDENCIES
const pokedexFilterController = require('../../controllers/filtersControllers/pokedexFilterController');

const pokedexFilterHandler = async (req, res) => {
    try {
        const filtersData = req.query;
        const response = await pokedexFilterController(filtersData);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = pokedexFilterHandler;