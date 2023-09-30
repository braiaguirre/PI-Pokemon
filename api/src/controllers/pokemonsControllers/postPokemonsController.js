// DEPENDENCIES
const { User, Pokemon, PokemonType } = require('../../DB_connection');

const postPokemonsController = async (pokemons, userId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    pokemons.forEach(async pokemon => {
        const [pokemonDb] = await Pokemon.findOrCreate({ 
            where: { id: pokemon.id },
            defaults: { ...pokemon }
        });
        userDb.addPokemon(pokemonDb);
    });
    return 'asd';
}

module.exports = postPokemonsController;