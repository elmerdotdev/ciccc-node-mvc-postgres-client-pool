import { createClient } from '../database';

// Fetch all students
export const getAllStudents = async () => {
  const client = createClient(); // Create a new client
  try {
    await client.connect(); // Connect to the database
    const result = await client.query('SELECT * FROM students'); // Execute query
    return result.rows; // Return rows
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error; // Rethrow the error for further handling
  } finally {
    await client.end(); // Close the connection
  }
};

// Fetch a student by ID
export const getStudentById = async (id: number) => {
  const client = createClient();
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM students WHERE id = $1', [id]);
    return result.rows[0]; // Return the single student
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw error;
  } finally {
    await client.end();
  }
};

// Add a new student
export const createStudent = async (name: string, age: number, major: string) => {
  const client = createClient();
  try {
    await client.connect();
    const result = await client.query(
      'INSERT INTO students (name, age, major) VALUES ($1, $2, $3) RETURNING *',
      [name, age, major]
    );
    return result.rows[0]; // Return the newly created student
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  } finally {
    await client.end();
  }
};

// Update a student
export const updateStudent = async (
  id: number,
  name: string,
  age: number,
  major: string
) => {
  const client = createClient();
  try {
    await client.connect();
    const result = await client.query(
      'UPDATE students SET name = $1, age = $2, major = $3 WHERE id = $4 RETURNING *',
      [name, age, major, id]
    );
    return result.rows[0]; // Return the updated student
  } catch (error) {
    console.error(`Error updating student with ID ${id}:`, error);
    throw error;
  } finally {
    await client.end();
  }
};

// Delete a student
export const deleteStudent = async (id: number) => {
  const client = createClient();
  try {
    await client.connect();
    const result = await client.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
    return result.rows[0]; // Return the deleted student
  } catch (error) {
    console.error(`Error deleting student with ID ${id}:`, error);
    throw error;
  } finally {
    await client.end();
  }
};