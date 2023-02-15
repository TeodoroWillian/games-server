import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: "Nome do Jogo",
    example:"Call of Duty",
  })
  title: string;
  @IsString()
  @ApiProperty({
    description:"Link para uma imagem do jogo",
    example:"http://lorempixel.com.br/400/400"
  })
  coverImageUrl: string;
  @IsString()
  @ApiProperty({
    description:"Descrição do jogo",
    example:"Call of Duty é uma franquia de jogos eletrônicos de tiro em primeira pessoa publicada pela Activision"
  })
  description: string;
  @IsNumber()
  @ApiProperty({
    description:"O ano que o jogo foi lançado",
    example: 2020
  })
  year: number;
  @IsNumber({
    maxDecimalPlaces: 2
  })
  @ApiProperty({
    description:"A nota do jogo no IMDB",
    example: 6
  })
  imdbScore: number;
  @IsUrl()
  @ApiProperty({
    description:"Link para o trailer do jogo no YouTube",
    example:"https://www.youtube.com/watch?v=0E44DClsX5Q"
  })
  trailerYoutubeGamePlay: string;
  @IsUrl()
  @ApiProperty({
    description:"Link para alguma game play do jogo no YouTube",
    example:"https://www.youtube.com/watch?v=NlgZ8FdDr58"
  })
  gamePlayYoutubeUrl: string;
}
