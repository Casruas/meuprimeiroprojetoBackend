const express = require("express") 
const router = express.Router("express")

const app = express() 
const porta = 3333

function mostraMulher(request, response) {
        response.json({
            mome: 'Jeane Ruas',
            imagem: 'https://images.app.goo.gl/dT7gT4ThcWDPAA6X8',
            minibio: 'Analista e estudante'
        })
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta", porta) 
} 

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)