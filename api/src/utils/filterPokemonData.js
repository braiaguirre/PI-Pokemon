const filterPokemonData = (data) => {

    // FILTERING API DATA, AND CHECKING IN CASE API CHANGES IN THE FUTURE
    const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const spAttack = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
    const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
    const spDefense = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
    const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;
    const types = data.types.map(ability => ability.type.name);
    const abilities = data.abilities.map(ability => ability.ability.name);
    const image = data.sprites.other.home.front_default;

    return {
        id: data.id,
        name: data.name,
        xp: data.base_experience,
        hp: hp,
        attack: attack,
        spAttack: spAttack,
        defense: defense,
        spDefense: spDefense,
        speed: speed,
        height: data.height,
        weight: data.weight,
        types: types,
        abilities: abilities,
        image: image
    }

}

module.exports = filterPokemonData;