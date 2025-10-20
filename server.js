/*  Metodos HTTP
   get -> listar
   post -> criar
   put -> editar vários
   patch -> editar Um
   delete -> deletar 
*/

import express from 'express'

const app = express()

//criando rota p/ listar ou mostrar informação
/* 1 Tipo de rota/ metodo HTTP
   2 Endereço -> ex: www.lojadoseuzé.com/produtos

*/
//req -> requisição, res -> resposta
app.get('/usuarios', (req, res) => {
    res.send('Ok, Deu bom')
})  

app.listen(3000) // porta onde o servidor vai rodar

//node server.js - digitar no terminal para o servidor rodar

// antes ir ao package.json e digitar   "type": "module", isso avisa sobre o metodo utilizado