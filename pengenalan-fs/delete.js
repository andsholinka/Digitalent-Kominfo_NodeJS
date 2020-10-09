const fs = require('fs')

fs.unlink('myText2.txt', function(err) {
    if (err) {
        return console.log(err)
    }

    console.log('Success')
})