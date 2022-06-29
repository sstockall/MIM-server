const express = require("express");
const router = express.Router();

router.route('/')
    .post((req, res) => {
        const { first_name, last_name, phone, address, email, password } = req.body;

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).send("Please enter the required fields.");
        }
    
        const hashedPassword = bcrypt.hashSync(password, 10);
    
        // Create the new user
        const newUser = {
            ...req.body,
            password: hashedPassword
        };
    
        knex('users')
            .insert(newUser)
            .then(() => {
                res.status(201).send("Registered successfully");
            })
            .catch(() => {
                res.status(400).send("Failed registration");
            });
    });

module.exports = router;