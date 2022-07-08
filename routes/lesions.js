const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.route('/')
    .get((_req, res) => {
        knex('lesions')
        .select( 'lesions.id',
            'lesions.name',
            'lesions.description',
            'lesions.treatments',
            'lesions.addtional_info AS photo',
            'lesions.status'
        )
        .then((lesion) => {
            res.status(200).json({ lesion })
        })
        .catch((err) => console.log(err))
    })

module.exports = router;