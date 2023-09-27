// DEPENDENCIES
const deletePokedexController = require('../../controllers/pokedexControllers/deletePokedexController');

const deletePokedexHandler = async (req, res) => {
    try {
        const { userId, pokemonId } = req.body;
        const response = await deletePokedexController(userId, pokemonId);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = deletePokedexHandler;