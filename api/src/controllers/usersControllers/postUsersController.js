// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const postUsersController = async (userData) => {
    const { username, email } = userData;
    const [userDb, created] = await User.findOrCreate({
        where: { [Op.or]: [{ username }, { email } ] },
        defaults: { ...userData, access: false },
    });

    if (!created) throw new Error('Username or email already registered');
    return 'Signed up correctly, proceed to login';
}

module.exports = postUsersController;