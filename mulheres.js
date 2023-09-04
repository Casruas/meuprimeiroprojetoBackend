const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 

const mulheres = [
    {
        nome: 'Jeane Ruas',
        imagem: 'https://images.app.goo.gl/tZTysoFC6fXCBsHu7',
        minibio: 'Analista de op'
        },
        {
            nome: 'Ana clara',
            imagem: 'https://images.app.goo.gl/C89troJ8tKHVcJ9g6',
            minibio: 'Desenhista'
        }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
  console.log("servidor criado e rodando na porta ", porta)  
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta )