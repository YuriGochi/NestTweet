import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService, PrismaService]
})
export class TweetsModule {}
