const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key')
const auth = require('../auth/auth');

const Sequelize = require('../sequelize')
const { Op } = require("sequelize");

//Importing the models
const User = require('../models/User');




// Sequelize.syncDB()


//TEST
router.get('/', (req, res) => {
    res.send('API is working')
})

//GET





























//LOGIN
router.post('/signup', (req, res) => {

    bcrypt.hash(req.query.password, 10).then(hash => {

        User.create({

            name: req.query.name,
            password: hash,
            lastname: req.query.lastname,
            identification: req.query.identification,
            role: req.query.role

        }).then(user => {
            res.json({ message: 'Signup successful', user: user, sign: true })
        })
            .catch(err => {
                res.json({ message: 'Signup failed', err: err, sign: false })
            })
    })

})


router.post('/login', (req, res) => {

    const name = req.query.identification
    const mdp = req.query.password


    User.findOne({
        where: {
            identification: name
        }
    }).then(user => {

        if (user) {

            bcrypt.compare(mdp, user.password, (err, result) => {

                if (result) {

                    //JWT
                    const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '1h' });

                    res.json({ message: 'Login successful', user: user, auth: true, token: token })

                } else {

                    res.json({ message: 'Login failed -> wrong Password', auth: false })
                }
            })
        }
        else {
            res.json({ message: 'Login failed -> Wrong Username', auth: false })
        }
    })

})


module.exports = router;