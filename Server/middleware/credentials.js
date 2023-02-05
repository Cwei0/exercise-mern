const allowedOrigins = require('../config/allowedOrigins')

//Thank you God!!!
const credentials = (req, res, next) => {
    const origin = req.headers.origin
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins)
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true)
    }
    next()
}

// credentials is used when i dont want to use CORS and to also check the cookies when used with CORS

module.exports = credentials