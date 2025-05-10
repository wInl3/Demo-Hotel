const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'hotel_db',
  password: 'mysecretpassword',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('✅ Connected successfully to hotel_db');
    return client.end();
  })
  .catch(err => {
    console.error('❌ Connection error:', err.stack);
  });
