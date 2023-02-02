require('dotenv').config()
const express = require('express')

const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;

const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConn')

//Mongoose middleware
connectDB()

//Logging Events
app.use(logger)


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Router
app.use('/workout', require('./routers/workout'))

app.all('/*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ error: "404 not found" })
    } else {
        res.type('txt').send("404 not found")
    }
})

//Error Handler
app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
})