// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const getLoginController = async (userOrEmail, password) => {
    const found = await User.findOne({
        where: { [Op.or]: [{ username: userOrEmail }, { email: userOrEmail }] }
    });
    if (found && found.password === password) {
        found.access = true;
        await found.save();
        return true;
    } else throw new Error('Incorrect user, email or password');
}


module.exports = getLoginController;