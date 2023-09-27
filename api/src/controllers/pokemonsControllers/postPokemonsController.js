// DEPENDENCIES
const { Pokemon } = require('../../DB_connection');

const postPokemonController = async (pokemon) => {
    const [pokemonDb, created] = await Pokemon.findOrCreate({ 
        where: { id: pokemon.id },
        defaults: { ...pokemon }
    });
    return pokemonDb;
}

module.exports = postPokemonController;