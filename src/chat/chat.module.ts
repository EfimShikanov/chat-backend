import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { OpenAIService } from 'src/openai/openai.service';

@Module({
  providers: [OpenAIService],
  controllers: [ChatController],
})
export class ChatModule {}
