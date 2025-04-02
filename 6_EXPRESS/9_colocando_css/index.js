const express = require("express")
const app = express()
const port = 3000

const path = require("path")

const users = require('./users')

//Func para ler o body de requisições
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//arquivos estáticos
app.use(express.static(__dirname + "/public"))

const basePath = path.join(__dirname,'templates')

app.use('/users', users)

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})