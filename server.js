const express = require('express');
const dotenv = require('dotenv');
const insuranceRoutes = require('./routes/insuranceRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/insurance', insuranceRoutes);

app.get('/', (req, res) => {
  res.send('Server is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
