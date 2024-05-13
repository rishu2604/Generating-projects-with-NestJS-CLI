import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    // messagesService: MessagesService;

    // constructor(){
    //     // DON'T DO THIS ON REAL APPS
    //     // USE DEPENDENCY INJECTION
    //     this.messagesService = new MessagesService();
    // }

    constructor(public messagesService: MessagesService){}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);
        return this.messagesService.create(body.content);
    }
    
    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
