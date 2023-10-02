// DEPENDENCIES
const axios = require('axios');
const { Type } = require('../../DB_connection');

const URL = 'https://pokeapi.co/api/v2/type/';

const getTypesController = async () => {
    const types = [];
    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        types.push(...data.results);
        current = data.next;
    };
    types.forEach(async type => {
        await Type.findOrCreate({
            where: { name: type.name }
        });
    });
    return await Type.findAll();
}


module.exports = getTypesController;