exports.seed = async function(knex) {
  await knex('terms').del()
  let terms = [{
    name: '',
    definition: '',
    example: '',
  }, {
    name: '',
    definition: '',
    example: '',
  }, {
    name: '',
    definition: '',
    example: '',
  }, {
    name: '',
    definition: '',
    example: '',
  }, {
    name: '',
    definition: '',
    example: '',
  }, {
    name: '',
    definition: '',
    example: '',
  }
]
  await knex('terms').insert(terms)
};
