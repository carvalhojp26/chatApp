import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/Users.js';
import jwt from 'jsonwebtoken';

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

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email: email})

    if (!user) {
      return res.status(404).json({message: 'User not found'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
      return res.status(400).json({message: 'Invalid Credentials'})
    }

    const token = jwt.sign(
      {userId: user._id, email: user.email},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )

    res.json({token})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

export default router;
