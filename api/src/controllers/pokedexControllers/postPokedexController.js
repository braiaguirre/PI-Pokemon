// DEPENDENCIES
const { User } = require('../../DB_connection');

const postPokedexController = async (userId, pokemonId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    const userDbPokedex = await userDb.getPokedex();

    const pokemonsId = userDbPokedex.getDataValue('pokemons');
    if (pokemonsId.includes(pokemonId)) return 'Already added';

    userDbPokedex.pokemons = [...pokemonsId, pokemonId];
    userDbPokedex.save();
    
    return 'Added correctly';
}


module.exports = postPokedexController;