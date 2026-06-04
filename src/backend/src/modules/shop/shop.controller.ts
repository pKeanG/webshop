import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('games/:gameId/shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('items')
  listItems(@Param('gameId') gameId: string) {
    return this.shopService.listItems(gameId);
  }

  @Get('items/:itemId')
  getItem(@Param('gameId') gameId: string, @Param('itemId') itemId: string) {
    return this.shopService.getItem(gameId, itemId);
  }

  @Post('purchase/intent')
  createIntent(
    @Param('gameId') gameId: string,
    @Body() body: { itemId: string; method: string; quantity: number },
  ) {
    return this.shopService.createPurchaseIntent(gameId, body);
  }
}
