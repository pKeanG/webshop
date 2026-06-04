# Smart Contracts — Webshop GameFi

Hardhat scaffold for the Webshop GameFi smart contract suite on **KUB Chain (Bitkub Chain) testnet**.

> **Status: scaffold only.** The `contracts/interfaces/` directory contains _interface drafts only_ —
> no implementations exist yet. Real implementations are gated by:
>
> 1. Legal opinion on **token classification (Group 1 vs Group 2)** — see PRD v0.2 §4.2 + §11.2 R2.
> 2. Legal opinion on **means-of-payment exposure** (ประกาศ ก.ต.ท. ทธ. 5/2565) — PRD v0.2 §11.2 R1.
> 3. **Risk Acceptance sign-off** by BBT CEO + Playpark CEO + Chief Legal + Head of Compliance.
> 4. **Smart-contract audit** (Hacken / Certik / Beosin) before any non-testnet deploy.

## Stack

- Solidity `^0.8.20`
- Hardhat 2.22
- OpenZeppelin Contracts 5.0
- TypeScript 5.5 strict mode
- Target chain: **KUB Chain testnet — chainId 25925** (`https://rpc-testnet.bitkubchain.io`)
- **No mainnet config exists in this repo by design.**

## Interface drafts

| File | Purpose |
|---|---|
| `contracts/interfaces/IGameItem1155.sol` | ERC-1155 + EIP-2981 royalty for per-game items |
| `contracts/interfaces/IWrapperToken.sol` | Group 2 utility token wrapper (USDT → wrapper → redeem to item) |
| `contracts/interfaces/IMarketplace.sol`  | P2P listing / buy / offer |
| `contracts/interfaces/IPaymaster.sol`    | ERC-4337 paymaster for sponsored gas |

## How to run (after `pnpm install` at repo root)

```bash
# Copy env template
cp .env.example .env

# Compile the interface drafts (no deploy artifacts will move beyond testnet)
pnpm --filter @webshop-gamefi/contracts compile

# Run the empty test suite
pnpm --filter @webshop-gamefi/contracts test

# Deploy is intentionally STUBBED — invoking it will throw.
pnpm --filter @webshop-gamefi/contracts deploy:testnet
```

## What is NOT here (and won't be added until counsel signs off)

- ❌ Implementation contracts (`GameItem1155.sol`, `WrapperToken.sol`, `Marketplace.sol`, `Paymaster.sol`)
- ❌ Mainnet network config
- ❌ Real deployer key (use Gnosis Safe + multi-sig in production)
- ❌ Bytecode verification scripts

## References

- KUB Chain docs: https://docs.bitkubchain.org
- Bitkub Chain testnet explorer: https://testnet.bkcscan.com
- ERC-4337: https://eips.ethereum.org/EIPS/eip-4337
- EIP-2981 (royalty): https://eips.ethereum.org/EIPS/eip-2981
- PRD v0.2: `../../docs/requirements/prd-mvp-prototype-v0.2.md`
- Legal review: `../../docs/research/legal-compliance-review-2026-05-14.md`
