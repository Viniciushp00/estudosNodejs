const fs = require('fs')

fs.stat("pasta", (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    //Checa se é um arquivo - bool
    console.log(stats.isFile())
    //Checa se é uma pasta - bool
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    //Checa o momento que foi criado - DateTime
    console.log(stats.ctime)
    //Checa o tamanho do arquivo - Int
    console.log(stats.size)
})