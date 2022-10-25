const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
require('dotenv').config()


//Importing the models
// const PrescriptionModel = require('./models/Prescription');
// const MedicineModel = require('./models/Medicine');
// const UserModel = require('./models/User');



const database = process.env.DB;
const username = process.env.USERNAME
const password = process.env.PASSWORD;
const host = process.env.DB_HOST;


/**
 * Connect to the database 
 * 
 */
const sequelize = new Sequelize(database, username, password, {

    dialect: "mysql",
    host: host

});




try {
    sequelize.authenticate();
    console.log(`Connection has been established successfully to ${database} via ${username} on ${host}`);

} catch (error) {
    console.error(`Unable to connect to ${database} via ${username} on ${host}`, error)
}


//Creating the models and syncing them with the database
// const Prescription = PrescriptionModel(sequelize, DataTypes);
// const Medicine = MedicineModel(sequelize, DataTypes);
// const User = UserModel(sequelize, DataTypes);


/**
 * Sync the models with the database
 * 
 */
const syncDB = () => {

    return sequelize.sync({ force: false }).then(() => {



    }, (err) => {
        console.log('An error occurred while creating the table:', err)
    })



}

module.exports = {
    syncDB, 
}







