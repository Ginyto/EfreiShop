const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

//Importing the models
// const PrescriptionModel = require('./models/Prescription');
// const MedicineModel = require('./models/Medicine');
// const UserModel = require('./models/User');



// const database = "e6b797zu41z5pbpk";
// const username = "tgivu0yxfwk9f01j";
// const password = "o3bpsiay67osqvk2";
// const host = "oliadkuxrl9xdugh.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";


// /**
//  * Connect to the database 
//  * 
//  */
// const sequelize = new Sequelize(database, username, password, {

//     dialect: "mysql",
//     host: host

// });



//authentication
// try {
//     sequelize.authenticate();
//     console.log(`Connection has been established successfully to ${database} via ${username} on ${host}`);

// } catch (error) {
//     console.error(`Unable to connect to ${database} via ${username} on ${host}`, error)
// }


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







