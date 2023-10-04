const queryBuilder = (filtersData, Type) => {
    const { order, direction, type, page } = filtersData;
    let query = {};
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    if (page) query = { ...query, limit: 12, offset: (page * 12) - 12 };
    return query;
}

module.exports = queryBuilder;