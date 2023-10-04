// DEPENDENCIES
const { User, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const pokemonsFilterController = async (filters) => {
    const { userId } = filters;
    console.log(filters);
    const userDb = await User.findOne({ where: { id: userId } });
    const query = queryBuilder(filters, Type);
    return await userDb.getPokemons({ ...query });
}


module.exports = pokemonsFilterController;