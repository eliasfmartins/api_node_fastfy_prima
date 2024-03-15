import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify()
// basicamente o logger da varias informacoes no terminal
app.listen({
    port:3000,},
     ()=> console.log('Server is running on port 3000')
     )