const path = require('path')

//path absoluto -- Mostra o caminho desde a unidade de disco até o arquivo
console.log(path.resolve('teste.txt'))

//formar path
const midFolder = 'relatorios'
const fileName = 'marcos.txt'

//Gera um caminho utilizando variáveis
const finalPath = path.join('/','arquivos', midFolder, fileName)

console.log(finalPath)