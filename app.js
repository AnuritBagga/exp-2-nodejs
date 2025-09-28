import express from 'express';
import bodyParser from 'body-parser';
import cardRoutes from './routes/index.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// API routes
app.use('/api', cardRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Playing Card Collection API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
