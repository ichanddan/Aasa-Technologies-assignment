import express from "express";

const router = express.Router();
import AuthControllers from '../controllers/AuthControllers.js'


router.post("/signup", AuthControllers.Signup);

export default router;
