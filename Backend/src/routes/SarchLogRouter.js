import express from "express";

const router = express.Router();
import SarchLogControllers from "../controllers/SarchLogConrtrollers.js";

router.post("/search", SarchLogControllers.Search);

export default router;
