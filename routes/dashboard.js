const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
const authentication = require('../middleware/authentication');
const { v4: uuidv4 } = require('uuid');

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
        const newMole = {
          ...req.body, 
           id: uuidv4() 
          };
          knex('records')
          .insert(newMole)
          .then(() => {
              res.status(201).send('New mole logged!');
          })
          .catch((error) => {
              res.status(400).send(error);
          });
      })

router.route('/records/:recordId')
    .get((req, res) => {

    })
    .put((req, res) => {

    })
    .delete((req, res) => {

    })

module.exports = router;