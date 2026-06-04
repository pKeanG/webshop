# Webshop GameFi — KUB Chain × Playpark

> Web3 GameFi platform เพื่อขาย in-game items (Primary Market) และเปิด Secondary Marketplace ระหว่างผู้เล่น โดยรองรับการจ่ายเงินด้วย **USDT**, Credit Card, Bank Transfer และ QR Code

---

## 🎯 Project Overview

Platform ที่ **Bitkub Chain (KUB Chain)** ร่วมมือกับ **Playpark** เพื่อให้ผู้เล่นสามารถ:

1. **Login ด้วย PlayID** → ระบบจะสร้าง wallet address ผูกกับบัญชีอัตโนมัติ (custodial / account abstraction)
2. **Webshop (Primary Market)** — แต่ละเกมมีหน้าร้านของตัวเอง ขาย in-game items จาก publisher
3. **Marketplace (Secondary Market)** — User-to-User trading ภายในเกม (NFT-based)
4. **Payment Methods** — Credit Card / Bank Transfer / QR Code / **USDT (สำคัญที่สุด)**

นี่จะเป็นโปรเจคแรกที่ Playpark รับชำระเงินด้วย USDT ผ่านความร่วมมือกับ KUB Chain

---

## 🗺️ Sitemap

```
/                                  # Landing page — แสดงเกมทั้งหมดบน platform
├── /games/:gameId                 # Game hub (Yulgang, MapleStory, etc.)
│   ├── /shop                      # Webshop (Primary Market)
│   │   └── /shop/item/:itemId     # Item detail + payment method
│   ├── /marketplace               # Marketplace (Secondary Market — P2P)
│   │   └── /marketplace/:tokenId  # NFT/Item detail + payment method
├── /profile                       # PlayID Profile
│   ├── Personal info
│   ├── Wallet address
│   └── Transaction history
└── /auth                          # PlayID Login / Register
```

### 📐 Reference Sites
- **Primary Market**: [nextmarket.games](https://www.nextmarket.games/), [l9asia.nextmarket.games/shop](https://l9asia.nextmarket.games/shop), [astronize.com/stores](https://astronize.com/th/stores/tsx)
- **Secondary Marketplace**: [maxion.gg/roverse-th](https://apps.maxion.gg/roverse-th), [astronize.com/market](https://astronize.com/th/market)
- **Item Detail**: [maxion item](https://apps.maxion.gg/roverse-th/detail/2355379), [astronize NFT](https://astronize.com/th/nft/0x7D4622363695473062Cc0068686d81964bb6e09f/145344)

---

## 👥 Agent Team

โปรเจคนี้ใช้ระบบ **multi-agent collaboration** โดยมี Project Manager เป็นจุดติดต่อหลัก

| Agent | บทบาท | Skill ที่ใช้ |
|---|---|---|
| 🎯 **Project Manager** | จุดติดต่อหลัก, รวบรวม requirement, มอบหมายงานต่อ | `bbt-product-requirement`, `docx`, `xlsx` |
| 🔐 **Crypto Researcher** | วิจัย Web3/GameFi, KUB chain, USDT integration, regulations | `thai-finlaw-consultant`, `WebSearch` |
| 🎨 **UX/UI Designer** | User flow, wireframe, design system, Web3 UX patterns | `figma` MCP, `web-artifacts-builder` |
| 💻 **Senior Full Stack Developer** | Frontend (Next.js), Backend (NestJS), Smart Contracts (Solidity/KUB) | `web-artifacts-builder`, codebase tools |
| 💼 **Business Development** | Pitch deck, business case, market analysis, crypto + game industry expertise, monetization, GTM | `bbt-slide-format`, `pptx`, `docx`, `xlsx`, `WebSearch` |

➡️ ดูรายละเอียดได้ที่ [`.claude/agents/`](./.claude/agents/)

---

## 📁 Folder Structure

```
Webshop Gamefi/
├── .claude/
│   └── agents/                   # Agent skill definitions (.md)
│       ├── project-manager.md
│       ├── crypto-researcher.md
│       ├── uxui-designer.md
│       └── senior-fullstack-developer.md
├── docs/
│   ├── requirements/             # SRS, BRD, FR/NFR
│   ├── research/                 # Crypto/GameFi research output
│   ├── design/                   # Wireframes, design system, assets
│   └── architecture/             # System design, ERD, sequence diagrams
├── src/
│   ├── frontend/                 # Next.js + TypeScript
│   ├── backend/                  # NestJS API
│   └── contracts/                # Smart contracts (Solidity) — KUB chain
└── README.md
```

---

## ⚡ Quick Start — Dev Environment

> Status: **scaffold only**. Frontend renders the mockup with seeded data, backend modules
> throw `NotImplementedException`, smart contracts are interfaces only. See `DECISIONS.md`
> for everything the scaffolder chose that wasn't in the brief.

### Prerequisites

- Node.js `>= 20.11`
- pnpm `>= 9.0` (`npm i -g pnpm`)
- Docker + docker compose v2

### Bootstrap

```bash
# 1. Install all workspaces (frontend + backend + contracts)
pnpm install

# 2. Copy env templates
cp src/frontend/.env.example src/frontend/.env.local
cp src/backend/.env.example src/backend/.env
cp src/contracts/.env.example src/contracts/.env

# 3. Spin up Postgres + Redis
pnpm compose:up
# or:  make up

# 4. Generate Prisma client (no migrations yet — schema is pre-migration)
pnpm --filter @webshop-gamefi/backend prisma:generate

# 5. Run frontend (3000) + backend (4000) in parallel
pnpm dev
```

Or run individually:

```bash
pnpm dev:frontend          # http://localhost:3000
pnpm dev:backend           # http://localhost:4000/api/v1
```

### Smart contracts

```bash
pnpm --filter @webshop-gamefi/contracts compile
# Deploy is intentionally STUBBED — invoking it throws.
# Real deploy is blocked until PRD v0.2 §11.3 Risk Acceptance is signed.
```

### Repo layout

```
src/frontend   Next.js 14 (App Router) + Tailwind + wagmi/viem
src/backend    NestJS 10 + Prisma + PostgreSQL + Redis
src/contracts  Hardhat + Solidity 0.8.20 (KUB testnet 25925 — interfaces only)
docker-compose.yml  postgres + redis (+ optional pgadmin via --profile tools)
DECISIONS.md   Log of scaffolder decisions not in the brief
```

### Hard rules (don't violate)

- ❌ No mainnet config — chainId `25925` (testnet) only
- ❌ No real API keys committed — `.env.example` placeholders only
- ❌ No ethers.js — viem/wagmi only
- ❌ No localStorage in code — in-memory (Zustand) + httpOnly cookies
- ✅ TypeScript strict mode in every package
- ✅ Production launch gated by Risk Acceptance sign-off (PRD v0.2 §11.3)

---

## 🚀 How to Use the Agent System

User จะคุยกับ **Project Manager** เท่านั้น  
PM จะถามคำถาม clarify จนข้อมูลครบ → ค่อยมอบหมายงานให้ agent อื่น

**ตัวอย่าง prompt:**
> "@PM ฉันอยากเริ่มออกแบบหน้า webshop ของ Yulgang"

PM จะ:
1. ถาม clarifying questions (target user, item categories, payment flow ที่อยากให้ default, etc.)
2. มอบหมายให้ Crypto Researcher วิจัย USDT payment integration บน KUB chain
3. มอบหมายให้ UX/UI Designer ร่าง wireframe
4. มอบหมายให้ Developer scaffold codebase
