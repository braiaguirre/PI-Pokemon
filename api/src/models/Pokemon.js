const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        xp: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        attack: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        spAttack: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        defense: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        spDefense: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        speed: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        height: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        weight: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        custom: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        types: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        abilities: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    }, { timestamps: false} );
};