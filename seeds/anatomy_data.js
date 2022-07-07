exports.seed = async function(knex) {
  await knex('terms').del()
  let terms = [{
    name: 'Anterior',
    definition: 'In front of/front, similar to ventral',
    example: 'Right anterior cheek',
  }, {
    name: 'Posterior',
    definition: 'Behind, similar to posterior',
    example: 'Posterior neck (nape)',
  }, {
    name: 'Ventral',
    definition: 'Towards front of body, similar to anterior',
    example: 'Ventral hand',
  }, {
    name: 'Dorsal',
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
