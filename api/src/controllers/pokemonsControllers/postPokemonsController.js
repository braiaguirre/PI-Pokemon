// DEPENDENCIES
const { User, Pokemon, PokemonType } = require('../../DB_connection');

const postPokemonController = async (pokemon, userId) => {
    const [pokemonDb, created] = await Pokemon.findOrCreate({ 
        where: { id: pokemon.id },
        defaults: { ...pokemon }
    });
    const userDb = await User.findOne({ where: { id } });
    userDb.addPokemon(pokemonDb);
    return pokemonDb;
}

module.exports = postPokemonController;