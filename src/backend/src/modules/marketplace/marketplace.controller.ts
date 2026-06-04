import { Controller, Get, Param } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';

@Controller('games/:gameId/marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get('listings')
  listListings(@Param('gameId') gameId: string) {
    return this.marketplaceService.listListings(gameId);
  }

  @Get('listings/:listingId')
  getListing(@Param('gameId') gameId: string, @Param('listingId') listingId: string) {
    return this.marketplaceService.getListing(gameId, listingId);
  }
}
