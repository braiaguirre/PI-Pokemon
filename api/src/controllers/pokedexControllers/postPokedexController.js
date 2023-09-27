// DEPENDENCIES
const { User, Pokemon } = require('../../DB_connection');

const postPokedexController = async (userId, pokemonId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    const pokemonDb = await Pokemon.findOne({ where: { id: pokemonId } })
    userDb.addPokemon(pokemonDb);
    return 'Pokemon added to the Pokedex';
}


module.exports = postPokedexController;