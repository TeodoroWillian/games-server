import { Injectable } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";

@Injectable({

})
export class GenreService{
 
  findAll() {
    return "Buscar todos os gêneros";
  }

  create(createGenreDto: CreateGenreDto) {
    return "Criar um gênero" + JSON.stringify(createGenreDto);
  }
}