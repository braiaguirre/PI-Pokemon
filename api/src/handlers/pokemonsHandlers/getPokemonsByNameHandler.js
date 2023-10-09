// DEPENDENCIES
const getPokemonsByNameController = require('../../controllers/pokemonsControllers/getPokemonsByNameController');

const getPokemonsByNameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const response = await getPokemonsByNameController(name);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: 'No Pokemon found, please enter the exact name.',
            type: 'ALERT'
        });
    }
}

module.exports = getPokemonsByNameHandler;