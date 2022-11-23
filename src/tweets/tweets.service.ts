import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BodyCreateTweetDto } from './dto/body-createTweet.dto';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(private prisma: PrismaService) {}

  async create(bodyDto: BodyCreateTweetDto) {
    let tweet = null;
    const createDto: Prisma.UserCreateInput = new CreateTweetDto(bodyDto);
    
    tweet = await this.prisma.tweet.create({ data: createDto });
    return tweet;
  }

  findAll() {
    return this.prisma.tweet.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
