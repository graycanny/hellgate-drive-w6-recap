import pg from "pg";

const pool = new pg.Pool({
    host: 'localhost',
    user: 'database-user',
    password:,
    name:
  });

export default pool;
