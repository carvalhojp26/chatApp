const express = require('express')
const mongoose = require('mongoose')
const http = require('http');
const socketIo =  require('socket.io');
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST']
    }
  });

app.use(express.static('../frontend/public/'));

const mongoDBURL = 'mongodb://localhost:27017/chat';

(async () => {
    try {
        await mongoose.connect(mongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        console.log("connection sucessful")
    } catch(error) {
        console.error("Received an error", error)
        process.exit(1)
    }
})()

const Schema = mongoose.Schema

const mySchema = new Schema ({
    from: String,
    to: String,
    message: String
})

const Message = mongoose.model('Message', mySchema)

app.use(express.json());

app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find()
        res.json(messages)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.post('/messages', async (req, res) => {
    try {
        const {from, to, message} = req.body
        const newMessage = new Message({from, to, message})
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
})

io.on('connection', socket => {
    console.log('User connected')

    socket.on('chat message', async message => {
        console.log('Received message:', message);
        const newMessage = new Message(message);
        await newMessage.save();
        console.log('Message saved:', newMessage);
        io.emit('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

server.listen(3001, () => {
    console.log("server running on port 3001")
})
