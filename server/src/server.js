import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

// Start server
const PORT = process.env.PORT || 5001;

app.listen(() => {
  console.log(`Server started on port ${PORT}`);
});