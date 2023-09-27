// DEPENDENCIES
const postPokedexController = require('../../controllers/pokedexControllers/postPokedexController');

const postPokedexHandler = async (req, res) => {
    try {
        const pokedexData = req.body;
        const result = await postPokedexController(pokedexData);
        res.status(200).json(result);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = postPokedexHandler;