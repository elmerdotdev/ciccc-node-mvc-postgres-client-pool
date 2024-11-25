"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentPool_controller_1 = require("../controllers/studentPool.controller");
const router = (0, express_1.Router)();
router.get('/students', studentPool_controller_1.fetchAllStudents); // Get all students
router.get('/students/:id', studentPool_controller_1.fetchStudentById); // Get a student by ID
router.post('/students', studentPool_controller_1.addStudent); // Add a new student
router.put('/students/:id', studentPool_controller_1.modifyStudent); // Update a student
router.delete('/students/:id', studentPool_controller_1.removeStudent); // Delete a student
exports.default = router;
