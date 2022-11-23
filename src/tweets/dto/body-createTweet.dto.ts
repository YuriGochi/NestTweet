import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Validate } from 'class-validator';

export class BodyCreateTweetDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}
