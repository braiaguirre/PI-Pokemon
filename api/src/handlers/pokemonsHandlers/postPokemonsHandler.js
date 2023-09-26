// DEPENDENCIES
const postPokemonController = require('../../controllers/pokemonsControllers/postPokemonsController');

const postPokemonsHandler = async (req, res) => {
    try {
        const pokemon = req.body;
        const result = await postPokemonController(pokemon);
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = postPokemonsHandler;