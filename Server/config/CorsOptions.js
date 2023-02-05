const allowedOrigins = require('./allowedOrigins')

const CorsOptions = {
    origin: allowedOrigins,
    Credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204
}

module.exports = CorsOptions
// origin: (origin, callback) => {
//     if(allowedOrigins.indexOf(origin) !== -1) {
//         return callback(new Error('Not allowed by CORS'), false)
//     }
//     return callback(null, true)
// },
//MaxAge for caches, Authorization for the allowedHeaders, preflightContinue
//When using CORS config, the optionsSuccessStatus can be set to true or we just let the browser do that and set the options to 204, credentials:true is optional