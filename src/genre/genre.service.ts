import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable({})
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async findByID(id: string): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Genre> {
    return this.findByID(id);
  }

  create(dto: CreateGenreDto): Promise<Genre> {
    const data: Genre = { ...dto };
    return this.prisma.genre.create({ data });
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    await this.findByID(id);

    const data: Partial<Genre> = { ...dto };
    return this.prisma.genre.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.findByID(id);
    await this.prisma.genre.delete({ where: { id } });
  }
}
