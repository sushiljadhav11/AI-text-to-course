import express from "express";
import { 
  generateCourseController, 
  generateLessonController, 
  getUserCourses, 
  getCourseById, 
  getLessonById 
} from "../controllers/courseController.js";
// import { authMiddleware } from "../middlewares/auth.js"; // no longer needed

const router = express.Router();

router.post("/generate-course", generateCourseController);
router.post("/generate-lesson", generateLessonController);

router.get("/user-courses", getUserCourses);
router.get("/course/:courseId", getCourseById);
router.get("/lesson/:lessonId", getLessonById);

export default router;
