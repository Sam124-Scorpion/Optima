const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('Everything is working Fine!!');
})

app.get('/about',(req,res)=>{
    res.send('the about section is here!')
})

app.use('/ai', aiRoutes)

module.exports = app