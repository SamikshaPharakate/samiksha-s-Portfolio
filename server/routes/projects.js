import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const connected = mongoose.connection.readyState === 1;
    if (!connected) {
      return res.json([
        {
          _id: '1',
          title: 'ThinkSphere',
          summary: 'Blogging platform built with MERN, inspired by a shared love for writing. Features rich text editing and user interactions.',
          url: 'https://github.com/SamikshaPharakate/ThinkSphere',
          tags: ['MERN', 'React', 'MongoDB', 'Node.js']
        },
        {
          _id: '2',
          title: 'AI Healers',
          summary: 'AI-powered prior authorization platform automating healthcare insurance claim approvals using OCR and intelligent AI analysis.',
          url: 'https://github.com/SamikshaPharakate/AI-Healers',
          tags: ['AI', 'Healthcare', 'OCR', 'Automation']
        },
        {
          _id: '3',
          title: 'Meeting Buddy',
          summary: 'A comprehensive meeting scheduling application with Google Calendar integration and real-time conflict prevention.',
          url: 'https://github.com/SamikshaPharakate/Meeting-Buddy',
          tags: ['TypeScript', 'Next.js', 'Google API']
        },
        {
          _id: '4',
          title: 'Expense Management',
          summary: 'Smart application designed to track daily expenses, manage budgets, and monitor spending efficiently.',
          url: 'https://github.com/SamikshaPharakate/ExpenseManager',
          tags: ['Finance', 'Tracker', 'Management']
        },
        {
          _id: '5',
          title: 'College Event Management',
          summary: 'Platform designed to streamline event planning, registrations, scheduling, and participant coordination efficiently.',
          url: 'https://github.com/SamikshaPharakate/College_Event_management',
          tags: ['Events', 'Management', 'Platform']
        },
        {
          _id: '6',
          title: 'Developer Portfolio',
          summary: 'This portfolio showcases my skills, projects, achievements, and journey as an aspiring software developer.',
          url: 'https://github.com/SamikshaPharakate/samiksha-s-Portfolio',
          tags: ['React', 'Portfolio', 'Web']
        },
      ]);
    }
    const items = await Project.find().sort({ createdAt: -1 }).limit(12);
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router;
