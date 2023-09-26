const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokedex', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        pokemons: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    }, { timestamps: false} );
};