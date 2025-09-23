import Course from "../models/Course.js";
import Module from "../models/Module.js";
import Lesson from "../models/Lesson.js";


export const generateCourseController = async (req, res) => {
  const { topic } = req.body;
  if (!topic) return res.status(400).json({ error: "Topic is required" });

  try {
    if (!req.user || !req.user.sub) {
      return res.status(401).json({ error: "Unauthorized: user info missing in token" });
    }

    
    const courseData = {
      title: `Learn ${topic}`,
      description: `A comprehensive course on ${topic}`,
      tags: [topic],
      modules: [
        { title: `${topic} Basics`, lessons: ["Introduction", "Fundamentals"] },
        { title: `${topic} Advanced`, lessons: ["Deep Dive", "Projects"] },
      ],
    };

    
    const course = await Course.create({
      title: courseData.title,
      description: courseData.description,
      creator: req.user.sub,
      tags: courseData.tags || [],
    });

    const moduleIds = [];
    for (let mod of courseData.modules) {
      const module = await Module.create({ title: mod.title, course: course._id });
      moduleIds.push(module._id);

      for (let lessonTitle of mod.lessons) {
        await Lesson.create({ title: lessonTitle, content: [`Sample content for ${lessonTitle}`], module: module._id });
      }
    }

    course.modules = moduleIds;
    await course.save();

    res.status(201).json(course);
  } catch (err) {
    console.error("ERROR IN generateCourseController:", err);
    res.status(500).json({ error: "Failed to generate course", details: err.message });
  }
};


export const generateLessonController = async (req, res) => {
  const { courseTitle, moduleTitle, lessonTitle } = req.body;
  if (!courseTitle || !moduleTitle || !lessonTitle) {
    return res.status(400).json({ error: "courseTitle, moduleTitle, and lessonTitle are required" });
  }

  try {
    const lesson = await Lesson.create({
      title: lessonTitle,
      content: [`This is mock content for lesson: ${lessonTitle}`],
    });

    res.status(201).json(lesson);
  } catch (err) {
    console.error("ERROR IN generateLessonController:", err);
    res.status(500).json({ error: "Failed to generate lesson", details: err.message });
  }
};


export const getUserCourses = async (req, res) => {
  try {
    const courses = await Course.find({ creator: req.user.sub });
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};


export const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findById(courseId).populate({
      path: "modules",
      populate: { path: "lessons" },
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch course" });
  }
};


export const getLessonById = async (req, res) => {
  const { lessonId } = req.params;
  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ error: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch lesson" });
  }
};
