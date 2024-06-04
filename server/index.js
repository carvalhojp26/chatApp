import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import authRoutes from './routes/auth.js';


const app = express();

// Configuração CORS
app.use(cors({
    origin: 'http://localhost:3000',  // URL do seu frontend Next.js
    methods: ['GET', 'POST']
}));

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/auth', authRoutes);

const server = http.createServer(app);
const io = new SocketIo(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
});

// O restante do seu servidor...
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
