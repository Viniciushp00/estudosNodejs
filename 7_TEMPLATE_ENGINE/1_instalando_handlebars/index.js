const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//Setup Handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home',{layout:false})
})

app.listen(3000, () => {
    console.log('Funcionando')
})