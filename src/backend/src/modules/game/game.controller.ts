import { Controller, Get, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  listGames() {
    return this.gameService.list();
  }

  @Get(':gameId')
  getGame(@Param('gameId') gameId: string) {
    return this.gameService.get(gameId);
  }
}
