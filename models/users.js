import query from "../db/connection.js";

export async function getAllUsers() {
  const result = query(`SELECT * FROM score_table LIMIT 5;`);
  return result.rows;
}
