// DEPENDENCIES
const { User } = require('../../DB_connection');

const getPokedexController = async (userId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    const pokemons = userDb.getPokemons();
    if (pokemons) return pokemons;
    else return 'There are no Pokemons in the Pokedex';
}


module.exports = getPokedexController;