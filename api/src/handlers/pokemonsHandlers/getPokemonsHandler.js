// DEPENDENCIES
const getPokemonsController = require('../../controllers/pokemonsControllers/getPokemonsController');

const getPokemonsHandler = async (req, res) => {
    try {
        const response = await getPokemonsController();
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getPokemonsHandler;