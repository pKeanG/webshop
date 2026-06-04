import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * Secondary P2P marketplace. Backend role:
 *   - Cache + index listings/offers from Marketplace contract.
 *   - Surface seller reputation + dispute flags.
 *   - Coordinate KYC tier check before "buy" actions (PRD v0.2 §9).
 *
 * STUB ONLY — pending Marketplace contract deploy + indexer wiring.
 */
@Injectable()
export class MarketplaceService {
  async listListings(_gameId: string) {
    throw new NotImplementedException(
      'MarketplaceService.listListings not implemented (scaffold).',
    );
  }

  async getListing(_gameId: string, _listingId: string) {
    throw new NotImplementedException(
      'MarketplaceService.getListing not implemented (scaffold).',
    );
  }
}
