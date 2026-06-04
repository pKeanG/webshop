# Scaffold Decisions Log

> Decisions taken by the **Senior Full Stack Developer** during the dev-environment scaffold
> phase that were **not explicitly specified** in the original brief. Every item below was a
> judgement call — flag any of them back to PM if a stakeholder wants a different answer.

| Date | Author | Scope |
|---|---|---|
| 2026-05-14 | Senior Full Stack Developer | Dev scaffold (frontend + backend + contracts + repo root) |

---

## D-001 — Monorepo via pnpm workspaces

- **Choice:** pnpm 9.x workspaces (`pnpm-workspace.yaml` + root `package.json`).
- **Why:** Brief required "workspace scripts at root" but didn't pin the tool. pnpm has the
  fastest install + best Next.js / NestJS / Hardhat interop today, and the agent spec already
  showed `pnpm` commands in workflow examples.
- **Reversibility:** Easy — swap to npm/yarn workspaces by editing 2 files.

## D-002 — KUB Chain testnet chainId 25925 + RPC

- **Choice:** `25925` + `https://rpc-testnet.bitkubchain.io` everywhere (wagmi, hardhat, env).
- **Why:** Brief specified these exact values. Mainnet chainId 96 is intentionally NOT defined
  in any config file in the repo to make accidental mainnet deploy impossible.
- **Reversibility:** Easy — add a mainnet Chain object once Risk Acceptance is signed (PRD §11.3).

## D-003 — Smart contract `contracts/` directory = interfaces only

- **Choice:** Only Solidity interfaces under `contracts/interfaces/`. No concrete contracts.
  `scripts/deploy.ts` intentionally throws.
- **Why:** Brief said "interface drafts only — NOT functional implementations" and PRD §11
  blocks production code until counsel sign-off.
- **Reversibility:** N/A — additive (concrete impls land later).

## D-004 — Prisma schema models + indexes

- **Choice:** `User`, `Wallet`, `Game`, `Item`, `Listing`, `Purchase`, `Transaction` —
  with indexes on (userId, status), (itemId, status), etc.
- **Why:** Brief said "schema for User, Wallet, Game, Item, Listing, Purchase, Transaction —
  no migration". Field shapes are my best guess based on PRD §4 + agent spec §B-flows.
- **Open question:** royalty %, platform fee % (PRD §12 Q1/Q2) — placeholders only, no DB column yet.

## D-005 — Backend env.example values

- **Choice:** `JWT_EXPIRES_IN=15m`, refresh `7d`, throttle 60 req/min, port 4000.
- **Why:** Industry defaults. PRD does not specify. Easy to tune in real env.

## D-006 — Pin major libs

- **Choice:** Pinned exact versions (no `^`) for `next`, `nestjs/*`, `hardhat`, `viem`, `wagmi`,
  `prisma`, `@openzeppelin/contracts`, etc.
- **Why:** Brief constraint #8.
- **Caveat:** I did the same for transitive dev deps (eslint plugins, types) for reproducibility.
  This is stricter than the brief required.

## D-007 — Frontend uses Privy SDK as wallet placeholder

- **Choice:** `@privy-io/react-auth` listed in `package.json`; `lib/web3/wallet.ts` exports
  only an interface + `noopWalletProvider` (no real Privy init).
- **Why:** Brief locked Privy in for non-custodial AA, but compliance gate requires counsel
  opinion (PRD §4.1 verification gate) before integrating. Web3Auth is mentioned as a fallback
  but only Privy is in `package.json` to keep deps minimal.

## D-008 — Tailwind design tokens

- **Choice:** Mapped mockup `:root` CSS variables to `tailwind.config.ts` under
  `colors.kub.*`, `colors.game.*`, `colors.rarity.*`.
- **Why:** Brief required KUB green #00E599 + rarity colors. Per-game branding from
  `mockup-v0.1-figma.md` (MapleStory orange, Yulgang pink).

## D-009 — `class-variance-authority` + `tailwind-merge` instead of full shadcn/ui install

- **Choice:** Brought in the two libs shadcn-style components rely on, but did NOT scaffold
  a full `components/ui/` shadcn directory — the spec only required 3 components
  (Header, ItemCard, PaymentMethodPicker).
- **Why:** Keeps the scaffold smaller. Dev team can `npx shadcn add ...` per-component later.

## D-010 — docker-compose: pgadmin under `tools` profile

- **Choice:** Postgres + Redis run by default; pgadmin only with `--profile tools`.
- **Why:** Brief said "optional pgadmin". This keeps the default `pnpm compose:up` lean.

## D-011 — Husky listed but not auto-installed

- **Choice:** Husky in root `devDependencies`, `prepare` script tolerates failure (`|| true`)
  so first-time `pnpm install` doesn't break on machines without git init.
- **Why:** Brief asked for "ESLint + Prettier + Husky pre-commit" but the project isn't a git
  repo per env metadata. Real `.husky/pre-commit` file is omitted — dev to add after
  `git init`.

## D-012 — Backend `viem` instead of `ethers`

- **Choice:** Added `viem` (2.x) to backend deps for read-only RPC calls.
- **Why:** Project rule #5 forbids ethers.js. viem is the wagmi-aligned choice.

## D-013 — Frontend i18n placeholder only

- **Choice:** `next-intl` is in `package.json`, but no `messages/` directory or middleware
  is created. UI copy is hard-coded Thai in pages.
- **Why:** Brief required i18n setup, but copy isn't finalized. Production hi-fi pass will
  externalize strings.

## D-014 — No `localStorage` usage anywhere in code

- **Choice:** `lib/api/client.ts` uses Axios with `withCredentials: true` (cookies);
  README documents Zustand for in-memory client state.
- **Why:** Project rule #6.
