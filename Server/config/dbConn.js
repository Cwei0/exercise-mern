const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB_TOKEN_SECRET, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            dbName: 'exerciseMERN'
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB