# 🎨 Mid-fi Mockup v0.1 — Figma

| Field | Value |
|---|---|
| **Tool** | Figma (Bitkub Blockchain Technology team) |
| **File** | Webshop GameFi - MVP Mockup v0.1 |
| **URL** | https://www.figma.com/design/dRG3h9enrrbLxp2VUwxewU |
| **Fidelity** | Mid-fi (layout + real content, no high-end visuals) |
| **Resolution** | Desktop 1440×900 per frame |
| **Pages built** | 11 / 11 ✅ |
| **Date** | 2026-05-14 |
| **Created by** | UX/UI Designer Agent (delegated by PM) |

---

## 🗺️ Canvas Layout (3 cols × 4 rows)

```
┌─────────────────┬─────────────────┬─────────────────┐
│ 01. Landing     │ 02. Login       │ 03. Register +  │
│ /               │ /auth/login     │    Wallet       │
├─────────────────┼─────────────────┼─────────────────┤
│ 04. Game Hub    │ 05. Webshop     │ 06. Item Detail │
│ MapleStory      │ MapleStory      │ Primary +       │
│                 │                 │ Payment Picker  │
├─────────────────┼─────────────────┼─────────────────┤
│ 07. Marketplace │ 08. NFT Detail  │ 09. Profile +   │
│ P2P             │ Secondary       │ Wallet info     │
├─────────────────┼─────────────────┼─────────────────┤
│ 10. Inventory   │ 11. Transaction │  (empty)        │
│ (per-game)      │     History     │                 │
└─────────────────┴─────────────────┴─────────────────┘
```

---

## 📋 Frame-by-frame highlights

### 01 — Landing (`/`)
- Hero banner (dark) + 2 CTAs ("เริ่มเล่นเลย", "ดูเกมทั้งหมด")
- Game cards: MapleStory (yellow), Yulgang (pink), Cabal Online (coming soon)
- KUB chrome header with USDT balance + avatar

### 02 — Login (`/auth/login`)
- Centered card with email/password
- 4 social options (Google, Facebook, LINE, Apple)
- Side panel: "PlayID benefits" (wallet auto-created, P2P trading, KUB security)

### 03 — Register + Wallet (`/auth/register`)
- 3-step progress (เลือก login → ยืนยันอีเมล → สร้าง wallet auto)
- Social + email options
- **Side panel explains ERC-4337 Smart Wallet** — gasless, social recovery, no seed phrase

### 04 — Game Hub · MapleStory (`/games/maplestory`)
- Game-branded hero (MapleStory orange)
- Per-game sub-nav (Home / Shop / Marketplace / Inventory / ข่าวสาร)
- 3 stat tiles + featured items grid

### 05 — Webshop (`/games/maplestory/shop`)
- Left: filter sidebar (category, rarity, price)
- Right: sort bar + 8-item grid (4 cols × 2 rows)
- Each card: rarity tag + USDT price + THB equivalent

### 06 — Item Detail Primary ⭐ (`/games/maplestory/shop/item/123`)
- Gallery + 4 thumbnails
- Right column: name + rarity badge + stock + stats tabs
- **HERO: 4-method payment picker — USDT marked "RECOMMENDED" with green border**
- Trust signal footer: KUB Chain · Playpark guarantee · 24h refund

### 07 — Marketplace P2P (`/games/maplestory/marketplace`)
- Stat strip (active listings, floor, volume)
- Filter bar (type, rarity, price, payment accepted)
- 8-card grid with seller info (name, rating, time, offer count)

### 08 — NFT Detail Secondary (`/games/maplestory/marketplace/456`)
- Token ID + contract + KUB Explorer link (advanced/Persona B)
- Verified seller card (avatar, rating, sales, disputes, wallet address)
- Buy Now (USDT) + Make Offer dual CTA
- Mini price history chart (30 days)

### 09 — Profile (`/profile`)
- Side nav (Profile / Inventory / Transactions / Wallet / Settings / Help)
- Profile card (avatar, name, verified badge, stats)
- **Dark Wallet card**: address + copy + Explorer link + balance + 3 actions (เติม/ถอน/สลับเป็น THB)
- Collapsed "Advanced" section for Persona B (export key, dApp connect)

### 10 — Inventory (`/profile/inventory`)
- Game filter pills (All / MapleStory / Yulgang)
- Grouped by game: MapleStory (6 items) + Yulgang (3 items)
- Each item: image, name, rarity, owned count, ~USDT value, "List on Marketplace" CTA

### 11 — Transaction History (`/profile/transactions`)
- Filter chips: All / Primary buy / Secondary buy-sell / Wallet
- Table: date, type chip (color-coded), item, amount, status, tx hash
- Status pills: Success (green), Pending (yellow), Failed (red)

---

## 🎨 Design Decisions Made (ผมเลือกให้ — เปลี่ยนได้)

| Decision | Choice | Reasoning |
|---|---|---|
| **Default font** | Inter | Available in Figma + supports Thai diacritics OK |
| **Header chrome** | Near-black (#0A0F14) | Matches "KUB" identity, contrasts game brand colors |
| **Per-game accent** | MapleStory = orange, Yulgang = pink | Mockup convention — production จะใช้ asset จาก publisher |
| **USDT highlight color** | KUB green (#00E599) | Brand consistency + signals "recommended" |
| **Rarity colors** | Common=gray · Rare=blue · Epic=purple · Legendary=gold | Industry standard (Steam/Diablo convention) |
| **Currency display** | USDT primary, THB ≈ secondary | Matches PRD hero positioning of USDT |
| **Wallet address display** | Truncated `0xAb12…3456` + copy + Explorer | Persona A: doesn't scare; Persona B: usable |
| **Progressive disclosure** | "Advanced" sections collapsed | Casual users don't see export key etc. by default |
| **Trust signals** | Verified badge, seller rating, escrow note | Critical for P2P trust (per UX skill) |

---

## ⚠️ Known Gaps (Mid-fi limitations)

These are intentional gaps for mid-fi phase — will be filled in hi-fi:
- ❌ No real game art / item images (color blocks as placeholder)
- ❌ No real Thai font (Inter only — Noto Sans Thai for hi-fi)
- ❌ No mobile responsive frames (desktop 1440 only — mobile in next iteration)
- ❌ No hover/active/disabled states
- ❌ No loading/empty states
- ❌ No error/edge case flows (insufficient balance, network error, etc.)
- ❌ No animation specs
- ❌ Per-game branding is placeholder (waiting on Playpark asset)

---

## 🔗 Direct Links

- 📂 [Open Figma file](https://www.figma.com/design/dRG3h9enrrbLxp2VUwxewU)
- 📄 [PRD v0.1](../requirements/prd-mvp-prototype-v0.1.md)
- 👥 [Agent system](../../agents/README.md)

---

## ➡️ Suggested Next Steps

1. **Stakeholder review** — เปิด Figma file ดู ทบทวน flow และ layout
2. **Feedback round** — comment ใน Figma หรือบอก PM
3. **Hi-fi iteration** — ถ้า approve mid-fi แล้ว → ทำ hi-fi (real asset, branding, mobile)
4. **Parallel: Crypto Research** — PM ขนานไปได้เลย (USDT/KUB chain readiness)
5. **Parallel: Dev scaffold** — Dev เริ่ม scaffold Next.js + NestJS ได้

---

## 📝 Note on Tooling

- Figma MCP บน Starter plan ของ BBT มี rate limit
- ใช้สำหรับ initial build ได้ แต่ iterative tweak อาจติด limit
- Production phase แนะนำ: upgrade Figma plan หรือ designer ทำงานตรงใน Figma UI
