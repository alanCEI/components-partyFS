import { Router } from 'express';
import { getStudents } from '../controllers/students.controller.js';

const router = Router();


// GET /api/students, leemos todos
router.get('/students', getStudents);

export default router;