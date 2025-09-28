import express from 'express';
import bodyParser from 'body-parser';
import cardRoutes from './routes/index.js';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use('/api', cardRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Playing Card Collection API!');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
