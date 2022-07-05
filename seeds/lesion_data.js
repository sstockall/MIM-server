exports.seed = async function(knex) {

  await knex('lesions').del()
  let lesions = [{
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }, {
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }, {
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }, {
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }, {
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }, {
    name: '',
    description: '',
    treatments: '',
    addtional_info: '',
    status: ''
  }
]
  await knex('lesions').insert(lesions)
};
