// DEPENDENCIES
const postPokemonsController = require('../../controllers/pokemonsControllers/postPokemonsController');

const postPokemonsHandler = async (req, res) => {
    try {
        const { pokemons, userId } = req.body;
        const response = await postPokemonsController(pokemons, userId);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = postPokemonsHandler;