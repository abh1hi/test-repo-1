const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/influencers', require('./routes/influencers'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users')); // Add this line
app.use('/api/influencers', require('./routes/influencers'));

// Basic root route
app.get('/', (req, res) => res.send('API running.'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));