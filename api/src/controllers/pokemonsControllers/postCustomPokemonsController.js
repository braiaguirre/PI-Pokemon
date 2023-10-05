// DEPENDENCIES
const { User, Pokemon, Type } = require('../../DB_connection');

const postCustomPokemonsController = async (pokemon, userId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    const [pokemonDb, created] = await Pokemon.create(pokemon);
    userDb.addPokemon(pokemonDb);
    pokemon.tpyes.forEach(async type => {
        const typeDb = await Type.findOne({ where: { name: type} });
        pokemonDb.addType(typeDb);
    });
    return pokemon;
}

module.exports = postCustomPokemonsController;