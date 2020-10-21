const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '2H!ghdude',
  port: 5432
});

module.exports = pool;
