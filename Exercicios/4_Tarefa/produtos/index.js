const express = require('express')
const router = express.Router()

const produtos = [
    {
        id: 1,
        nome: 'Placa Mãe B550m Aorus Elite',
        categoria: 'Hardware',
        descricao: 'Texto bla bla bla',
        valor: 1300
    },
    {
        id: 2,
        nome: 'RX 7600 8 GB',
        categoria: 'Hardware',
        descricao: 'A Radeon RX 7600 GAMING OC 8G é a escolha perfeita para gamers que buscam um desempenho excepcional e visuais deslumbrantes. Com um design elegante e robusto, esta placa de vídeo oferece um equilíbrio ideal entre preço e desempenho, proporcionando uma experiência de jogo suave e imersiva.',
        valor: 1300
    },
    {
        id: 3,
        nome: 'Placa Mãe B550m Aorus Elite',
        categoria: 'Hardware',
        valor: 1300
    },
    {
        id: 4,
        nome: 'Placa Mãe B550m Aorus Elite',
        categoria: 'Hardware',
        valor: 1300
    },
    {
        id: 5,
        nome: 'Placa Mãe B550m Aorus Elite',
        categoria: 'Hardware',
        valor: 1300
    }
]

router.get('/', (req, res) => {
    res.render('produtos', {produtos})
})

router.get('/:id', (req,res) => {
    const id = req.params.id

    res.render('produto', produtos[id-1])
})

module.exports = router