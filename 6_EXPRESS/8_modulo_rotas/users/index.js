const express = require("express")
const router = express.Router()
const path = require("path")

const basePath = path.join(__dirname,'../templates')

router.get('/add',(req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e a idade é ${age}`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id

    console.log(`Id recebido da url: ${id}`)

    res.sendFile(`${basePath}/user.html`)
})

module.exports = router