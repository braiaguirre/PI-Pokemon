const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4  
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, { timestamps: false} );
};