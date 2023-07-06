import express from "express";
const router = express.Router();
import { creteUser, getUsers, getUserById, getAdminUsers } from "./user.controller";


router.get("/", getUsers );
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", creteUser);

export default router;