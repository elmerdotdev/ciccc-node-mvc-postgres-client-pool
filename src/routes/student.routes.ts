import { Router } from 'express';
import {
  fetchAllStudents,
  fetchStudentById,
  addStudent,
  modifyStudent,
  removeStudent,
} from '../controllers/student.controller';

const router = Router();

router.get('/students', fetchAllStudents); // Get all students
router.get('/students/:id', fetchStudentById); // Get a student by ID
router.post('/students', addStudent); // Add a new student
router.put('/students/:id', modifyStudent); // Update a student
router.delete('/students/:id', removeStudent); // Delete a student

export default router;