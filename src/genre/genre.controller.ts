import { Controller, Get } from "@nestjs/common";




@Controller('table')
export class GenreController{
  @Get()
  findAll(){
    return 'Buscar todos gêneros';
  }
}