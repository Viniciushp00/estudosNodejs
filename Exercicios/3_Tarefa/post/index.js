const express = require("express")
const router = express.Router()

const path = require("path")

const basePath = path.join(__dirname,"../templates")

router.post('/add', (req,res) => {
    console.log(req.body)

    res.sendFile(`${basePath}/blog.html`)
})

module.exports = router