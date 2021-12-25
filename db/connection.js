import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  port: config.port,
  ssl: { rejectUnauthorized: false },
});

export default pool;
