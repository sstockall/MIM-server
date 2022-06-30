const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const knex = require('knex')(require('../knexfile'));

router.route('/')
    .post((req, res) => {
        const { first_name, last_name, email, password } = req.body;

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).send("Please enter the required fields.");
        }
       
        const hashedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = {
            ...req.body,
            password: hashedPassword,
            id: uuidv4()
        };
    
        knex('users')
            .insert(newUser)
            .then(() => {
                res.status(201).send("You're all signed up!");
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    });

module.exports = router;