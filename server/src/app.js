import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/booking', () => console.log("Booking route"));
app.post('/api/message', () => console.log("Messages route"));

export default app;