import express from "express";

import { loginUser } from "../controllers/authController.js";
import { RegisterUser } from "../controllers/authController.js";
import { validateUser } from "../validations/userValidation.js";
const router = express.Router();

router.get("/login", loginUser);
    
router.post("/register",validateUser, RegisterUser); 
export default router;