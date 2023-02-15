import { Controller, Get, Post } from "@nestjs/common";




@Controller('table')
export class GenreController{
  @Get()
  findAll(){
    return 'Buscar todos gêneros';
  }

  @Post()
  create(){
    return "Criar um gênero";
  }
}