const express = require('express')
const mongoose = require('mongoose')
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')
const app = express()

mongoose.connect('mongodb+srv://Gama:<gama>@cluster0.4u0xd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.use(express.json())
app.use('/docs', swaggerUI.server, swaggerUI.setup(swaggerDocs))
app.use(require('./routes'))
app.listen(5000,()=>{
    console.log("Aplicação rodando na porta 5000")
})

return routes;