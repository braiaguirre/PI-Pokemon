// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const postUsersController = async (userData) => {
    const { user, email } = userData;
    const [userDb, created] = await User.findOrCreate({
        where: { [Op.or]: [{ user }, { email } ] },
        defaults: { ...userData, access: false },
    });

    if (created) return 'New user added';
    else return 'Username or email already exists';
}


module.exports = postUsersController;