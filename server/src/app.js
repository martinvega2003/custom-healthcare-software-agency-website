import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import endpoints from './endpoints.js'

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(endpoints);

export default app;