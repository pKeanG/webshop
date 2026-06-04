# BD Review Memo — BRD Concept 1 vs Concept 2B

**From:** 💼 Business Development Agent
**To:** 🎯 Project Manager
**Date:** 20 May 2026
**Subject:** Business review of BRD-PWGF-001 (Concept 1) + BRD-PWMP-001 (Concept 2B), and pitch-readiness gap analysis for Playpark stakeholder meeting
**Classification:** INTERNAL — BBT Product Team

---

## TL;DR (30-second read)

> **Update 20 May 2026 (post-revision):** Timeline updated — Concept 1 = 4–6 เดือน, Concept 2B = 1–2 เดือน Budget detail deferred (TBD until scope confirmation) Competitor benchmark = NEXT Market (Unifi Wallet) as primary comparable

ทั้ง 2 BRD เขียนได้ดี ครบ format BBT แต่ **ยังไม่พร้อม pitch ตามที่เป็น** เพราะขาด 4 อย่างที่ executive ของ Playpark จะถามแน่นอน:

1. **ตัวเลข Market & Revenue Projection** — ไม่มี TAM/SAM/SOM, ไม่มี revenue forecast 3-5 ปี, ไม่มี break-even analysis
2. **Strategic narrative ที่เชื่อม 2 concept** — ตอนนี้ดูเหมือนเป็น 2 ทางเลือกแยกกัน ควรเป็น "Concept 2B เป็น Phase 0 สู่ Concept 1" — 1 narrative ไม่ใช่ either/or
3. **Win-win value proposition สำหรับ Playpark** — BRD เน้น "Playpark ต้องทำอะไร" แต่ไม่ชัดว่า "Playpark จะได้อะไรกลับ" (incremental GMV %, new user reach, brand uplift)
4. **Comparable benchmarks** — ไม่มีตัวอย่างจริง Astronize/Maxion/Roverse ที่ Playpark จะเชื่อมโยงได้

**คำแนะนำ:** ก่อน pitch ต้องสร้าง **3 supporting documents** เพิ่ม:
- Financial Model (`docs/business/models/`) — revenue projection 3 ปี + sensitivity analysis
- Market Sizing Memo (`docs/business/market-research/`) — TAM/SAM/SOM with citation
- Competitive Positioning Slide — visual map vs Astronize / Maxion / NextMarket / OpenSea

---

## 1. Concept 1 (Full Platform) — BD Review

### 1.1 จุดแข็ง

- **Scope ชัดเจน, 25 BRs ครอบคลุมครบ** — primary/secondary, payment, NFT, royalty, compliance
- **Phased rollout (18-24 เดือน) realistic** — ไม่ over-promise
- **EIP-2981 royalty 5% ฉลาด** — Playpark จะได้ recurring revenue จาก secondary market แทนที่จะได้รายได้ครั้งเดียวจาก primary
- **Compliance หนักแน่น** — อ้าง ทธ. 5/2565, AMLO, PDPA — แสดงให้เห็นว่าทีม BBT มืออาชีพ

### 1.2 จุดอ่อน / Gap

| # | Gap | ระดับ | ทำไมต้องแก้ |
|---|---|---|---|
| C1-G1 | **ไม่มี Revenue Projection** | 🔴 Critical | Playpark CFO/COO จะถามทันที "ROI กี่ปี?" — ไม่มีตอบไม่ได้ |
| C1-G2 | **ไม่มี Platform Fee / Marketplace Fee Structure** | 🔴 Critical | BR-XXX ระบุว่ามี marketplace fee แต่ไม่บอกว่ากี่ % — Playpark ต้องรู้ split ก่อน sign |
| C1-G3 | **ไม่มี Comparable Benchmarks** | 🟡 Major | Astronize 3-7%, OpenSea 2.5% — ต้องอ้างเทียบ |
| C1-G4 | **Budget USD 2.5M-4M ช่วงกว้างเกินไป** | 🟡 Major | Spread 60% = ดูเหมือนไม่ได้คำนวณจริง |
| C1-G5 | **NFT ที่ไม่ใช่ "investment" คำอธิบายต้องชัดกว่านี้** | 🟡 Major | ก.ล.ต. ห่วงเรื่องนี้ — Playpark legal จะต้องดูตรงนี้ก่อน sign |
| C1-G6 | **ไม่มี User Acquisition Plan** | 🟠 Should-fix | platform เปิดมาแล้วใครจะใช้? พึ่ง Playpark MAU เดิม + Bitkub user — ต้องระบุชัด |
| C1-G7 | **ไม่ระบุ Asphere/Playpark Group buy-in mechanism** | 🟠 Should-fix | Playpark Public Company ตัดสินใจคนเดียวไม่ได้ ต้องผ่าน Asphere |
| C1-G8 | **ไม่มี Risk Register แยกเป็น table** | 🟢 Nice-to-have | Project Constraints มีแต่ไม่ใช่ risk-impact-mitigation matrix |

