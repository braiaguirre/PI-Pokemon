const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type/';

const getTypesController = async () => {
    const results = [];

    // CHECKING NEXT PAGE
    let next = URL;
    while (next) {
        const { data } = await axios.get(next);
        results.push(data.results);
        next = data.next;
    }

    return results.map(type => type.name);
}


module.exports = getTypesController;