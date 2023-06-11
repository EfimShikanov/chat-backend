import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAIService {
  openai: OpenAIApi;
  constructor(private readonly configService: ConfigService) {
    const config = new Configuration({
      apiKey: this.configService.get<string>('apiKey'),
    });
    this.openai = new OpenAIApi(config);
  }

  async createChatCompletion(prompt: string) {
    const result = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 250,
      temperature: 1,
    });

    return result?.data?.choices?.[0]?.message;
  }
}
