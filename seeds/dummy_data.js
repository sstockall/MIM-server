exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('records').del()
  let users = [{
    id:"1jr3-43d-lya",
    username: 'sstock',
    password: 'Marcel17',
    first_name: 'Sam',
    last_name: 'Stockall',
    avatar_url: '',
    email: 'sam.stockall@hotmail.com'
  }, {
    id:"1jr3-43d-lxz",
    username: 'marceltheshell',
    password: 'Marcel17',
    first_name: 'Marcel',
    last_name: 'Stockall',
    avatar_url: '',
    email: 'sam.stockall@hotmail.com'
  }]
  let records = [{
    id: "12345",
    user_id: "1jr3-43d-lya",
    location: 'left upper thigh',
    width: '1mm',
    length: '5mm',
    special_info: 'Biopsied and found to be benign'
  }, {
    id: "12346",
    user_id: "1jr3-43d-lxz",
    location: 'left upper thigh',
    width: '1mm',
    length: '5mm',
    special_info: 'Waiting on biopsy results'
}]
  await knex('users').insert(users)
  await knex('records').insert(records)
};
