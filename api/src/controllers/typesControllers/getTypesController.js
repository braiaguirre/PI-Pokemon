const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type/';

const getTypesController = async () => {
    const types = [];

    // CHECKING NEXT PAGE
    let current = URL;
    while (current) {
        const { data } = await axios.get(current);
        console.log(data);
        types.push(...data.results);
        current = data.next;
    }

    return types.map(type => type.name);
}


module.exports = getTypesController;