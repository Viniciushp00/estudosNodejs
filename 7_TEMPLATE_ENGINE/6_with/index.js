const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {
    const itens = ["item a","item b", "item c", "item d"]
    
    res.render('dashboard',{itens})
})

app.get('/post', (req,res) => {
    const post ={
        title: 'Aprendendo Node js',
        category: 'JavaScript',
        body: 'Esse artigo bla bla bla ...',
        comments: 4 
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Marcos',
        surname: 'Vinicius',
        age: 22
    }

    const auth = true
    const approved = false

    res.render('home', {user: user,auth, approved})
})

app.listen(3000, () => {
    console.log('Funcionando')
})