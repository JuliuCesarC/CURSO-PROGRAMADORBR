const express = require('express')
const  app = express()

const videos = [
    'dQw4w9WgXcQ',
    'EXtjWIiSKb0',
    'ZtMzB5CoekE',
    'CKgwcuAvM6E',
    'GpWD5r1VcNg'
]

app.get('/api/videos', (req, res)=>{
    res.send(videos)
})

app.listen(3000, ()=>{
    console.log('Running');
})