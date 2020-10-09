const fs = require('fs')

fs.rename('mytext3.txt', 'myText3.txt', function(err) {
    if(err) {
        return console.log(err)
    }

    console.log('Success')
})