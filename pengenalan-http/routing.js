const http = require('http')

// create server
const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    switch (req.url) {
        case '/about':
            res.write('Ini adalah halaman about')
            break
        case '/produk':
            res.write('Ini adalah halaman produk')
            break
        case '/profile':
            res.write('Ini adalah halaman profile')
            break
        default:
            res.write('404 NOT FOUND')
    }
    res.end()
})

server.listen(8000)
console.log('server running at port 8000')