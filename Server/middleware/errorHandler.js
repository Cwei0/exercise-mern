const { logEvent } = require('../middleware/logger')

const errorHandler = (err, req, res, next) => {
    logEvent(`${err.name}:${err.message}`, 'errorLog.log')
    res.status(500).send(err.message)
    next()
}

module.exports = errorHandler