module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Cart', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        sneakerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
} 