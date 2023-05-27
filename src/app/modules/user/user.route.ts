import express from "express"
import { createUSer } from "./user.controller";
const router = express.Router();

router.get("/", createUSer );
export default router;