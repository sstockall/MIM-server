const express = require("express");
const knex = require('knex')(require('../knexfile'));
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.route('/')
    .post((req, res) => {
        const { email, password } = req.body;

        if (!email || !password ) {
            return res.status(400).send('Please enter the required information')
        }
    
    knex('users')
        .where({ email: email })
        .first()
        .then((user) => {
            const checkPassword = bcrypt.compareSync(password, user.password);

            if (!checkPassword) {
                return res.status(400).send('Invalid password, please try again')
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_KEY
            )
            res.json({ token })
        }) 
        .catch((err) => res.status(400).send('Invalid credentials'))   
    })

module.exports = router;