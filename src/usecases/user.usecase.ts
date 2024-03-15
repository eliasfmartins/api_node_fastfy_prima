import { UserRepositoryPrisma } from "../repositories/user.repository";
import { UserCreate, UserRepository } from '../interfaces/user.interface';

class UserUseCase {
    private userRepository: UserRepository
    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promise<User>{

    }
}