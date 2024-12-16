import express from "express";

const router = express.Router();
import SarchLogControllers from "../controllers/SarchLogConrtrollers.js";

router.post("/search", SarchLogControllers.Search);
router.get("/all-data", SarchLogControllers.AllData);

export default router;
