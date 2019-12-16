  const {
      Pool
  } = require('pg');

  const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'mylibrary',
      password: 'Lcgnrse78', // od postgres || T1csl786!
      port: 5432,
  });

  module.exports = {
      pool
  };