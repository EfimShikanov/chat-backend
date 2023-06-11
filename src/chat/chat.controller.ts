import { Body, Controller, Get, Post } from '@nestjs/common';
import { error } from 'console';
import { env } from 'process';
import { MessageDto } from 'src/dto/message';
import { OpenAIService } from 'src/openai/openai.service';
import { openai } from 'src/shared/constants/openai';

@Controller('chat')
export class ChatController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Post('get-completion')
  async getCompletion(@Body() messageDto: MessageDto) {
    const result = await this.openaiService.createChatCompletion(
      messageDto.prompt,
    );

    return result;
  }
}
