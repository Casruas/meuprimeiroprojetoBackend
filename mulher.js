const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 

function mostraMulher(request, response) {
response.json({
    nome: 'Jeane Ruas', 
imagem: 'https://images.app.goo.gl/tZTysoFC6fXCBsHu7', 
minibio: 'Analista de logistica e estudante de Desenvolvimento de sistemas'
})
}

function mostraPorta() {
  console.log("servidor criado e rodando na porta ", porta)  
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta )