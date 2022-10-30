module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sneaker', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },

        images: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },

        color: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
} 