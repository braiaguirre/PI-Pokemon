const getPokedexController = async (page, pokedex) => {
    const min = (page * 12 - 12) > 0 ? (page * 12 - 12) : 0;
    const max = (page * 12) < pokedex.length ? (page * 12) : pokedex.length - 1;
    const pokedexPage = pokedex.slice(min, max);
    return {
        pokedexPage,
        page
    };
}

module.exports = getPokedexController;