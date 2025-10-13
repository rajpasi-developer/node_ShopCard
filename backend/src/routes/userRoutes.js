import express from "express";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";
import { getCurrentUser, getAdmin } from "../controller/userController.js";

let userRoutes = express.Router();

userRoutes.get("/getcurrentuser", isAuth, getCurrentUser);

userRoutes.get("/getadmin", adminAuth, getAdmin);

export default userRoutes;
