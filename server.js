const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const insuranceRoutes = require('./routes/insuranceRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();


app.use(cors({ origin: "*" }));

app.use(express.json());

// API Routes
app.use('/api/insurance', insuranceRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/leads', leadRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Server is working!');
});

// Render expects PORT from environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
