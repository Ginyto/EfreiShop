module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'This mail is already used'
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
} 