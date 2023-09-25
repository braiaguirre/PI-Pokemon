const filterPokemonData = (data) => {

    // FILTERING API DATA, AND CHECKING IN CASE API CHANGES IN THE FUTURE
    const image = data.sprites.other.home.front_default;
    const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
    const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
    const types = data.types.map(type => type.type.name);

    return {
        id: data.id,
        name: data.name,
        image: image,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: data.height,
        weight: data.weight,
        types: types
    }

}

module.exports = filterPokemonData;