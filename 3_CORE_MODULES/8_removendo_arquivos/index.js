const fs = require('fs')

fs.unlink('arquivo.txt', (err) => {
    if(err){
        console.log(`Ao tentar excluir o arquivo, ocorreu o seguinte erro: ${err}`)
        return
    }

    console.log('Arquivo removido')
})