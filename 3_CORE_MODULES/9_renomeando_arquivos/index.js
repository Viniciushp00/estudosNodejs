const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "novo.txt"

fs.rename(arqAntigo,arqNovo, (err) => {
    if (err){
        console.log(`Ocorreu o seguinte erro ${err}`)
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})