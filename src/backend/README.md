# Backend — Webshop GameFi (NestJS scaffold)

NestJS 10 + Prisma + PostgreSQL + Redis scaffold for the Webshop GameFi MVP.

> **Status: scaffold only.** Every service throws `NotImplementedException` — they exist to
> establish module boundaries, DTO shape, and Prisma models. No real PlayID / payment SDK /
> blockchain integration is wired up.

## Stack

- NestJS `10.4` (TypeScript strict)
- Prisma `5.18` + PostgreSQL
- Redis (ioredis) for cache + future BullMQ queue
- JWT auth (passport-jwt) — `auth/` module
- `viem` for on-chain reads (no ethers.js per project rule)
- Validation: `class-validator` + `zod`
- Helmet + ThrottlerModule for baseline hardening

## Module map

```
src/modules/
├── auth/         PlayID auth stub (JWT)
├── wallet/       Smart-wallet (ERC-4337) creation stub
├── game/         Game catalog (seed list returns MapleStory, Yulgang, Cabal placeholder)
├── shop/         Primary market — purchase intent + item endpoints
├── marketplace/  Secondary P2P listings + offers
└── payment/
    ├── usdt/      KUB Chain KAP20 USDT (stub)
    ├── omise/     Card payments (stub)
    └── promptpay/ QR PromptPay (stub)
```

## Prisma schema

Located at `prisma/schema.prisma`. Models:

- `User` — PlayID account + KYC tier + PDPA consent timestamp.
- `Wallet` — non-custodial AA wallet address (NEVER private key).
- `Game`, `Item` — game catalog + primary supply tracking.
- `Purchase` — primary market order (with payment & mint tx hashes).
- `Listing` — secondary market listings.
- `Transaction` — append-only audit log for every financial event.

**No migrations are committed.** Run `pnpm prisma migrate dev` locally once you spin up Postgres.

## Quick start

```bash
# from repo root (after pnpm install)
cd src/backend
cp .env.example .env

# Spin up Postgres + Redis via docker-compose (from repo root)
docker compose up -d postgres redis

# Generate Prisma client
pnpm prisma:generate

# Start dev server (watches /src)
pnpm dev
# → http://localhost:4000/api/v1
```

## What you will NOT find here

- ❌ Real OAuth callback handlers (Google/Apple/LINE/FB) — TBD
- ❌ Real Omise / PromptPay / USDT integration code (placeholders only)
- ❌ Real smart-wallet deploy code (depends on counsel sign-off — see PRD v0.2 §4.1)
- ❌ Prisma migrations — schema is intentionally pre-migration

## References

- PRD v0.2 (esp. §4 + §11): `../../docs/requirements/prd-mvp-prototype-v0.2.md`
- Legal review: `../../docs/research/legal-compliance-review-2026-05-14.md`
