require('dotenv').config();

const http = require('http')

const app = require('./app')

const normalizePort = val => {
    const port = parseInt(val, 10)

    if (isNaN(port)) return val
    if (port >= 0) return port

    return false
}
const port = normalizePort(process.env.PORT || 3001)

app.set('port', port)

const httpServer = http.createServer(app)

const errorHandler = error => {
    if(error.syscall !== 'listen') throw error

    const address = httpServer.address()
    const bind = typeof address === 'string' ? 'pipe : ' + address : 'port : ' + port

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.')
            process.exit(1)
            break
        default:
            throw error
    }
}

httpServer.on('listening', ()=> {
    const address = httpServer.address()
    const bind = typeof address === 'string' ? 'pipe : ' + address : 'PORT : ' + port

    console.log('Listening on ' + bind)
})

httpServer.on('error', errorHandler)


httpServer.listen(port)