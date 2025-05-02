import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

// Start server
const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});