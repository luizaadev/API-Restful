// Configuração Inicial


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

const DB_USER = 'luizaadev'
const DB_PASSWORD = encodeURIComponent('W5elgP77OClxq1SE')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dbqqt5c.mongodb.net/bancodaapi?retryWrites=true&w=majority`
   )
   .then(() => {
    console.log('Conectamos ao MondoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
