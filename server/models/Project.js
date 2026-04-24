import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String },
    url: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
