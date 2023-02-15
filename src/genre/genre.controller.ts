import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Genre } from './entities/genre.entity';
import { UpdateGenreDto } from './dto/update-genre.dto';

@ApiTags('genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um gênero',
  })
 async findOne(@Param('id') id: string): Promise<Genre> {
    const record = await this.genreService.findOne(id);

    if(!record){
      throw new NotFoundException(`Registro com o ID ${id} não encontrado.`)
    }
    return record;
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um gênero',
  })
  create(@Body() dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um genêro pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenreDto): Promise<Genre> {
    return this.genreService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um gênero pelo ID',
  })
  delete(@Param('id') id: string) {
    this.genreService.delete(id);
  }
}
