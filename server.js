/*  Metodos HTTP
   get -> listar
   post -> criar
   put -> editar vários
   patch -> editar Um
   delete -> deletar 
*/

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())  //fazer o express utilzar json
app.use(cors()) //inserir o link onde vai rodar para +segur.



//criando rota p/ listar ou mostrar informação
/* 1 Tipo de rota/ metodo HTTP
   2 Endereço -> ex: www.lojadoseuzé.com/produtos

*/
//req -> requisição, res -> resposta
//criar usuario sempre no metodo POST


app.post('/usuarios', async (req, res) => {
   
      await prisma.user.create({
         data: {
            email: req.body.email,
            name : req.body.name,
            age: req.body.age
         }
      })
      

      res.status(201).json(req.body)   

})



app.get('/usuarios', async(req, res) => {
    
   let users = []
   
   if (req.query) {
      users = await prisma.user.findMany({
         where: {
            name: req.query.name,
            email: req.query.email,
            age: req.query.age
         }
      })

   } else {
      users = await prisma.user.findMany()

   }

    


   res.status(200).json(users)
}) 


app.put('/usuarios/:id', async (req, res) => {
      
     await prisma.user.update({
         where: {
            id: req.params.id
         },
         data: {
            email: req.body.email,
            name : req.body.name,
            age: req.body.age
         }
      }) 
      

      res.status(201).json(req.body)   

})


app.delete('/usuarios/:id', async (req, res) => {
   await prisma.user.delete({
      where: {
         id: req.params.id
      },
   })


   res.status(200).json({message: "Usuário deletado com sucesso!"})
})

app.listen(3000) // porta onde o servidor vai rodar




//node server.js - digitar no terminal para o servidor rodar

// antes ir ao package.json e digitar   "type": "module", isso avisa sobre o metodo utilizado

/*
   objetivo =  Criar nossa API de usuários
      - Criar um usuario
      - Listar todos os usuarios
      - editar usuarios
      - deletar um usuario
   */