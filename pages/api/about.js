import About from '@/models/About';
import cors from '@/utils/cors';
import { connectDB } from '@/utils/db';
connectDB();

export default cors(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const about = await About.findOne();
      res.status(200).json(about);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
});
