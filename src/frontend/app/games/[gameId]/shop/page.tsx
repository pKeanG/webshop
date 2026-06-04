import Link from 'next/link';
import { ItemCard, type ItemSummary } from '@/components/ItemCard';

// Webshop / Primary Market — ported from mockup-v0.1.html section #05.
// STUB: items are seeded; production calls GET /api/v1/games/:gameId/shop/items.

const SEED_ITEMS: ItemSummary[] = [
  { id: '123', name: 'Royal Crown', rarity: 'legendary', priceUsdt: 12.5, priceThb: 456 },
  { id: '124', name: 'Phoenix Pet', rarity: 'epic', priceUsdt: 8.0, priceThb: 292 },
  { id: '125', name: 'Dragon Sword', rarity: 'epic', priceUsdt: 7.5, priceThb: 274 },
  { id: '126', name: 'Magic Cape', rarity: 'rare', priceUsdt: 3.2, priceThb: 117 },
  { id: '127', name: 'Speed Boots', rarity: 'rare', priceUsdt: 1.5, priceThb: 55 },
  { id: '128', name: 'EXP Potion x10', rarity: 'common', priceUsdt: 0.5, priceThb: 18 },
  { id: '129', name: 'Mount: Wolf', rarity: 'epic', priceUsdt: 9.0, priceThb: 329 },
  { id: '130', name: 'Hat: Santa', rarity: 'rare', priceUsdt: 2.0, priceThb: 73 },
];

const GAME_BRAND: Record<string, { name: string; color: string }> = {
  maplestory: { name: 'MapleStory', color: '#F2A61A' },
  yulgang: { name: 'Yulgang', color: '#E83E8C' },
};

export default function ShopPage({ params }: { params: { gameId: string } }) {
  const brand = GAME_BRAND[params.gameId] ?? { name: params.gameId, color: '#00E599' };

  return (
    <>
      {/* Per-game sub-nav */}
      <div className="bg-kub-darker px-6 md:px-24">
        <div className="mx-auto flex max-w-7xl items-center gap-6 py-3 text-sm">
          <span
            className="inline-flex items-center rounded px-2 py-0.5 text-xs font-bold"
            style={{ backgroundColor: brand.color, color: '#0A0F14' }}
          >
            {brand.name.slice(0, 2).toUpperCase()}
          </span>
          <span className="font-bold text-white">{brand.name}</span>
          <nav className="ml-4 flex gap-6">
            <Link href={`/games/${params.gameId}`} className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link
              href={`/games/${params.gameId}/shop`}
              className="border-b-2 pb-2 font-semibold text-white"
              style={{ borderColor: brand.color }}
            >
              Shop
            </Link>
            <Link
              href={`/games/${params.gameId}/marketplace`}
              className="text-gray-400 hover:text-white"
            >
              Marketplace
            </Link>
          </nav>
        </div>
      </div>

      <section className="px-6 py-10 md:px-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">Webshop · {brand.name}</h1>
          <p className="mt-1 text-sm text-muted">Primary Market — ขายโดย Playpark · รับประกันของแท้</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
            {/* Filter sidebar — visual stub */}
            <aside className="self-start rounded-xl border border-border bg-white p-5">
              <h3 className="font-bold">ตัวกรอง</h3>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted">ประเภท</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Equipment</li>
                <li>Cosmetic</li>
                <li>Pet</li>
                <li>Consumable</li>
              </ul>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted">ความหายาก</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Common</li>
                <li>Rare</li>
                <li>Epic</li>
                <li>Legendary</li>
              </ul>
            </aside>

            {/* Item grid */}
            <div>
              <div className="flex items-center rounded-xl border border-border bg-white px-5 py-3 text-sm">
                <span className="text-muted">แสดง 1-{SEED_ITEMS.length} จาก {SEED_ITEMS.length} รายการ</span>
                <span className="flex-1" />
                <span className="text-muted">เรียงตาม:</span>
                <span className="ml-2 rounded-lg border border-border px-3 py-1">Popular</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {SEED_ITEMS.map((item) => (
                  <ItemCard key={item.id} item={item} gameId={params.gameId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
