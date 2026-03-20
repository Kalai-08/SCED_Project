const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the Routes
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(cors()); // Allows your React frontend to talk to this backend
app.use(express.json()); // Allows the server to understand JSON data

// Connect to MongoDB
// It will look for the URI in your .env file, or use the local one as a backup
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smart_campus';

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Use the Routes
// This means all todo routes will start with /api/todos
app.use('/api/todos', todoRoutes);

// Start the Server
const PORT = process.env.PORT || 5000; // It will now pick up 5000 from .env

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});