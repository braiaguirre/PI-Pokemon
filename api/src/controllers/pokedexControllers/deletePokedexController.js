// DEPENDENCIES
const { User } = require('../../DB_connection');

const deletePokedexController = async (pokedexData) => {
    const { userId, pokemonId } = pokedexData;
    
    const userDb = await User.findOne({ where: { id: userId } });
    const userDbPokedex = await userDb.getPokedex();

    const pokemonsId = userDbPokedex.getDataValue('pokemons');
    const filteredPokemonsId = pokemonsId.filter(id => id !== pokemonId);
    if (pokemonsId.length === filteredPokemonsId.length) return 'Pokemon not found';
    userDbPokedex.pokemons = [ ...filteredPokemonsId ];
    userDbPokedex.save();
    
    return 'Deleted correctly';
}


module.exports = deletePokedexController;