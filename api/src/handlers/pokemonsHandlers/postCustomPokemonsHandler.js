// DEPENDENCIES
const postCustomPokemonsController = require('../../controllers/pokemonsControllers/postCustomPokemonsController');

const postCustomPokemonsHandler = async (req, res) => {
    try {
        const  { pokemon, userId }  = req.body;
        console.log(pokemon, userId);
        const response = await postCustomPokemonsController(pokemon, userId);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = postCustomPokemonsHandler;