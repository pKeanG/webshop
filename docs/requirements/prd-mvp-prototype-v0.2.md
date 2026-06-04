# 📋 PRD — Webshop GameFi MVP Prototype (v0.2)

| Field | Value |
|---|---|
| **Version** | v0.2 — Compliance-aware revision |
| **Supersedes** | [v0.1](./prd-mvp-prototype-v0.1.md) |
| **Owner** | Project Manager (PM Agent) |
| **Stakeholder** | Bitkub Blockchain Technology (BBT) × Playpark |
| **Date** | 2026-05-14 |
| **Status** | 🟡 Draft — รอ leadership sign-off ของ Risk Acceptance ก่อน build |

---

## 🆕 Change Log จาก v0.1

| Section | Change | Reason |
|---|---|---|
| §4 Technical Decisions | **Wallet model = Non-custodial AA (locked-in)** | Stakeholder decision 2026-05-14 |
| §4 Technical Decisions | **Token classification = Utility Group 2 (wrapper pattern)** | Stakeholder decision 2026-05-14 |
| §4 Payment | **USDT business model = Direct payment (kept)** | Stakeholder decision — Path D, accept risk |
| §6 Entity (NEW) | Hybrid: Thai company + offshore option open | Stakeholder decision |
| §9 Compliance | **Risk matrix updated** ตาม legal review | Thai finlaw consultant findings |
| §10 Phasing | **Pilot scope = Open public** (no closed beta) | Stakeholder decision |
| §11 Risk Register (NEW) | เพิ่ม section — Risk Acceptance Statement | Path D requires formal acceptance |
| §12 Open Questions | ลด 7 ข้อ → 3 ข้อ (4 ข้อตอบแล้ว) | Discovery progress |

---

## 1. 🎯 Vision (unchanged)

