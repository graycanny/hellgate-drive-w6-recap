import query from "../connection.js";
// ID USERNAME PASSWORD
/*-- SQL STRING TO BE SENT --*/
const sqlString = `INSERT INTO user_table (username, password);
VALUES ($1, $2)`;

/*-- FUNCTION THAT SENDS THE SQL STRING TO THE DATABASE --*/
async function addUser() {
  const res = await query(sqlString);
  console.log("User Added!", res);
}
console.log("addUser function");
/*-- CALLED FUNCTION --*/
addUser();
