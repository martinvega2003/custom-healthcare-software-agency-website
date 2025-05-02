import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Set in .env (e.g., postgres://user:password@localhost:5432/mydb)
  ssl: {
    rejectUnauthorized: false, // needed for Supabase
  },
  host: 'db.ragmkesjgmpafvgjdizh.supabase.co', // explicitly set host
  family: 4 // forces IPv4 instead of IPv6
});

export default pool;