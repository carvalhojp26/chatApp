const express = require('express')
const app = express()

const mongoose = require('mongoose')
const mongoDBURL = 'mongodb://localhost:27017/chat'

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection Successfull") })
    .catch((err) => { console.log("Received an Error") })

const Schema = mongoose.Schema

const mySchema = new Schema ({
    from: String,
    to: String,
    message: String
})

const Message = mongoose.model('Message', mySchema)

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

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})