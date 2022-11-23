import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TweetsModule
  ],
})
export class AppModule {}
