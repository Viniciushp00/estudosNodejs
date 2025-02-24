const chalk = require('chalk')

const nota = 5

if(nota>=7){
    console.log(chalk.green.bold('Parabéns! Você está aprovado!'))
} else{
    //Black n está funcionando apenas no IDE, no CMD funciona
    console.log(chalk.bgRed.black.bold('Você precisa fazer a prova de recuperação!'))
}