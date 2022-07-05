const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');
const authentication = require('./middleware/authentication');
const multer  = require('multer');

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
            res.status(200).json(data);
          })
        }).catch((err) =>
          res.status(400).send(`Error adding mole: ${err}`)
        );
      })

  router.route('/:recordId')
    .delete((req, res) => {
      knex('records').where({'id': req.params.recordId}).del()
      .then(() => {
        res.status(200).send("Record was deleted")
      })
      .catch((err) => console.error(err))
    })
    .put((req,res) => {
      knex('records')
      .where({id: req.params.recordId})
      .update({
        location: req.body.location,
        width: req.body.width,
        length: req.body.length,
        texture: req.body.texture,
        coloring: req.body.coloring,
        special_info: req.body.special_info
      })
      .then(() => {
        console.log(req)
        res.status(200).send("Record was updated")
      })
      .catch((err) => console.error(err))
    })


module.exports = router;