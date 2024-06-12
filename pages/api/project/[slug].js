import Project from '@/models/Project';
import cors from '@/utils/cors';
import { connectDB } from '@/utils/db';
connectDB();

export default cors(async (req, res) => {
  if (req.method === 'GET') {
    try {
      let slug = req.query.slug;
      const project = await Project.findOne({ slug: slug });
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
});
