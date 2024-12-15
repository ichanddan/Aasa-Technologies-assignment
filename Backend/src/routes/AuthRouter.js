import express from "express";

const router = express.Router();
import AuthControllers from '../controllers/AuthControllers.js'


router.post("/signup", AuthControllers.Signup);
router.post("/login", AuthControllers.Login);

export default router;
