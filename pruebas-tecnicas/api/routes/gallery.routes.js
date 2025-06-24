import { Router } from "express";
import { getPhotos } from "../controllers/gallery.controller.js";

const router = Router();

router.get("/photos", getPhotos);

export default router;
