const http = require('http')
const moment = require('moment')

const serevr = http.createServer((req, res) => {
    const currentDate = moment().format('1111')
    res.end(currentDate)
})

http.Server.listen(8000)
console.log('server listen on 8000')