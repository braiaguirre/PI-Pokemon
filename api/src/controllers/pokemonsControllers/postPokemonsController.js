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
    const userDbPokemons = await userDb.getPokemons({ order: [['id', 'ASC']] }); // TODO: FIX
    console.log(userDb);
    return userDbPokemons;
}

module.exports = postPokemonsController;