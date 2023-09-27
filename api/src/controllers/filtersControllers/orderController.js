const orderController = (prop, order, pokemons) => 
    order === 'A'
    ? pokemons.sort((a, b) => a[prop] - b[prop])
    : pokemons.sort((a, b) => a[prop] - b[prop]);

module.exports = orderController;