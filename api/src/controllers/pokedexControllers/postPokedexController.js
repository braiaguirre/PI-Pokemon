// DEPENDENCIES
const { User } = require('../../DB_connection');

const postPokedexController = async (pokedexData) => {
    const { userId, pokemonId } = pokedexData;

    // GET USER AND POKEDEX
    const userDb = await User.findOne({ where: { id: userId } });
    const userDbPokedex = await User.getPokedex();

    // IF BOTH ARE FOUND
    if (userDb && userDbPokedex) {
        // GET POKEDEX ARRAY, ADD NEW ID, UPDATE AND RETURN
        const pokemons = userDbPokedex.getDataValue('pokemons');
        if (pokemons.includes(pokemonId)) return 'Already added';
        else pokemons.push(pokemonId);
        userDbPokedex.setDataValue('pokemons', pokemons);
        return 'Added correctly';
    } else return 'User or pokedex not found';
}


module.exports = postPokedexController;