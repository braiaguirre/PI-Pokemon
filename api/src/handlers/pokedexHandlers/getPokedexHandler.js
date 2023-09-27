// DEPENDENCIES
const getPokedexController = require('../../controllers/pokedexControllers/getPokedexController');

const getPokedexHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const response = await getPokedexController(userId);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = getPokedexHandler;