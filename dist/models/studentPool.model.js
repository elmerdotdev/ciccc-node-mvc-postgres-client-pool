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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getAllStudents = void 0;
const databasePool_1 = __importDefault(require("../databasePool"));
// Fetch all students
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield databasePool_1.default.query('SELECT * FROM students');
    return result.rows; // Return rows
});
exports.getAllStudents = getAllStudents;
// Fetch a student by ID
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield databasePool_1.default.query('SELECT * FROM students WHERE id = $1', [id]);
    return result.rows[0]; // Return the single student
});
exports.getStudentById = getStudentById;
// Add a new student
const createStudent = (name, age, major) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield databasePool_1.default.query('INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *', [name, age, major]);
    return result.rows[0]; // Return the newly created student
});
exports.createStudent = createStudent;
// Update a student
const updateStudent = (id, name, age, major) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield databasePool_1.default.query('UPDATE students SET name = $1, age = $2, major = $3 WHERE id = $4 RETURNING *', [name, age, major, id]);
    return result.rows[0]; // Return the updated student
});
exports.updateStudent = updateStudent;
// Delete a student
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield databasePool_1.default.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
    return result.rows[0]; // Return the deleted student
});
exports.deleteStudent = deleteStudent;
