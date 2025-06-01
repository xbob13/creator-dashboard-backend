
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contentRoutes = require('./content');

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Creator Dashboard Backend is running!' });
});

app.use('/api/content', contentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));