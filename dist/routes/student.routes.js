"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
const router = (0, express_1.Router)();
router.get('/students', student_controller_1.fetchAllStudents); // Get all students
router.get('/students/:id', student_controller_1.fetchStudentById); // Get a student by ID
router.post('/students', student_controller_1.addStudent); // Add a new student
router.put('/students/:id', student_controller_1.modifyStudent); // Update a student
router.delete('/students/:id', student_controller_1.removeStudent); // Delete a student
exports.default = router;
