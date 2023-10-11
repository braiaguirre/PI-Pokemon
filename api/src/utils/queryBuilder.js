const queryBuilder = (filtersData, Type) => {
    const { order, direction, type, origin, page } = filtersData;
    let query = {};
    if (origin === 'custom') query = { ...query, where: { custom: true } };
    else if (origin === 'pokemon') query = { ...query, where: { custom: false } };
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    if (page) query = { ...query, limit: 10, offset: (page * 10) - 10 };
    return query;
}

module.exports = queryBuilder;