### 1.3 BR เสี่ยงที่ควร revisit

- **BR เกี่ยวกับ Multi-game support** — สมมติว่า Playpark จะ port 4-5 เกมเข้า platform แต่ยังไม่ได้ตกลงกับ Nexon/NCSoft (game developers ต้นทาง) ซึ่งต้องอนุมัติการแปลง in-game item เป็น NFT
- **BR เกี่ยวกับ Cross-game inventory** — ดี แต่ technical complexity สูงมาก ไม่ควรอยู่ใน Phase 1
- **BR เกี่ยวกับ ERC-4337 gas-less** — ดีมาก แต่ต้องระบุว่า BBT cover gas หรือ Playpark cover? — Bitkub Group มี gas sponsor program สำหรับ partners

---

## 2. Concept 2B (Quick Win) — BD Review

### 2.1 จุดแข็ง

- **Quick win จริง — 3-6 เดือน, USD 245K-445K reasonable** — ตัวเลขกำลังดี
- **Compliance พึ่ง license ของ Bitkub Group = ลด risk Playpark มหาศาล** — point นี้สำคัญสุดสำหรับ pitch
- **Reversibility สูง** — เป็นจุดขายสำคัญ "ปิด channel ได้ทุกเมื่อ" = lower commitment
- **Settlement options 2 แบบ (THB/USDT) ฉลาด** — ให้ Playpark เลือกตาม risk appetite
- **Co-marketing กับ Bitkub Exchange = ขยาย reach** — Bitkub มี 5M+ accounts สามารถเป็น user funnel เข้า PlayMall ได้

### 2.2 จุดอ่อน / Gap

| # | Gap | ระดับ | ทำไมต้องแก้ |
|---|---|---|---|
| C2B-G1 | **ไม่มี Pricing Model สำหรับ Merchant Fee** | 🔴 Critical | KUB Wallet จะเก็บค่าธรรมเนียม merchant กี่ %? — Playpark ต้องรู้ก่อน sign |
| C2B-G2 | **ไม่มี FX Risk Model** | 🔴 Critical | USDT/THB volatility สำคัญมาก — ถ้า USDT depeg, ใครรับ loss? settlement T+1 = expose Playpark ต่อ FX risk |
| C2B-G3 | **Performance target "10% of PlayMall sales จาก USDT ใน 6 เดือน" — ต้อง defend** | 🟡 Major | จากไหน? — ต้องมี comparable: Astronize crypto-payment %, Maxion %, ฯลฯ |
| C2B-G4 | **Refund as USDT ต้องชัดในข้อสัญญา** | 🟡 Major | ถ้า user refund แล้ว USDT depeg ที่ moment of refund? ใครรับผิดชอบ delta? |
| C2B-G5 | **Customer Support runbook ยังไม่มี** | 🟡 Major | CS Playpark ไม่เคย handle crypto user — ต้อง concrete training plan |
| C2B-G6 | **Co-marketing budget split ไม่ชัด** | 🟢 Nice-to-have | BR-030/031 ระบุว่ามี co-marketing แต่ไม่บอกว่า Bitkub Group ลงทุนเท่าไหร่ |
| C2B-G7 | **ขาด "Bridge to Concept 1" narrative** | 🟠 Should-fix | Concept 2B ควรเป็น stepping stone ไป Concept 1 ไม่ใช่ทางเลือกแทน |

### 2.3 จุดที่อาจ over-promise

- **"10K+ USDT transactions in 90 days"** — มาจาก assumption อะไร? Astronize ใช้เวลานานแค่ไหนถึงได้ volume แบบนี้?
- **"Playpark ไม่ต้องขอ license เพิ่ม"** — ต้อง verify กับ thai-finlaw-consultant อีกครั้ง ว่าแม้แต่ "ผู้รับ USDT settlement" จะไม่ถือเป็น digital asset business activity? — Crypto Researcher ควรเช็คอีกรอบ

---

## 3. Strategic Narrative Gap — สำคัญที่สุด

### 3.1 ปัญหา: 2 BRD ดูเหมือน Either/Or

ตอนนี้ BRD ทั้ง 2 ดูเหมือนเป็น **competing alternatives** — Playpark ต้องเลือกอย่างใดอย่างหนึ่ง ซึ่งจะทำให้ executive Playpark งง ว่า BBT recommend อันไหน

### 3.2 แนะนำ: เปลี่ยนเป็น **Phased Strategy เดียว**

