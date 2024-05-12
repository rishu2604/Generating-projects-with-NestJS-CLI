import { MessagesRepository } from "./messages.repository";

export class MessagesService{
    messageRepo: MessagesRepository;

    constructor(){
        // Service is creating its own dependencies
        // MessageRepository is the dependency of this MessagesService class.
        // DON'T DO THIS ON REAL APPS.
        // We donot have any class which create its own dependencies inside of a constructor. Instead we are going to use a very special system in nest referred to as dependency injection to set up dependencies between different classes.
        // But we are doing it here by our own which is not recommended.
        this.messageRepo = new MessagesRepository();
    }

    findOne(id: string){
        return this.messageRepo.findOne(id);
    }
    findAll(){
        return this.messageRepo.findAll();
    }
    create(content: string){
        return this.messageRepo.create(content);
    }
}