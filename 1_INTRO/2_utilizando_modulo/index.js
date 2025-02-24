// Podemos usar o Import
// requise é uma forma antiga mais funciona

const fs = require('fs'); //File system

fs.readFile('arquivo.txt','utf8',(err,data) => {

    if(err){
        console.log(err);
        return;
    }

    console.log(data);
})