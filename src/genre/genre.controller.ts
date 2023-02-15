import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GenreService } from "./genre.service";
import {CreateGenreDto} from "./dto/create-genre.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger/dist/decorators";
import { Genre } from "./entities/genre.entity";


@ApiTags('genre')

@Controller('genre')
export class GenreController{
  constructor(private readonly genreService: GenreService) {}


  @Get()
  @ApiOperation({
    summary: "Listar todos os gêneros"
  })
  findAll(): Promise<Genre[]>{
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Visualizar um gênero"
  })
  findOne(@Param('id') id: string): Promise<Genre>{
    return this.genreService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: "Criar um gênero"
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre>{
    return this.genreService.create(dto);
  }
}