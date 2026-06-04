import Link from 'next/link';

/**
 * Top chrome — sticky KUB-styled header.
 * Wallet balance + avatar are visual placeholders only (no real state).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-gray-800 bg-kub-dark px-6 md:px-12">
      <div className="flex items-center gap-6 text-white">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-kub-green">▲ KUB</span>
          <span className="font-medium">Webshop GameFi</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/" className="hover:text-kub-green">
            Home
          </Link>
          <Link href="/games/maplestory/shop" className="text-gray-400 hover:text-white">
            Games
          </Link>
          <Link href="/games/maplestory/marketplace" className="text-gray-400 hover:text-white">
            Marketplace
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden rounded-full bg-kub-darker px-4 py-2 text-sm font-medium text-kub-green md:inline-flex">
          💎 — USDT
        </div>
        <Link
          href="/auth/login"
          className="rounded-full bg-kub-green px-4 py-2 text-sm font-semibold text-kub-dark"
        >
          เข้าสู่ระบบ
        </Link>
      </div>
    </header>
  );
}
