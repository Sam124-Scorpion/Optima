require('dotenv').config()

const app = require('./src/app')
const port = 3000

app.listen(port , (req , res)=>{
    console.log(`server listen at http://localhost:${port}/`)
})