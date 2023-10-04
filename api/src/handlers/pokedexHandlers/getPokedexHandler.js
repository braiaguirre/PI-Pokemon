// DEPENDENCIES
const getPokedexController = require('../../controllers/pokedexControllers/getPokedexController');

const getPokedexHandler = async (req, res) => {
    try {
        const { page, pokedex } = req.body;
        const response = await getPokedexController(page, pokedex);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = getPokedexHandler;