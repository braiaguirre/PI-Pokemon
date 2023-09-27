// DEPENDENCIES
const postPokedexController = require('../../controllers/pokedexControllers/postPokedexController');

const postPokedexHandler = async (req, res) => {
    try {
        const { userId, pokemonId } = req.body;
        const response = await postPokedexController(userId, pokemonId);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = postPokedexHandler;