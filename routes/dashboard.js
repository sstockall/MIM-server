const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');
const authentication = require('./middleware/authentication');

router.get("/", authentication, (req, res) => {
        knex('users')
        .where({ email: req.user.email })
        .first()
        .then((user) => {
          delete user.password;
          knex('users')
            .join('records', 'users.id', 'records.user_id')
            .select( 'users.id AS user_id',
                'users.first_name',
                'users.last_name',
                'records.id AS record_id',
                'records.location',
                'records.width',
                'records.length',
                'records.special_info',
                'records.updated_at',
                'records.texture',
                'records.coloring'
            )
            .where({'user_id': user.id})
            .then((records) => {
              res.status(200).json({user, records})
            })
        })
        .catch((err) => res.status(400).send(`Error retrieving user info: ${err}`)
        )
    })

router.route('/records')
    .post((req, res) => {
        const newMole = {
            ...req.body,
            id: uuidv4()
            };
        knex.insert(newMole).into("records").then(() => {
          knex('records')
          .then((data) => {
            console.log(data)
            res.status(200).json(data);
          })
        }).catch((err) =>
          res.status(400).send(`Error adding mole: ${err}`)
        );
      })

module.exports = router;