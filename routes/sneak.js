const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key')
const auth = require('../auth/auth');

const Sequelize = require('../sequelize')
const { Op } = require("sequelize");

//Importing the models
const { User } = require('../sequelize');
const { Sneaker } = require('../sequelize');
const { Cart } = require('../sequelize');



Sequelize.syncDB()


//TEST
router.get('/', (req, res) => {
    res.send('API is working')
})


//GET
router.get('/sneakers', (req, res) => {

    Sneaker.findAll().then(sneakers => {
        res.send(sneakers)
        
    }, (err) => {
        res.status(500).send(err.message)
    })

})

//GET
router.get('/cart', (req, res) => {

    Cart.findAll().then(cart => {
        res.send(cart)
        
    }, (err) => {
        res.status(500).send(err.message)
    })
})


//POST 
router.post('/addsneaker',(req, res) => {
    Cart.create({ 
        userID: 1,
        sneakerID : 1
    })  .then()
        .catch(err => {
        res.send(err)
    }
    )
})







module.exports = router;