import { Request, Response } from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../models/studentPool.model';

// Get all students
export const fetchAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Get a student by ID
export const fetchStudentById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const student = await getStudentById(id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(`Error fetching student with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};

// Create a new student
export const addStudent = async (req: Request, res: Response) => {
  try {
    const { name, age, major } = req.body;
    const newStudent = await createStudent(name, age, major);
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
};

// Update a student
export const modifyStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, age, major } = req.body;
    const updatedStudent = await updateStudent(id, name, age, major);
    if (updatedStudent) {
      res.status(200).json(updatedStudent);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(`Error updating student with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Failed to update student' });
  }
};

// Delete a student
export const removeStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deletedStudent = await deleteStudent(id);
    if (deletedStudent) {
      res.status(200).json(deletedStudent);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(`Error deleting student with ID ${req.params.id}:`, error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
};