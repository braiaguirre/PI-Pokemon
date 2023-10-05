// DEPENDENCIES
const { User, Pokemon, Type } = require('../../DB_connection');

const postCustomPokemonsController = async (pokemon) => {
    const userId = "317f21df-2838-4790-b9fb-ca639d218398"
    const userDb = await User.findOne({ where: { id: userId } });
    const pokemonDb = await Pokemon.create({ ...pokemon, custom: true });
    userDb.addPokemon(pokemonDb);
    
    pokemon.types.forEach(async type => {
        const typeDb = await Type.findOne({ where: { name: type} });
        pokemonDb.addType(typeDb);
    });
    return pokemon;
}

module.exports = postCustomPokemonsController;