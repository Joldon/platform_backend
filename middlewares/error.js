const errorHandler = (err, req, res, next) => {
    console.error(err.stack.red)
    res.status(500).send('something broke')
}

module.exports = errorHandler;