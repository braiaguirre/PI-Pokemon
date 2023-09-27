// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const postUsersController = async (userData) => {
    const { user, email } = userData;
    
    // CREATE USER
    const [userDb, created] = await User.findOrCreate({
        where: { [Op.or]: [{ user }, {email} ] },
        defaults: { ...userData, access: false },
    });

    // IF USER IS CREATED, CREATE POKEDEX
    if (created) {
        userDb.createPokedex({
            userId: userDb.id,
            pokemons: []
        })
        return 'New user added';
    } else return 'Username or email already exists';
}


module.exports = postUsersController;