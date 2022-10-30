const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
require('dotenv').config()


//Importing the models
const UserModel = require('./models/User');
const SneakerModel = require('./models/Sneaker');
const CartModel = require('./models/Cart');



const database = "f10asnaepr3n29ua";
const username = "dq8qo54tr7un498t";
const password = "vvitv6skjmq9jaxq";
const host = "ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
const port = "3306";


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
const Cart = CartModel(sequelize, DataTypes);


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
    sequelize, syncDB, User, Sneaker, Cart
}







