import mongoose from 'mongoose';
import slugify from 'slugify';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  description: String,
  thumbnail: String,
  previewlink: String,
  githublink: String,
  technologies: [String],
  category: String,
  status: String,
  startdate: String,
  enddate: String,
  role: String,
  priority: Number
});

// Middleware to generate slug before saving the document
projectSchema.pre('save', function (next) {
  if (this.isModified('name') || this.isNew) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Project =
  mongoose.models.Projects || mongoose.model('Projects', projectSchema);

export default Project;
