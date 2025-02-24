const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'nome',
    message: 'Informe seu nome: '
},
{
    name: 'idade',
    message: 'Informe sua idade: '
}]).then((respostas) =>{



    if(!Number.isInteger(parseInt(respostas.idade))){
        throw new Error('Digite um idade valida')
    }

    if(respostas.nome.lenght < 3){
        throw new Error('O nome deve conter no minimo 3 caracteres')
    }

    console.log(chalk.bgYellow.black(`${respostas.nome} -- ${respostas.idade}`))

}).catch((err) => {
    console.log(`Erro: ${err}`)
})

