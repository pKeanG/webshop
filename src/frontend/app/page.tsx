import Link from 'next/link';

// Landing page — ported from mockup-v0.1.html section #01.
// STUB: game catalog is hard-coded; production fetches from /api/v1/games.
const PILOT_GAMES = [
  {
    id: 'maplestory',
    name: 'MapleStory',
    tagline: 'MMORPG · ผู้เล่น 50K+',
    itemCount: 1240,
    brandColor: '#F2A61A',
    status: 'live' as const,
  },
  {
    id: 'yulgang',
    name: 'Yulgang',
    tagline: 'Martial Arts · ผู้เล่น 30K+',
    itemCount: 860,
    brandColor: '#E83E8C',
    status: 'live' as const,
  },
  {
    id: 'cabal',
    name: 'Cabal Online',
    tagline: 'Coming Soon',
    itemCount: 0,
    brandColor: '#9CA3AF',
    status: 'coming-soon' as const,
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-kub-darker px-6 py-20 md:px-24 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            เลือกเกมที่คุณรัก · ซื้อ-ขายไอเทมจริงๆ ของคุณ
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            PlayID ใบเดียว เล่นได้ทุกเกม · จ่ายด้วย USDT หรือเงินบาท · ปลอดภัยด้วย KUB Chain
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/auth/login"
              className="inline-flex items-center rounded-full bg-kub-green px-6 py-3 font-semibold text-kub-dark hover:opacity-90"
            >
              เริ่มเล่นเลย →
            </Link>
            <a
              href="#games"
              className="inline-flex items-center rounded-full border border-gray-700 bg-kub-darker px-6 py-3 font-semibold text-white"
            >
              ดูเกมทั้งหมด
            </a>
          </div>
        </div>
      </section>

      {/* Game grid */}
      <section id="games" className="px-6 py-12 md:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">เกมบน Platform</h2>
          <p className="text-sm text-muted">{PILOT_GAMES.filter((g) => g.status === 'live').length} เกม</p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILOT_GAMES.map((game) => (
              <Link
                key={game.id}
                href={game.status === 'live' ? `/games/${game.id}/shop` : '#'}
                className={`overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md ${
                  game.status === 'coming-soon' ? 'pointer-events-none opacity-60' : ''
                }`}
              >
                <div
                  className="flex h-40 items-center justify-center font-bold text-white/70"
                  style={{ backgroundColor: game.brandColor }}
                >
                  [ {game.name} cover ]
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{game.name}</h3>
                  <p className="mt-1 text-xs text-muted">{game.tagline}</p>
                  <p className="mt-2 text-sm font-semibold text-kub-green">
                    {game.status === 'live' ? `${game.itemCount.toLocaleString()} items` : '—'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
