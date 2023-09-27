// DEPENDENCIES
const postPokemonController = require('../../controllers/pokemonsControllers/postPokemonsController');

const postPokemonsHandler = async (req, res) => {
    try {
        const pokemon = req.body;
        const response = await postPokemonController(pokemon);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = postPokemonsHandler;