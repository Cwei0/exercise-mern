const allowedOrigins = require('./allowedOrigins')

const CorsConfig = {
    origin: allowedOrigins,
    Credential: true,
    preflightContinue: false,
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    optionsSuccessStatus: 204
}

module.exports = CorsConfig
// origin: (origin, callback) => {
//     if(allowedOrigins.indexOf(origin) !== -1) {
//         return callback(new Error('Not allowed by CORS'), false)
//     }
//     return callback(null, true)
// },
//MaxAge for caches, Authorization for the allowedHeaders
//When using CORS config, the optionsSuccessStatus can be set to true or we just let the browser do that and set the options to 204, credentials:true is optional