(ดู [v0.1 §1](./prd-mvp-prototype-v0.1.md#1--vision--objective))

---

## 4. 🔐 Key Technical Decisions (REVISED)

### 4.1 Wallet Architecture — **CONFIRMED**
- **Model:** Non-custodial Account Abstraction (ERC-4337)
- **User holds key** via passkey/biometric (WebAuthn) — **Platform never has access to private key**
- **Platform role limited to:**
  - Paymaster (sponsor gas)
  - UI/UX wrapper around smart wallet
  - Optional: social recovery network (with user-elected guardians)
- **🟢 Compliance benefit:** ไม่เข้านิยาม "ผู้ให้บริการรับฝากสินทรัพย์ดิจิทัล" — ไม่ต้องขอใบอนุญาต custodial wallet
- **Provider candidate:** Privy / Web3Auth (passkey-first) / custom AA factory
- **Verification gate:** Counsel ต้อง opinion ว่า architecture สุดท้ายไม่ถือ "custody" ทางพฤตินัย

### 4.2 Token Classification — **CONFIRMED (with caveat)**
- **In-game items = Wrapped as Group 2 Utility Token (ready-to-use)**
- **Architecture:** 2-layer model
  - **Layer 1 (Tradeable):** Group 2 utility token — ERC-20 หรือ ERC-1155 — **มี multi-utility**:
    - ✓ Redeem เป็น in-game item (1:1 wrapper)
    - ⚠️ ต้องเพิ่ม: governance vote / staking yield / cross-game utility (ให้ stick กับ Group 2)
  - **Layer 2 (Consumed):** in-game item เมื่อ user redeem แล้ว burn token
- **⚠️ Caveat:** SEC ใช้ "substance over form" — ถ้า counsel review แล้วตัดสินเป็น Group 1 → ต้อง redesign tokenomics หรือ accept Group 1 (ห้าม list บน DA Exchange แต่ marketplace P2P ยังทำได้)
- **Royalty:** EIP-2981

### 4.3 Blockchain (unchanged)
- KUB Chain (Bitkub Chain, EVM-compatible)
- USDT บน KUB chain (KAP20) — Crypto Researcher pending verify

### 4.4 Payment Methods — **CONFIRMED Direct Payment Model**
| Method | Status | Note |
|---|---|---|
| 💎 USDT (on-chain) | **Direct payment (HIGH RISK)** | User จ่าย USDT → ได้รับ Group 2 token (ที่ redeem เป็น item ได้) — Path D accepted |
| 💳 Credit Card | Mock UI + flow | Omise / 2C2P production |
| 📱 QR PromptPay | Mock UI + flow | Omise / SCB / KBank production |
| 🏦 Bank Transfer | Mock UI + flow | Manual confirm |

---

## 6. 🏢 Entity Structure (NEW)

### 6.1 Decision: **Hybrid — Open to both Thai + Offshore**

| Layer | Entity | Function |
|---|---|---|
| **Thai operating company** | BBT subsidiary หรือ JV with Playpark | KYC, fiat on-ramp, Thai user contracts, regulatory reporting |
| **Offshore (TBD)** | Singapore / BVI / Dubai | Smart contract deployment, treasury (USDT pool), token issuance |

### 6.2 Implications
- Thai entity → ภายใต้ Thai SEC + ธปท. + AMLO
- Offshore → Issuance + treasury อาจหลบบางกฎ — แต่ **ถ้า target Thai users ยังเข้า Thai jurisdiction** อยู่ดี
- ⚠️ ต้องระวัง "regulatory arbitrage" optics — BBT เป็น regulated DABO ในไทย, การใช้ offshore เลี่ยงกฎอาจ damage license อื่น

### 6.3 Action Required
- 📌 Legal opinion: ขอบเขต jurisdiction + structuring options
- 📌 Tax opinion: cross-border transfer pricing, CFC rules
- 📌 BBT leadership decision: appetite สำหรับ regulatory risk

---

## 9. ⚖️ Compliance / Regulatory — **UPDATED RISK MATRIX**

| Concern | Risk | Mitigation Plan | Status |
|---|---|---|---|
| Custodial wallet license | 🟢 **Mitigated** | Non-custodial AA model + counsel opinion | Confirmed §4.1 |
| **USDT direct payment** | 🔴 **HIGH (accepted)** | See §11 Risk Register | Path D accepted |
| Token classification (Group 2) | 🟠 **Med** | Tokenomics design + counsel opinion ก่อน launch | Action required |
| ICO Portal requirement | 🟠 **Med** | If Group 2 holds → likely need portal เพราะ public sale | Action required |
| KYC requirement | 🔴 **High (production)** | NDID + AMLO registration + tiered KYC | Production blocker |
| PDPA | 🟠 **Med** | DPO + consent + breach notification SOP | Pre-launch |
| 15% WHT | 🟡 **Low** | Annual reporting + TOS clause | Pre-launch |
| Foreign operator | 🟠 **Med** | Counsel structuring opinion | Action required |
| Means-of-payment ban (ทธ. 5/2565) | 🔴 **HIGH (accepted)** | See §11 Risk Register | Path D accepted |

---

## 10. 📅 Phasing (REVISED)

| Phase | Scope | Pre-conditions | Duration |
|---|---|---|---|
| **Phase 0 — Prototype** | Mockup + spec (this) | — | 4-6 weeks (current) |
| **Phase 1 — Compliance Setup** | Legal opinion, entity setup, tokenomics, sandbox apply (in parallel) | PRD v0.2 sign-off | 8-12 weeks |
| **Phase 2 — Dev + Pilot infra** | Build smart contracts, backend, frontend, KYC integration | Compliance opinions on hand | 12-16 weeks |
| **Phase 3 — Pre-launch** | Audit, pen test, beta with internal users | Phase 2 done | 4-6 weeks |
| **Phase 4 — Open public launch** | Full marketing, public access | **Risk Acceptance signed by BBT + Playpark CEO** | Launch |

### Open Public Confirmed
Stakeholder ตัดสินใจ launch **open public** ตั้งแต่ Phase 4 (ไม่มี closed beta phase แยก)
- ⚠️ ต้อง KYC + PDPA + sanctions screening ครบก่อน launch
- ⚠️ Customer support + dispute resolution + escrow ต้อง ready

---

## 11. 🚨 Risk Register & Acceptance Statement (NEW)

### 11.1 High-Risk Items Accepted by Stakeholder

ตามคำตอบของ stakeholder (BBT Product Management) ณ 2026-05-14:
- ✅ **Path D selected: เดินหน้าตามแผนเดิม — ยอมรับความเสี่ยง**

### 11.2 Specific Risks Accepted

#### R1: USDT Direct Payment (ทธ. 5/2565 exposure)

| Field | Detail |
|---|---|
| **Risk** | ประกาศ ก.ต.ท. ทธ. 5/2565 ห้าม DABO facilitate digital asset as means of payment |
| **Likelihood of enforcement** | กลาง-สูง (SEC มอนิเตอร์เข้มงวด, BBT visible) |
| **Worst-case impact** | Cease & desist order, fine, license review สำหรับ BBT |
| **Mitigation in place** | (1) Token wrapper layer (ซื้อ token → redeem item) แทน direct purchase, (2) Counsel opinion ก่อน launch, (3) Crisis communication plan |
| **Residual risk** | HIGH |
| **Accepted by** | TBD — needs BBT CEO + Playpark CEO sign-off |
| **Review cadence** | Quarterly |

#### R2: Token Classification Uncertainty

| Field | Detail |
|---|---|
| **Risk** | Group 2 classification อาจถูก SEC re-classify เป็น Group 1 — ต้อง redesign |
| **Likelihood** | กลาง — ขึ้นอยู่กับ tokenomics design |
| **Worst-case impact** | Delist จาก DA Exchange (ถ้าเคย list), product redesign |
| **Mitigation** | Pre-launch legal opinion + design token with multi-utility (gov, staking, redemption) |
| **Residual risk** | MED |

#### R3: Open Public Launch Without Sandbox

| Field | Detail |
|---|---|
| **Risk** | Launch open public without ก.ล.ต. sandbox approval = full regulatory exposure |
| **Likelihood** | High visibility |
| **Worst-case impact** | Forced shutdown, retroactive fines |
| **Mitigation** | (1) Apply sandbox in parallel as defensive option, (2) Legal opinions + no-action letter from ก.ล.ต., (3) Strong TOS with risk disclosures, (4) Tiered KYC |
| **Residual risk** | HIGH |

### 11.3 Risk Acceptance Sign-off Template

> โดยลงนามด้านล่าง ข้าพเจ้ารับทราบและยอมรับความเสี่ยงทางกฎหมายและการกำกับดูแลตามที่ระบุใน §11.2 ของเอกสารนี้ และเข้าใจว่าการ launch open public ของ Webshop GameFi โดย USDT direct payment model อาจเข้าข่ายขัด ประกาศ ก.ต.ท. ทธ. 5/2565 และ/หรือ พ.ร.ก. การประกอบธุรกิจสินทรัพย์ดิจิทัล พ.ศ. 2561

| Role | Name | Signature | Date |
|---|---|---|---|
| CEO, BBT | ____________ | ____________ | ____________ |
| CEO, Playpark | ____________ | ____________ | ____________ |
| Chief Legal, BBT | ____________ | ____________ | ____________ |
| Head of Compliance, BBT | ____________ | ____________ | ____________ |

⚠️ **PM ห้ามอนุมัติ build production code ก่อน sign-off ทั้ง 4 lines**

---

## 12. ❓ Open Questions (REDUCED 7 → 3)

**ตอบแล้ว** ใน v0.2:
- ~~Wallet model~~ → Non-custodial AA
- ~~Entity~~ → Hybrid (Thai + offshore option)
- ~~Token classification~~ → Group 2 wrapper pattern
- ~~USDT model~~ → Direct payment (Path D, accepted)
- ~~Pilot scope~~ → Open public
- ~~Pilot games~~ → MapleStory + Yulgang (per v0.1)
- ~~Brand~~ → Per-game branding (per v0.1)

**ยังต้องตอบ (Stakeholder):**

1. **Royalty %** บน secondary market (3%? 5%? 10%? — ดูที่ Astronize ≈ 3-7%)
2. **Platform fee** บน primary + secondary (% ของ tx)
3. **Domain & branding name** สำหรับ platform (เช่น kubplay.games?)

---

## 13. 🚀 Next Steps (REVISED — Priority Order)

### 🔥 IMMEDIATE (Week 1)
1. **PM** → ส่ง PRD v0.2 ให้ BBT Legal team
2. **PM** → Schedule meeting กับ BBT CEO + Playpark CEO เพื่อ review Risk Register
3. **PM** → Engage Thai compliance counsel (Baker McKenzie / Tilleke / Chandler MHM / Silk Legal)

### 🟠 PRE-BUILD (Week 2-6)
4. **Crypto Researcher** (parallel):
   - USDT on KUB chain (KAP20) feasibility
   - ERC-4337 paymaster readiness on KUB
   - Comparable analysis (Astronize, Maxion)
5. **Counsel** (parallel):
   - Token classification opinion (Group 1 vs 2)
   - Means-of-payment exposure analysis
   - Wallet architecture review (non-custodial confirmation)
   - Entity structuring recommendation
6. **PM** → Apply for ก.ล.ต. Sandbox (defensive option)
7. **UX/UI Designer** → Continue with mockup feedback iteration

### 🟢 BUILD (Week 7+)
8. **Dev** → Smart contracts (token, marketplace) on KUB testnet
9. **Dev** → Frontend + Backend scaffold
10. **Dev** → Payment integration (sandbox/mock first)

---

## 14. ✍️ Sign-off

| Role | Approved? | Date |
|---|---|---|
| Stakeholder (Product Mgmt) | ✅ Decisions confirmed | 2026-05-14 |
| Stakeholder (BBT CEO) | ⏳ Pending Risk Acceptance | — |
| Stakeholder (Playpark CEO) | ⏳ Pending Risk Acceptance | — |
| BBT Chief Legal | ⏳ Pending review | — |
| Thai compliance counsel | ⏳ Pending engagement | — |
| Project Manager | ✅ Drafted v0.2 | 2026-05-14 |

---

*This document supersedes PRD v0.1. Build activities should not commence on production code until sign-off lines in §11.3 + §14 are complete.*
