// DEPENDENCIES
const getPokemonsByNameController = require('../../controllers/pokemonsControllers/getPokemonsByNameController');

const getPokemonsByNameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const pokemon = await getPokemonsByNameController(name);
        res.status(200).json(pokemon);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

module.exports = getPokemonsByNameHandler;