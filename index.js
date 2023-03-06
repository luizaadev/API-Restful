// Configuração Inicial

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// Rota inicial / Endpoint

app.get('/', (req, res) => {

    res.json({ message: 'Oi Express!'})

})

// Entregar uma porta

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dbqqt5c.mongodb.net/bancodaapi?retryWrites=true&w=majority`
   )
   .then(() => {
    console.log('Conectamos ao MondoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
