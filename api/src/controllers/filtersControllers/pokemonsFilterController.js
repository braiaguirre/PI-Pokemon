// DEPENDENCIES
const { Pokemon, User } = require('../../DB_connection');

const pokemonsFilterController = async (filtersData) => {
    const { order, type, userId } = filtersData;
    const userDb = await User.findOne({ where: { id: userId } });
    let pokemons = []
    
    if (order !== 'N') {
        pokemons = await userDb.getPokemons({
            order: [['id', order]]
        });
    } else {
        pokemons = await userDb.getPokemons();
    }
    
    return pokemons;
}


module.exports = pokemonsFilterController;