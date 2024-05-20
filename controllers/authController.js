// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');
// require('dotenv').config();

// const register = async (req, res) => {
//   const { username, password } = req.body;
  
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ username, password: hashedPassword });
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating user' });
//   }
// };

// const login = async (req, res) => {
//   const { username, password } = req.body;
  
//   try {
//     const user = await User.findOne({ where: { username } });
//     if (!user) {
//       return res.status(400).json({ error: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Error logging in' });
//   }
// };

// module.exports = { register, login };
