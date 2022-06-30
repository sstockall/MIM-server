const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

router.route('/')
    .post((req, res) => {
        const { first_name, last_name, email, password, username} = req.body;

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).send("Please enter the required fields.");
        }
       
        const hashedPassword = bcrypt.hashSync(password, 10);
    
        const newUser = {
            ...req.body,
            password: hashedPassword,
            id: uuid()
        };
    
        knex('users')
            .insert(newUser)
            .then(() => {
                res.status(201).send("You're all sign up!");
            })
            .catch(() => {
                res.status(400).send("Failed registration");
            });
    });

module.exports = router;