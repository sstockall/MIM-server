// module.exports = {
//   development: {
//     client: 'mysql',
//     connection: {
//       host: '127.0.0.1',
//       user: 'root',
//       password: 'Marcel17',
//       database: 'mim_database',
//       charset: 'utf8',
//     },
//   }
// };

const connections = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      ppassword: 'Marcel17',
      database: 'mim_database',
      charset: 'utf8'
    },
  },
  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  },
};

module.exports = 
  process.env.NODE_ENV === 'production'
    ? connections.production
    : connections.development;