// DEPENDENCIES
const getPokedexController = require('../../controllers/pokedexControllers/getPokedexController');

const getPokedexHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(req.params);
        const result = await getPokedexController(userId);
        res.status(200).json(result);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = getPokedexHandler;