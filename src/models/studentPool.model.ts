import pool from '../databasePool';

// Fetch all students
export const getAllStudents = async () => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows; // Return rows
};

// Fetch a student by ID
export const getStudentById = async (id: number) => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0]; // Return the single student
};

// Add a new student
export const createStudent = async (name: string, age: number, major: string) => {
  const result = await pool.query(
    'INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *',
    [name, age, major]
  );
  return result.rows[0]; // Return the newly created student
};

// Update a student
export const updateStudent = async (
  id: number,
  name: string,
  age: number,
  major: string
) => {
  const result = await pool.query(
    'UPDATE students SET name = $1, age = $2, major = $3 WHERE id = $4 RETURNING *',
    [name, age, major, id]
  );
  return result.rows[0]; // Return the updated student
};

// Delete a student
export const deleteStudent = async (id: number) => {
  const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
  return result.rows[0]; // Return the deleted student
};