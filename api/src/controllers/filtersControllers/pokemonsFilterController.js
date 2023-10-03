// DEPENDENCIES
const { Sequelize, Op } = require('sequelize');
const { Pokemon, User, Type } = require('../../DB_connection');

const pokemonsFilterController = async (filtersData) => {
    const { order, direction, type, userId } = filtersData;
    const userDb = await User.findOne({ where: { id: userId } });
    let pokemons = []
    let query = {};
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    console.log('----', order, direction, type)
    try {
        pokemons = await userDb.getPokemons({ ...query });
    } catch (err) {
        console.log(err.message);
        pokemons = await userDb.getPokemons();
    }
    return pokemons;
    if (order !== 'N') {
        pokemons = await userDb.getPokemons({
            order: [['id', order]]
        });

    } else {
        pokemons = await userDb.getPokemons();
    }
    
    return pokemons;
}


module.exports = pokemonsFilterController;