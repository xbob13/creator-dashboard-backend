
const express = require('express');
const cors = require('cors');
const contentRoutes = require('./routes/content');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/content', contentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
