const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
require('dotenv').config()


//Importing the models
const UserModel = require('./models/User');
const SneakerModel = require('./models/Sneaker');



const database = process.env.DB;
const username = process.env.USERNAME
const password = process.env.PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DBPORT;


/**
 * Connect to the database 
 * 
 */
const sequelize = new Sequelize(database, username, password, {

    dialect: "mysql",
    host: host,
    port: port
});




try {
    sequelize.authenticate();
    console.log(`Connection has been established successfully to ${database} via ${username} on ${host} on port ${port}.`);

} catch (error) {
    console.error(`Unable to connect to ${database} via ${username} on ${host}`, error)
}


//Creating the models and syncing them with the database
// const Prescription = PrescriptionModel(sequelize, DataTypes);
// const Medicine = MedicineModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Sneaker = SneakerModel(sequelize, DataTypes);


/**
 * Sync the models with the database
 * 
 */
const syncDB = () => {

    return sequelize.sync({ force: false }).then(() => {
        console.log('Database & tables created!')
    }).catch((err) => {
        console.log(err)
    })

}




module.exports = {
    sequelize, syncDB, User, Sneaker
}







