// DEPENDENCIES
const deletePokedexController = require('../../controllers/pokedexControllers/deletePokedexController');

const deletePokedexHandler = async (req, res) => {
    try {
        const pokedexData = req.body;
        const result = await deletePokedexController(pokedexData);
        res.status(200).json(result);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = deletePokedexHandler;