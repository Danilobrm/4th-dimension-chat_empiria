//npm install mysql express
//npm install express mysql2 sequelize bcryptjs jsonwebtoken dotenv
const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.log('Unable to connect to the database:', error);
});
