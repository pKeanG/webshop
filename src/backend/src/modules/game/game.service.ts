import { Injectable } from '@nestjs/common';

interface GameSummary {
  id: string;
  name: string;
  brandColor: string;
  itemCount: number;
  status: 'live' | 'coming-soon';
}

/**
 * STUB — returns hard-coded pilot catalog (MapleStory + Yulgang) until DB is wired.
 * Production version reads from `Game` Prisma model.
 */
@Injectable()
export class GameService {
  private readonly seedCatalog: GameSummary[] = [
    { id: 'maplestory', name: 'MapleStory', brandColor: '#F2A61A', itemCount: 1240, status: 'live' },
    { id: 'yulgang', name: 'Yulgang', brandColor: '#E83E8C', itemCount: 860, status: 'live' },
    { id: 'cabal', name: 'Cabal Online', brandColor: '#9CA3AF', itemCount: 0, status: 'coming-soon' },
  ];

  list(): GameSummary[] {
    return this.seedCatalog;
  }

  get(gameId: string): GameSummary | undefined {
    return this.seedCatalog.find((g) => g.id === gameId);
  }
}
