import { ContactCreate, ContactRepository } from '../interfaces/contacts.interface';
import { ContactsRepositoryPrisma } from '../repositories/contacts.respository';

class ContactUseCase{
    private contactRepository: ContactRepository
    constructor(){
        this.contactRepository = new ContactsRepositoryPrisma()
    }
    async create({email, name,userId,phone}:ContactCreate){

    }
}
export {ContactUseCase}