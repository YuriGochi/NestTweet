import { ApiProperty } from '@nestjs/swagger';

export class Tweet {
  @ApiProperty()
  id: string;
  @ApiProperty()
  nome: string;
}