```
Phase 0 (Month 0-6):    Concept 2B = Quick Win + Validate Demand
       ↓
       │ → Validate: USDT adoption rate, crypto user appetite,
       │             customer support capacity, regulatory clarity
       ↓
Phase 1 (Month 6-24):   Concept 1 = Full Platform (if Phase 0 KPIs met)
       ↓
       │ → If KPIs miss: Pivot scope / extend Concept 2B
       │ → If KPIs hit:  Scale to Web3 platform
       ↓
Phase 2 (Month 24+):    Multi-publisher onboarding + SEA expansion
```

**Story สำหรับ Playpark CEO:**
> "BBT ขอเสนอ partnership 3-phase — เริ่มที่ 2B (low risk, fast) เป็น Phase 0 → ถ้าได้ data + traction จริง ค่อยลงทุน Concept 1 ใน Phase 1 → เป้าหมายระยะยาวคือ Webshop GameFi เป็น marketplace มาตรฐานของ SEA ใน 3 ปี"

This is **way more compelling** ว่ามาแยกเป็น 2 option ให้เลือก เพราะ:
- Playpark feel: "BBT คิดเรื่องระยะยาว ไม่ใช่แค่ขายของ"
- BBT feel: "ได้ commit ระยะยาว"
- Risk: shared (Phase 0 ลด risk Phase 1)

---

## 4. Playpark Stakeholder Angle — What They'll Actually Ask

ใส่ตัวเอาในบทบาท Playpark exec 3 คน:

### 4.1 Playpark CEO (Strategy + Risk)

จะถาม:
- "ทำไมต้องเป็น Bitkub? — competitor มี Bitazza, Satang, ฯลฯ"
- "ถ้า Bitkub Exchange มีปัญหา (เคย hack, regulator action) จะกระทบ Playpark ไหม?"
- "Partnership exclusivity? — ถ้าเลือก Bitkub แล้วทำกับ Binance ไม่ได้ใช่ไหม?"
- "ลง Concept 1 เต็มสเกล → ถ้าไม่ work ใครรับ sunk cost?"

**Gap:** BRD ไม่ได้ระบุ exclusivity model, ไม่ได้พูดถึง competitor wallets, ไม่ได้บอก commitment level

### 4.2 Playpark CFO (Numbers)

จะถาม:
- "ROI กี่ปี? Break-even เมื่อไหร่?"
- "ค่าธรรมเนียมที่ KUB Wallet เก็บคือ %?"
- "Settlement T+1 = working capital impact = เท่าไหร่?"
- "FX hedge strategy?"
- "Marketing co-funding 50/50 หรือกี่ %?"

**Gap:** ตัวเลขเหล่านี้ส่วนใหญ่หายไป — Critical fix

### 4.3 Playpark CTO (Technical + Operational)

จะถาม:
- "Integration effort = man-days?"
- "Existing PlayMall stack คือ — Concept 2B รองรับไหม?"
- "Webhook reliability — SLA?"
- "Refund automation level — manual ผ่าน dashboard เท่านั้น = ผิดยุค"
- "Concept 1 cross-game inventory — ใครเป็นเจ้าของ database authoritative?"

**Gap:** ขาด technical architecture diagram, ขาด SLA, ขาด integration timeline detail

---

## 5. Competitive Positioning — สิ่งที่ขาดสำคัญสำหรับ Pitch

### 5.1 BRD ขาด: Competitive Positioning Matrix

