const createValidation = (pokemon) => {
    const {
        name,
        xp,
        hp,
        attack,
        spAttack,
        defense,
        spDefense,
        speed,
        height,
        weight,
        type1,
        type2,
        ability1,
        ability2
    } = pokemon;

    const errors = {
        name: true,
        xp: true,
        hp: true,
        attack: true,
        spAttack: true,
        defense: true,
        spDefense: true,
        speed: true,
        height: true,
        weight: true,
        type1: true,
        type2: true,
        ability1: true,
        ability2: true
    }

    if (name) errors.name = false;
    if (xp > 0 && xp < 100) errors.xp = false;
    if (hp > 0 && hp < 100) errors.hp = false;
    if (attack > 0 && attack < 100) errors.attack = false;
    if (spAttack > 0 && spAttack < 100) errors.spAttack = false;
    if (defense > 0 && defense < 100) errors.defense = false;
    if (spDefense > 0 && spDefense < 100) errors.spDefense = false;
    if (speed > 0 && speed < 100) errors.speed = false;
    if (height > 0 && height < 300) errors.height = false;
    if (weight > 0 && weight < 300) errors.weight = false;
    if (type1) errors.type1 = false;
    if (type2 && type1 !== type2) errors.type2 = false
    if (ability1) errors.ability1 = false;
    if (ability2 && ability1 !== ability2) errors.ability2 = false;
    
    return errors;
}

export default createValidation;