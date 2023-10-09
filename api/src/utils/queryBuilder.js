const queryBuilder = (filtersData, Type) => {
    console.log(filtersData);
    const { order, direction, type, page } = filtersData;
    let query = {};
    if (type) query = { ...query, include: [{ model: Type, where: { name: type } }] };
    if (order && direction) query = { ...query, order: [[ order, direction ]] };
    if (page) query = { ...query, limit: 10, offset: (page * 10) - 10 };
    return query;
}

module.exports = queryBuilder;