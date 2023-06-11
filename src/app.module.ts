import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { OpenAIService } from './openai/openai.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    ChatModule,
  ],
  controllers: [AppController, ChatController],
  providers: [AppService, OpenAIService],
})
export class AppModule {}
