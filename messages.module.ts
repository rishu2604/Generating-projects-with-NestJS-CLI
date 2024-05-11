import { Module } from '@nestjs/common';
import { MessagessModule } from './src/messages/messages.module';

@Module({
  imports: [MessagessModule]
})
export class MessagesModule {}
