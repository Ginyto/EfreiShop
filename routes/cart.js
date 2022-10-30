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



Sequelize.syncDB()


//TEST
router.get('/', (req, res) => {
    res.send('API is working')
})



//GET 
router.get('/', (req, res) => {
    res.send('API is working')
})


router.get('/cart', (req, res) => {

    Sneaker.findAll().then(cart => {
        res.send(cart)
        
    }, (err) => {
        res.status(500).send(err.message)
    })

})