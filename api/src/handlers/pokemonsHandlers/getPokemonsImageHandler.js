// DEPENDENCIES
const getPokemonsImageController = require('../../controllers/pokemonsControllers/getPokemonsImageController');

const getPokemonsImageHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getPokemonsImageController(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'alert'
        });
    };
};

module.exports = getPokemonsImageHandler;