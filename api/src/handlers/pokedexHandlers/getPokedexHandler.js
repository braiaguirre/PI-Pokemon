// DEPENDENCIES
const getPokedexController = require('../../controllers/pokedexControllers/getPokedexController');

const getPokedexHandler = async (req, res) => {
    try {
        const { page } = req.params;
        const response = await getPokedexController(page);
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