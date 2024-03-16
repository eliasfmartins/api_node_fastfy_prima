import { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/contact.usecase";

export async function contactsRoutes(fastify: FastifyInstance){
    const contactUseCase = new ContactUseCase()
    fastify.post<{Body: UserCreate}>('/',async (req, reply)=>{
        const {name, email} = req.body
        try{
            const data =  await contactUseCase.create({}
            );
            return reply.send(data)
        } catch(error){
            reply.send(error)
        }
    })
  
}