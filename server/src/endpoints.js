import pool from "./database.js";
import { Router } from "express";

const router = Router();

// Endpoint to store appointment booking
router.post("/appointments", async (req, res) => {
  const { name, email, phone, appointmentDate, appointmentTime } = req.body;

  // Validate required fields
  if (!name || !email || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await pool.query(`
      INSERT INTO appointments (name, email, phone, appointment_date, appointment_time)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `, [name, email, phone, appointmentDate, appointmentTime]);

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: result.rows[0],
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to store messages
router.post("/messages", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await pool.query(`
      INSERT INTO messages (name, email, phone_number, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `, [name, email, phoneNumber, message]);

    res.status(201).json({
      message: "Message stored successfully",
      storedMessage: result.rows[0],
    });
  } catch (error) {
    console.error("Error storing message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;