const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const insuranceRoutes = require('./routes/insuranceRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const leadRoutes = require('./routes/leadRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/insurance', insuranceRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.send('Server is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("Working");