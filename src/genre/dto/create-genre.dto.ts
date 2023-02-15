import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsNumber, IsPositive } from "class-validator";

export class CreateGenreDto{
  @ApiProperty({
    description: 'O nome do gênero',
    example: 'Ação'
  })
  name:string;
}