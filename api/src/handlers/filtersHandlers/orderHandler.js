// DEPENDENCIES
const orderController = require('../../controllers/filtersControllers/orderController');

const orderHandler = async (req, res) => {
    try {
        const { prop, order, pokemons } = req.body;
        const response = await orderController(prop, order, pokemons);
        res.status(200).json(response);
    } catch (err) {
        res.status(200).json({ error: err.message });
    }
}

module.exports = orderHandler;