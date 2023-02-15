import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genre/genre.module';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [GenreModule, PrismaModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
