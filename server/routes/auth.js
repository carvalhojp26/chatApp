import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/Users.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
