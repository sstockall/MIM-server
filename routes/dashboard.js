const express = require("express");
const knex = require('knex')(require('../knexfile'));
const router = express.Router();

router.route("/")
    .get((req, res) => {
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
        .where({'user_id': req.params.userId})
        .then((data) => {
          console.log(data)
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retrieving user info: ${err}`)
        )
    })

router.route('/records')
    .get((req, res) => {

    })
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