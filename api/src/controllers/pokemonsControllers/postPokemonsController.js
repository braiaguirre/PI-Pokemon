// DEPENDENCIES
const { User, Pokemon, Type } = require('../../DB_connection');

const postPokemonsController = async (pokemons, userId) => {
    const userDb = await User.findOne({ where: { id: userId } });

    await pokemons.forEach(async pokemon => {
        const [pokemonDb] = await Pokemon.findOrCreate({ 
            where: { id: pokemon.id },
            defaults: { ...pokemon }
        });
        await userDb.addPokemon(pokemonDb);
    });
    setTimeout(() => {}, 5000);
    // const userDbPokemons = await userDb.getPokemons({ order: [['id', 'ASC']] });
    return pokemons.sort((a, b) => a.id - b.id);
}

module.exports = postPokemonsController;