const path = require('path')

const customPath = "/relatorios/marcos/relatorio1.pdf"

//Caminho até o arquivo
console.log(path.dirname(customPath))
//Nome do arquivo
console.log(path.basename(customPath))
//Extensão do arquivo
console.log(path.extname(customPath))