**Primary Competitor:** **NEXT Market** ([nextmarket.games](https://www.nextmarket.games/)) — ใช้ **Unifi Wallet** เป็น wallet infrastructure

ต้องสร้าง visual table แบบนี้ก่อน pitch:

| Platform | Wallet | Exchange Backing | Webshop | License Stack | Status (TH) |
|---|---|---|---|---|---|
| **Concept 1 (proposed)** | KUB Wallet (Bitkub NEXT) | Bitkub Exchange 5M+ | New build (multi-game) | Full Bitkub Group | Pre-launch |
| **Concept 2B (proposed)** | KUB Wallet (Bitkub NEXT) | Bitkub Exchange 5M+ | PlayMall (existing) | Full Bitkub Group | Pre-launch |
| **NEXT Market** | Unifi Wallet | Limited | New build (multi-game) | Wallet-only | Live |
| Astronize (TSX) | KUB Wallet | Bitkub Exchange | New build | Bitkub Group | Live |
| Maxion (Roverse) | Internal wallet | Limited | New build | Limited | Live |

**ไม่มีตารางนี้ใน BRD = pitch จะดูอ่อน** เพราะ Playpark exec จะถามอยู่แล้วว่า "ทำไมต้องสร้างใหม่? — NEXT Market มีอยู่แล้ว" หรือ "ทำไมไม่ใช้ NEXT Market platform เป็น white-label?"

**Counter-argument ที่ควรเตรียม:**
- NEXT Market ใช้ Unifi Wallet ไม่มี ecosystem reach ของ Bitkub Group (Exchange + Chain + Off-ramp)
- Playpark + Bitkub Group = vertical integration ที่ NEXT Market ไม่มี
- Concept 1 มี EIP-2981 royalty 5% bake-in vs NEXT Market royalty model ไม่ standard

### 5.2 Differentiator ที่ควรชู

จาก context ของ BRD ทั้ง 2 จุดยืน competitive ของ Webshop GameFi คือ:

1. **End-to-end vertical integration** กับ Bitkub Group (Chain + Wallet + Exchange + Fiat off-ramp)
2. **Compliance-first** — ใช้ Bitkub Group's license หมายความว่า Playpark ไม่ต้องลงทุน compliance เอง
3. **Co-marketing reach** ของ Bitkub Group 5M+ exchange users — ที่ competitor ทำไม่ได้
4. **Phased commitment** — เริ่ม small (2B) ก่อน scale (1) — ลด risk
5. **EIP-2981 + KAP-20 ใน chain เดียว** — Astronize ก็ใช้ KUB chain แต่ Concept 1 จะลึกกว่า

ต้องเขียนเป็น "Our edge" slide ใน pitch deck

---

## 6. Recommendation: Pitch-Readiness Verdict

### 6.1 Verdict

🟡 **PARTIALLY READY** — BRD ทั้ง 2 ดีพอเป็น "internal requirement" แต่ **ยังไม่พร้อม pitch executive ของ Playpark โดยตรง**

### 6.2 ก่อน Pitch ต้องสร้างเพิ่ม

**Must-have (ก่อน first meeting):**

1. **Financial Model (.xlsx)** ใน `docs/business/models/playpark-webshop-projection-2026-2028.xlsx`
   - Revenue projection 3 ปี (3 scenarios: bear/base/bull)
   - Cost structure (CapEx + OpEx)
   - Break-even analysis
   - Sensitivity to: USDT volume, fee %, FX rate
   - ROI for both Playpark and BBT

2. **Pitch Deck (.pptx)** ใน `docs/business/decks/playpark-partnership-pitch-v1.pptx`
   - 15-20 slides ตาม Bitkub deep-dive structure
   - ใช้ `bbt-slide-format` skill (dark + bitkub green)
   - Story arc: Problem → 2-phase solution → Why Bitkub → Numbers → Ask
   - Visual competitive matrix
   - Mockup screenshots (มีแล้วใน `docs/design/prototypes/`)

3. **One-pager Executive Summary** ใน `docs/business/one-pagers/playpark-webshop-onepager.docx`
   - 1 หน้าสำหรับ Playpark CEO อ่าน 2 นาที
   - Highlight: Phase 0 (2B) + Phase 1 (1) → Long-term partnership

**Should-have (ก่อน Phase 0 contract signing):**

4. **Market Sizing Memo** — TAM/SAM/SOM with citations (Newzoo, DappRadar, a16z)
5. **Risk Register** — separate table — operational + technical + regulatory + market
6. **Co-marketing Term Sheet draft** — split, KPI, timeline

**Nice-to-have:**

7. **Tokenomics whitepaper** (ถ้า Concept 1 จะมี platform token ในอนาคต)
8. **SEA expansion roadmap** — Phase 2 vision

---

## 7. BD's Top 3 Action Items for PM

1. **เปลี่ยน Narrative จาก "2 option" → "1 strategy 2 phases"** — update Executive Summary ของทั้ง 2 BRD ให้อ้างถึงกัน
2. **เริ่มทำ Financial Model ทันที** — เป็น blocker สำคัญสุดของการ pitch — ผมพร้อมเริ่มเมื่อ PM อนุมัติ scope
3. **Engage Crypto Researcher ให้ verify "Playpark ไม่ต้องขอ license"** — เป็น claim สำคัญใน BRD ที่ถ้าผิด คือสะดุดสัญญาทั้งหมด

---

## 8. Summary Score Card

| Dimension | Concept 1 | Concept 2B |
|---|---|---|
| Document Format (BBT BRD spec) | 🟢 95% | 🟢 95% |
| Business Case Clarity | 🟡 70% | 🟢 80% |
| Numbers / Financial Defensibility | 🔴 40% | 🟡 60% |
| Risk Disclosure | 🟡 65% | 🟢 80% |
| Stakeholder Story (Playpark angle) | 🔴 50% | 🟡 65% |
| Pitch-Readiness | 🔴 50% | 🟡 65% |
| **Overall (out of 100)** | **62** | **74** |

**Concept 2B พร้อมกว่า** เพราะ scope เล็กกว่า ความเสี่ยง explainable กว่า — ถ้าต้องเลือก pitch อันใดอันหนึ่งก่อน → **เริ่ม Concept 2B**

---

**END OF MEMO — BD Review v1.0**
