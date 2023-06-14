const { Pool } = require('pg');
const dotenv = require('dotenv');
 
dotenv.config();
 
const pool = new Pool({
    connectionString: 'postgres://karoli:bsxh4atWpksRDt9FnpYaKyrAhs7pD6It@dpg-ci4atl15rnuiierign50-a.frankfurt-postgres.render.com/matkad_za32',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;