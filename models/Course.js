import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  creator: { type: String, required: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
  tags: [{ type: String, trim: true }]
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;
