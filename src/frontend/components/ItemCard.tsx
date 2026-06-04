import Link from 'next/link';
import { cn } from '@/lib/utils';

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface ItemSummary {
  id: string;
  name: string;
  rarity: Rarity;
  priceUsdt: number;
  priceThb: number;
}

const RARITY_BG: Record<Rarity, string> = {
  common: 'bg-rarity-common',
  rare: 'bg-rarity-rare',
  epic: 'bg-rarity-epic',
  legendary: 'bg-rarity-legendary',
};

const RARITY_CHIP: Record<Rarity, string> = {
  common: 'chip-rarity-common',
  rare: 'chip-rarity-rare',
  epic: 'chip-rarity-epic',
  legendary: 'chip-rarity-legendary',
};

export function ItemCard({ item, gameId }: { item: ItemSummary; gameId: string }) {
  return (
    <Link
      href={`/games/${gameId}/shop/item/${item.id}`}
      className="block rounded-xl border border-border bg-white p-3 transition hover:shadow-md"
    >
      <div className={cn('relative h-32 rounded-lg', RARITY_BG[item.rarity])}>
        <span
          className={cn(
            'absolute left-2 top-2 inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            RARITY_CHIP[item.rarity],
          )}
        >
          {item.rarity}
        </span>
      </div>
      <h4 className="mt-3 text-sm font-semibold">{item.name}</h4>
      <p className="mt-1 text-sm font-bold text-kub-green">💎 {item.priceUsdt} USDT</p>
      <p className="text-xs text-muted">≈ ฿{item.priceThb}</p>
    </Link>
  );
}
