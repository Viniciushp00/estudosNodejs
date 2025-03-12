const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('A pasta não existe!')
    fs.mkdirSync('minhapasta')
} else {
    console.log('A pasta existe!')
}