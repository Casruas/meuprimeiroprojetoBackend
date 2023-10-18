const express = require("express") 
const router = express.Router()

const app = express() 
const porta = 3333


const mulheres =[
    {
        nome: 'Jeane Ruas',
        imagem: 'https://images.app.goo.gl/dT7gT4ThcWDPAA6X8',
        minibio: 'Analista e estudante'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    }
]
function mostraMulheres(resquest, response) {
response.json(mulheres)

}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta", porta) 
} 
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)