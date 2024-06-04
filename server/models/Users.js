import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {collection: 'info'});

const User = mongoose.model('User', userSchema);

export default User;