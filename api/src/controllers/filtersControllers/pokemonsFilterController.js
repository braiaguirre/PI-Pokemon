// DEPENDENCIES
const { User, Type } = require('../../DB_connection');
const queryBuilder = require('../../utils/queryBuilder');

const pokemonsFilterController = async (filtersData) => {
    const { userId } = filtersData;
    const userDb = await User.findOne({ where: { id: userId } });
    const query = queryBuilder(filtersData);
    return await userDb.getPokemons({ ...query });
}


module.exports = pokemonsFilterController;