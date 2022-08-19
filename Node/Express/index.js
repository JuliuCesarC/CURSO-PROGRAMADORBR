const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'client')))
const PORT = 5000
app.listen(PORT, ()=>{
    console.log('Running')
})