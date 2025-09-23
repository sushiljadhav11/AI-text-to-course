import express from "express";
import { 
  generateCourseController, 
  generateLessonController, 
  getUserCourses, 
  getCourseById, 
  getLessonById 
} from "../controllers/courseController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();


router.post("/generate-course", authMiddleware, generateCourseController);
router.post("/generate-lesson", authMiddleware, generateLessonController);


router.get("/user-courses", authMiddleware, getUserCourses);
router.get("/course/:courseId", authMiddleware, getCourseById);
router.get("/lesson/:lessonId", authMiddleware, getLessonById);

export default router;
