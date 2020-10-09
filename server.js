const http = require('http')

// create server
const server = http.createServer(function (req, res) {
    res.end('Hi, selamat datang di NodeJS')
})

server.listen(8000)
console.log('server running at port 8000')