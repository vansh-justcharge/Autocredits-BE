const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const insuranceRoutes = require('./routes/insuranceRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();

// Allowed origins from environment or fallback
const allowedOrigins = [
  process.env.CLIENT_URL ,
  process.env.PROD_CLIENT_URL,
  "*"
];

// Dynamic origin checker for CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true,
}));

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
