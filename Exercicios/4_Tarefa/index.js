const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const produtos = require('./produtos')

//usando Partials
const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.use('/produtos', produtos)

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Aplicação rodando')
})
