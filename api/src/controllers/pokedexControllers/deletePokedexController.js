// DEPENDENCIES
const { User } = require('../../DB_connection');

const deletePokedexController = async (userId, pokemonId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    const pokemonDb = await Pokemon.findOne({ where: { id: pokemonId } })
    userDb.removePokemon(pokemonDb);
    return 'Pokemon removed from Pokedex';
}


module.exports = deletePokedexController;