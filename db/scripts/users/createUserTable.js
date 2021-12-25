import query from "../connection.js";

/*-- SQL STRING TO BE SENT --*/
const sqlString = `CREATE TABLE IF NOT EXISTS user_table (id SERIAL PRIMARY KEY, username VARCHAR(20), password VARCHAR(20))`;

/*-- FUNCTION THAT SENDS THE SQL STRING TO THE DATABASE --*/
async function createTable() {
  const res = await query(sqlString);
  console.log("New Table Made!", res);
}
console.log("createTable function");
/*-- CALLED FUNCTION --*/
createTable();
