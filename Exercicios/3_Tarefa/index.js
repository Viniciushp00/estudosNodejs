const express = require("express")
const app = express()
const port = 5000

const path = require("path")
const basePath = path.join(__dirname,'templates')

const post = require('./post')
const { nextTick } = require("process")

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use(express.static(__dirname + "/public"))

app.use('/post',post)

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/blog', (req,res) => {
    res.sendFile(`${basePath}/blog.html`)
})

app.listen(port,() => {
    console.log(`Aplicação rodando na porta ${port}`)
})
