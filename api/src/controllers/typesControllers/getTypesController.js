// DEPENDENCIES
const axios = require('axios');

const URL = 'https://pokeapi.co/api/v2/type/';

const getTypesController = async () => {
    const types = [];

    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        types.push(...data.results);
        current = data.next;
    }

    return types.map(type => type.name);
}


module.exports = getTypesController;