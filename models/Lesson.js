import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: [mongoose.Schema.Types.Mixed], default: [] },
  isEnriched: { type: Boolean, default: false },
  module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" }
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);
