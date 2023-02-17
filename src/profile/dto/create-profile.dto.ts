import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do Perfil',
    example: 'Jonas'
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: 'URL da imagem do perfil',
    example: 'http://lorempixel.com.br/500/400'
  })
  ImageURL: string;
}
