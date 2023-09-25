// DEPENDENCIES
const getPokemonByIdController = require('../../controllers/pokemonsControllers/getPokemonByIdController');

const getPokemonsByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await getPokemonByIdController(id);
        res.status(200).json(pokemon);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getPokemonsByIdHandler;