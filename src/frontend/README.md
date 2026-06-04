# Frontend — Webshop GameFi (Next.js 14 scaffold)

Next.js 14 App Router scaffold for Webshop GameFi (KUB Chain × Playpark).

> **Status: scaffold only.** Pages render the visual mockup with seeded data. No real backend
> calls, no real wallet connect, no real payment flow. The structure is here so a feature team
> can extend it.

## Stack

| Layer | Tool | Pinned version |
|---|---|---|
| Framework | Next.js | 14.2.5 |
| Lang | TypeScript (strict) | 5.5.4 |
| Styling | Tailwind CSS + shadcn-style components | 3.4.10 |
| Forms | React Hook Form + Zod | 7.52 / 3.23 |
| State | Zustand + TanStack Query v5 | 4.5 / 5.51 |
| Web3 | wagmi + viem (NO ethers) | 2.12 / 2.21 |
| Wallet UX | Privy (non-custodial AA) | 1.92 |
| i18n | next-intl | 3.17 |

## Project structure

```
app/
├── layout.tsx              Root layout (Inter + Noto Sans Thai, KUB header)
├── globals.css             Tailwind base + rarity chip helpers
├── page.tsx                Landing (mockup §01 — game grid)
├── auth/login/page.tsx     Login (mockup §02)
└── games/[gameId]/shop/
    ├── page.tsx            Webshop (mockup §05 — item grid)
    └── item/[itemId]/page.tsx   Item detail + payment picker (mockup §06)

components/
├── Header.tsx              KUB chrome
├── ItemCard.tsx            Rarity-tinted card with USDT + THB price
└── PaymentMethodPicker.tsx  4-method picker, USDT marked RECOMMENDED

lib/
├── web3/
│   ├── config.ts           wagmi config — KUB testnet (chainId 25925) ONLY
│   └── wallet.ts           WalletProvider interface (Privy placeholder)
├── api/client.ts           Axios client → backend
└── utils.ts                cn() + shortAddress()
```

## Design tokens

From `mockup-v0.1.html :root` + `mockup-v0.1-figma.md`:

- `kub.green` `#00E599` — primary brand + USDT highlight
- `kub.dark` `#0A0F14` — header / dark surfaces
- `game.maplestory` `#F2A61A`, `game.yulgang` `#E83E8C` — per-game accents
- `rarity.{common|rare|epic|legendary}` — Steam/Diablo convention

## Quick start

```bash
# from repo root
cd src/frontend
cp .env.example .env.local
pnpm install
pnpm dev
# → http://localhost:3000
```

## State / data fetching pattern

- **No `localStorage` anywhere** (project rule §6). Use Zustand for in-memory client state,
  React Query for server state, cookies (httpOnly) for auth tokens.
- Server components fetch directly; client components use TanStack Query hooks (TBD).

## What is NOT done

- ❌ Real Privy SDK connect (only the interface exists)
- ❌ React Query / Zustand stores (placeholders — wire when first real flow lands)
- ❌ next-intl messages directory (i18n config TBD when copy is finalized)
- ❌ shadcn/ui component install — only primitives are written by hand for the scaffold
- ❌ Tests (vitest config exists, no specs yet)
