// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const getLoginController = async (userOrEmail, password) => {
    const userDb = await User.findOne({
        where: { [Op.or]: [{ username: userOrEmail }, { email: userOrEmail }] }
    });
    if (userDb && userDb.password === password) {
        const userDbPokemons = await userDb.getPokemons(); 
        console.log(userDbPokemons);
        return {
            userId: userDb.id,
            access: true,
            pokemons: userDbPokemons,
            pokemonsFiltered: userDbPokemons,
        };
    } else throw new Error('Incorrect user, email or password');
}


module.exports = getLoginController;