// DEPENDENCIES
const { Op } = require('sequelize');
const { User } = require('../../DB_connection');

const getLoginController = async (accessData) => {

    const { userOrEmail, password } = accessData;
    const found = await User.findOne({
        where: { [Op.or]: [{ user: userOrEmail }, { email: userOrEmail }] }
    });

    if (found && found.password === password) {
        found.access = true;
        await found.save();
        return { access: true };
    }
    else {
        return 'Incorrect user, email or password';
    }

}


module.exports = getLoginController;