const inquirer = require("inquirer")
const chalk = require("chalk")

const fs = require("fs")
const { Console } = require("console")

console.log("Iniciando o Accounts")

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ])
        .then((answer) => {
            const action = answer['action']

            if (action === 'Criar conta') {
                createAccount()
            }
            else if (action === 'Consultar saldo') {
                consultBalance()
            }
            else if (action === 'Depositar') {
                deposit()
            }
            else if (action === 'Sacar') {
                widthdraw()
            }
            else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }


        })
        .catch((err) => console.log(err))
}


function createAccount() {
    console.log(chalk.bgGreen.black('Parábens por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para a sua conta: '
    }]).then(answer => {
        const accountName = answer['accountName']

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err) => {
            console.log(err)
        })

        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()

    }).catch(err => console.log(err))
}

function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then(answer => {

        const accountName = answer["accountName"]

        if (!checkAccountExist(accountName)) {
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'valueDeposit',
                message: 'Quanto você deseja depositar?'
            }
        ]).then(answer => {

            const value = answer["valueDeposit"]
            addAmount(accountName, value)

        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function widthdraw(){
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ]).then(answer => {

        const accountName = answer["accountName"]

        if(!checkAccountExist(accountName)){
            widthdraw()
            return
        }

        inquirer.prompt([
            {
                name: "value",
                message: "Quanto você deseja sacar?"
            }
        ]).then(answer => {
            const value = answer["value"]

            subAmount(accountName,value)
        })
        .catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function subAmount(accountName,value){
    const accountData = getAccount(accountName)

    if(!value){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return widthdraw()
    }

    if(accountData.balance < value){
        console.log(chalk.bgRed.black('Ocorreu um erro: Valor de saque maior do que o disponível na conta!'))
        return widthdraw()
        
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(value)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => console.log(err)
    )

    console.log(chalk.green(`Saque realizado com sucesso!\nValor em conta R$${accountData.balance}`))
    operation()
}

function addAmount(accountName, value) {
    const accountData = getAccount(accountName)

    if (!value) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }
    accountData.balance = parseFloat(value) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => {
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi depositado R$${value} na conta ${accountName}`))

    operation()
}

function consultBalance() {

    inquirer.prompt([
        {
            name:"accountName",
            message: "Qual é o nome da sua conta?"
        }
    ]).then(answer => {
        const accountName = answer["accountName"]

        if(!checkAccountExist(accountName)){
            consultBalance()
            return
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgGreen.bold(`O saldo da conta ${accountName} é de R$${accountData.balance}`))
        operation()
    })
    .catch(err => console.log(err))

}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJson)
}


function checkAccountExist(accountName) {

    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false
    }
    return true
}