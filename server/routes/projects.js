import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const connected = mongoose.connection.readyState === 1;
    if (!connected) {
      return res.json([
        { _id: '1', title: 'Sample Project A', summary: 'Demo data', url: 'https://github.com', tags: ['demo'] },
        { _id: '2', title: 'Sample Project B', summary: 'Demo data', url: 'https://github.com', tags: ['demo'] },
        { _id: '3', title: 'Sample Project C', summary: 'Demo data', url: 'https://github.com', tags: ['demo'] },
      ]);
    }
    const items = await Project.find().sort({ createdAt: -1 }).limit(12);
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router;
