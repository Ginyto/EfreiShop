const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
// const privateKey = require('../auth/private_key')
// const auth = require('../auth/auth');

const Sequelize = require('../sequelize')
const { Op } = require("sequelize");




// Sequelize.syncDB()


//GET
router.get('/', (req, res) => {
    res.send('API is working')
})




module.exports = router;