import Project from '@/models/Project';
import cors from '@/utils/cors';
import { connectDB } from '@/utils/db';
connectDB();

export default cors(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
});
