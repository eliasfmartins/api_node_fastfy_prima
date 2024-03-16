import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";

const app: FastifyInstance = fastify()
// basicamente o logger da varias informacoes no terminal
app.register(userRoutes, {
    prefix: '/users',
})

app.listen({
    port:3000,},
     ()=> console.log('Server is running on port 3000')
     )