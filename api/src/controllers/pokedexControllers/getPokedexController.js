// DEPENDENCIES
const { User, Pokemon } = require('../../DB_connection');

const getPokedexController = async (userId) => {

    const userDb = await User.findOne({ where: { id: userId } });
    const userDbPokedex = await userDb.getPokedex();

    if (userDb && userDbPokedex) {
        const pokemonsId = userDbPokedex.pokemons;
        return pokemonsId.map(async (pokemonId) => await Pokemon.findOne({ where: { id: pokemonId } }));
    } else return 'User or pokedex not found';
}


module.exports = getPokedexController;