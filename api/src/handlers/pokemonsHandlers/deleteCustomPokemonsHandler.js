// DEPENDENCIES
const deleteCustomPokemonsController = require('../../controllers/pokemonsControllers/deleteCustomPokemonsController');

const deletePokemonsHandler = async (req, res) => {
    try {
        const { id, userId } = req.body;
        const response = await deleteCustomPokemonsController(id, userId);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json({ 
            title: 'Error',
            message: err.message,
            type: 'ALERT'
        });
    }
}

module.exports = deletePokemonsHandler;