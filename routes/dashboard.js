const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
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
                'records.updated_at'
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
        const { id, user_id, location, width, length, special_info } = req.body;
        const newMole = { id, user_id, location, width, length, special_info };
        knex.insert(newMole).into("records").then(() => {
          knex('records')
          .then((data) => {
            res.status(200).json(data);
          })
        }).catch((err) =>
          res.status(400).send(`Error adding mole: ${err}`)
        );
      })

router.route('/records/:recordId')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = router;