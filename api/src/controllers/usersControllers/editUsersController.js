// DEPENDENCIES
const { User } = require('../../DB_connection');

const postUsersController = async (editUserData) => {
    const { id, edits } = editUserData;

    // GET USER
    const userDb = await User.findOne({ where: { id } });
    for (let edit in edits) userDb[edit] = edits[edit];

    userDb.save();
    return 'Edited';
}


module.exports = postUsersController;