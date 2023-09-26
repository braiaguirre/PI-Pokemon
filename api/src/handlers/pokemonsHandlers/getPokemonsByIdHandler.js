// DEPENDENCIES
const getPokemonsByIdController = require('../../controllers/pokemonsControllers/getPokemonsByIdController');

const getPokemonsByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const pokemon = await getPokemonsByIdController(id);
        res.status(200).json(pokemon);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = getPokemonsByIdHandler;