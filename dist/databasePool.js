"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'schooladmin',
    host: 'localhost',
    database: 'coolschool',
    password: '12345',
    port: 5432,
});
// Log connection status (optional)
// pool.on('connect', () => {
//   console.log('Connected to the database');
// });
// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client:', err);
//   process.exit(-1);
// });
exports.default = pool;
