const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//usando Partials
const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req,res) => {
    const itens = ["item a","item b", "item c", "item d"]
    
    res.render('dashboard',{itens})
})

app.get('/blog', (req, res) => {
    const posts =[
        {
            title: 'Aprendendo Node js',
            category: 'JavaScript',
            body: 'Esse artigo bla bla bla ...',
            comments: 4 
        },
        {
            title: 'Aprendendo Php',
            category: 'Php',
            body: 'Esse artigo bla bla bla ...',
            comments: 4 
        },
        {
            title: 'Aprendendo C#',
            category: 'C#',
            body: 'Esse artigo bla bla bla ...',
            comments: 4 
        }
    ]

    res.render('blog', {posts})
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