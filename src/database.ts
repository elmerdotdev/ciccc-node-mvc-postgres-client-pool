import { Client } from 'pg';

const dbConfig = {
  user: 'schooladmin',
  host: 'localhost',
  database: 'coolschool',
  password: '12345',
  port: 5432,
};

// Function to create a new client
export const createClient = () => {
  return new Client(dbConfig);
};

// Optional: Helper function to connect and log
export const connectDb = async () => {
  const client = createClient();
  try {
    await client.connect();
    console.log('Connected to the database');
    return client; // Return connected client for immediate use
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};