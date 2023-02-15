import { Body, Controller, Get, Post } from "@nestjs/common";
import { GenreService } from "./genre.service";
import {CreateGenreDto} from "./dto/create-genre.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators";


@ApiTags('genre')

@Controller('genre')
export class GenreController{
  constructor(private readonly genreService: GenreService) {}


  @Get()
  findAll(){
    return this.genreService.findAll();
  }

  @Post()
  create(@Body() dto: CreateGenreDto){
    return this.genreService.create(dto);
  }
}