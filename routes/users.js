import express from "express";
import { getAllUsers } from "../models/users.js";
const router = express.Router();
const app = express();

/*-- EVENT HANDLERS --*/

/*-- GET ALL TEAMS --*/

router.get("/users", (res, req) => {
  const data = getAllUsers();
  res.json({ message: `The top five teams!`, payload: data });
});

/*-- GET OWN TEAM --*/

router.get("/teams/:id", (res, req) => {
  const data = getTopTeams();
  res.json({ message: `The top five teams!`, payload: data });
});

/*-- POST NEW TEAM --*/

router.put("/teams", (res, req) => {
  const data = getTopTeams();
  res.json({ message: `The top five teams!`, payload: data });
});

/*-- POST SCORE TO TEAM DB --*/

router.put("/teams/:id", (res, req) => {
  const data = getTopTeams();
  res.json({ message: `The top five teams!`, payload: data });
});

export default router;
