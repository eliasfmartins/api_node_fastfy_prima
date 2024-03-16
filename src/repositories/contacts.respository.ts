import { Contact, ContactCreate, ContactRepository } from "../interfaces/contacts.interface";

export class ContactsRepositoryPrisma implements ContactRepository {
    create(data: ContactCreate): Promise<Contact> {
        
    }
    
}