// DEPENDENCIES
const { Pokemon } = require('../../DB_connection');

const postPokemonController = async (pokemon) => {
    const [pokemonDb, created] = await Pokemon.findOrCreate({ 
        where: { id: pokemon.id },
        defaults: { ...pokemon }
    });
    console.log(created);
    return created ? pokemonDb : 'Already exists';
}

module.exports = postPokemonController;