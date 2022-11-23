import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';
import { BodyCreateTweetDto } from './dto/body-createTweet.dto';

@ApiTags('tweets')
@Controller({path: 'tweets'})
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  create(@Body() dto: BodyCreateTweetDto) {
    return this.tweetsService.create(dto);
  }

  @ApiResponse({ status: 200, description: 'Listar tweets.', isArray: true, type: Tweet })
  @Get()
  findAll() {
    return this.tweetsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tweetsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
  //   return this.tweetsService.update(+id, updateTweetDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tweetsService.remove(+id);
  // }
}
