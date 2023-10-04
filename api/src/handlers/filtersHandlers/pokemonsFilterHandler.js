// DEPENDENCIES
const pokemonsFilterController = require('../../controllers/filtersControllers/pokemonsFilterController');

const pokemonsFilterHandler = async (req, res) => {
    try {
        const filtersData = req.query;
        const response = await pokemonsFilterController(filtersData);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = pokemonsFilterHandler;