// DEPENDENCIES
const { User, Pokemon, Type } = require('../../DB_connection');

const postPokemonsController = async (pokemons, userId) => {
    const userDb = await User.findOne({ where: { id: userId } });
    pokemons.forEach(async pokemon => {
        const [pokemonDb] = await Pokemon.findOrCreate({ 
            where: { id: pokemon.id },
            defaults: { ...pokemon }
        });
        userDb.addPokemon(pokemonDb);

        pokemon.types.forEach(async type => {
            const typeDb = await Type.findOne({
                where: { name: type }
            });
            pokemonDb.addType(typeDb);
        });
        
        
    });
    return 'asd';
}

module.exports = postPokemonsController;