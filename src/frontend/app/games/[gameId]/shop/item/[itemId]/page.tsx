import Link from 'next/link';
import { PaymentMethodPicker } from '@/components/PaymentMethodPicker';

// Item Detail (Primary) — ported from mockup-v0.1.html section #06 (HERO frame).
// STUB: item data is hard-coded; production calls
//   GET /api/v1/games/:gameId/shop/items/:itemId

export default function ItemDetailPage({
  params,
}: {
  params: { gameId: string; itemId: string };
}) {
  // Mocked item — replace with React Query fetch in real impl.
  const item = {
    id: params.itemId,
    name: 'Royal Crown',
    category: 'Cosmetic · Headgear',
    rarity: 'legendary' as const,
    stockRemaining: 23,
    stockTotal: 100,
    priceUsdt: 12.5,
    priceThb: 456,
    description:
      'มงกุฎทองคำสำหรับนักผจญภัยระดับตำนาน ดรอปจาก Royal Event เท่านั้น สวมใส่แล้วจะมีเอฟเฟ็กต์แสงสีทองรอบตัวละคร',
    stats: { ATK: 50, DEF: 30, HP: 200, MP: 150 },
  };

  return (
    <section className="px-6 py-10 md:px-24">
      <div className="mx-auto max-w-7xl">
        <nav className="text-xs text-muted">
          <Link href={`/games/${params.gameId}`}>{params.gameId}</Link> ›{' '}
          <Link href={`/games/${params.gameId}/shop`}>Shop</Link> ›{' '}
          <span className="font-medium text-gray-800">{item.name}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[560px_1fr]">
          {/* Gallery */}
          <div className="rounded-xl border border-border bg-white p-5">
            <div className="flex h-[380px] items-center justify-center rounded-lg bg-rarity-legendary font-medium text-black/40">
              [ Item Image · {item.name} ]
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 rounded bg-rarity-legendary" />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-3 flex gap-2">
              <span className="chip-rarity-legendary inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                {item.rarity}
              </span>
              <span className="inline-flex items-center rounded bg-kub-green-light px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                เหลือ {item.stockRemaining}/{item.stockTotal}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="mt-2 text-sm text-muted">{item.category}</p>
            <p className="mt-4 max-w-2xl text-sm">{item.description}</p>

            <div className="mt-6 grid grid-cols-4 divide-x divide-border rounded-xl border border-border bg-gray-50 p-5 text-sm">
              {Object.entries(item.stats).map(([k, v]) => (
                <div key={k} className="px-3 first:pl-0">
                  <p className="text-xs font-medium text-muted">{k}</p>
                  <p className="text-2xl font-bold">+{v}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center rounded-xl border border-border bg-white p-5">
              <div>
                <p className="text-xs text-muted">ราคา</p>
                <p className="text-2xl font-bold text-kub-green">💎 {item.priceUsdt} USDT</p>
              </div>
              <p className="ml-6 text-sm text-muted">≈ ฿{item.priceThb}</p>
            </div>
          </div>
        </div>

        {/* Payment picker */}
        <div className="mt-10">
          <h2 className="text-xl font-bold">เลือกวิธีชำระเงิน</h2>
          <PaymentMethodPicker priceUsdt={item.priceUsdt} priceThb={item.priceThb} />
          <p className="mt-4 text-center text-xs text-muted">
            🔒 ปลอดภัยด้วย KUB Chain · ✓ ของแท้รับประกันจาก Playpark · ↺ Refund ภายใน 24 ชม.
          </p>
        </div>
      </div>
    </section>
  );
}
