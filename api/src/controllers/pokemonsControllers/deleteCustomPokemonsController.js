// DEPENDENCIES
const { User, Pokemon } = require('../../DB_connection');

const deleteCustomPokemonsController = async (id, userId) => {
    console.log(id,userId);
    const userDb = await User.findOne({ where: { id: userId } });
    await Pokemon.destroy( { where: { id } } );

    const userDbPokemons = await userDb.getPokemons();
    const pokemons = await Pokemon.findAll();

    return {
        pokeball: userDbPokemons,
        pokeballFiltered: userDbPokemons,
        pokedex: pokemons
    }
}

module.exports = deleteCustomPokemonsController;