const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose')
const linkRouter = require('./routers/linkRoute')

mongoose.connect('mongodb://127.0.0.1:27017/newlink'), {
  useUnifiedTopology: true, 

}

let db = mongoose.connection

db.on("error", ()=> {console.log("Houve um erro")})
db.on("error", ()=> {console.log("Banco carregado")})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRouter)

app.listen(port, () => console.log(port))