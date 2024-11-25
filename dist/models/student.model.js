"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getAllStudents = void 0;
const database_1 = require("../database");
// Fetch all students
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, database_1.createClient)(); // Create a new client
    try {
        yield client.connect(); // Connect to the database
        const result = yield client.query('SELECT * FROM students'); // Execute query
        return result.rows; // Return rows
    }
    catch (error) {
        console.error('Error fetching students:', error);
        throw error; // Rethrow the error for further handling
    }
    finally {
        yield client.end(); // Close the connection
    }
});
exports.getAllStudents = getAllStudents;
// Fetch a student by ID
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, database_1.createClient)();
    try {
        yield client.connect();
        const result = yield client.query('SELECT * FROM students WHERE id = $1', [id]);
        return result.rows[0]; // Return the single student
    }
    catch (error) {
        console.error(`Error fetching student with ID ${id}:`, error);
        throw error;
    }
    finally {
        yield client.end();
    }
});
exports.getStudentById = getStudentById;
// Add a new student
const createStudent = (name, age, major) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, database_1.createClient)();
    try {
        yield client.connect();
        const result = yield client.query('INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *', [name, age, major]);
        return result.rows[0]; // Return the newly created student
    }
    catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
    finally {
        yield client.end();
    }
});
exports.createStudent = createStudent;
// Update a student
const updateStudent = (id, name, age, major) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, database_1.createClient)();
    try {
        yield client.connect();
        const result = yield client.query('UPDATE students SET name = $1, age = $2, major = $3 WHERE id = $4 RETURNING *', [name, age, major, id]);
        return result.rows[0]; // Return the updated student
    }
    catch (error) {
        console.error(`Error updating student with ID ${id}:`, error);
        throw error;
    }
    finally {
        yield client.end();
    }
});
exports.updateStudent = updateStudent;
// Delete a student
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, database_1.createClient)();
    try {
        yield client.connect();
        const result = yield client.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
        return result.rows[0]; // Return the deleted student
    }
    catch (error) {
        console.error(`Error deleting student with ID ${id}:`, error);
        throw error;
    }
    finally {
        yield client.end();
    }
});
exports.deleteStudent = deleteStudent;
