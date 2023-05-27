import express from "express"
import { createUSer, getUsersByIdFromDb, getUsersFromDb } from "./user.controller";

const router = express.Router();

router.get('/',getUsersFromDb);
router.get("/getUserById/:id", getUsersByIdFromDb );
router.post("/createUserToDb", createUSer );

export default router;