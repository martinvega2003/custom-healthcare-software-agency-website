import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

// Start server
const PORT = 5100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});