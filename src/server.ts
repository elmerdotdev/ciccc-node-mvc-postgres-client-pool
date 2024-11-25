import express, { Request, Response} from 'express'
import studentRoutes from './routes/student.routes'
import { connectDb } from './database' // Client
import pool from './databasePool' // Pool

const app = express()

app.use(express.json())

app.use('/api', studentRoutes)

// Gracefully close all connections
process.on('SIGINT', async () => {
  console.log('Shutting down application...');
  await pool.end(); // Close all connections in the pool
  process.exit(0);
});

// connectDb().then(() => {
//   app.listen(3000, () => {
//     console.log(`Server started in port 3000...`)
//   })
// })

// Pool
app.listen(3000, () => {
  console.log(`Server started in port 3000...`)
})
