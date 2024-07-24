import express from "express";
import {
  addSchool,
  deleteAllSchools,
  getSchoolById,
  getSchools,
} from "../controllers/school.js";
import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "schoolImages/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const router = express.Router();

router.post("/", upload.single("image"), addSchool);

router.get("/", getSchools);

router.get("/:id", getSchoolById);

router.delete("/", deleteAllSchools);

export default router;
