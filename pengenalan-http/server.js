const http = require('http')

// create server
const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify({success: true}))
    res.end()
})

server.listen(8000)
console.log('server running at port 8000')