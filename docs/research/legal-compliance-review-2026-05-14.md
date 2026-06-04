# 📋 Legal Compliance Review — PRD v0.1

| Field | Value |
|---|---|
| **For** | Project Manager Agent (Webshop GameFi MVP) |
| **By** | Thai Finlaw Consultant (skill) |
| **Date** | 2026-05-14 |
| **Subject** | วิเคราะห์ 6 ประเด็น compliance ใน PRD v0.1 ว่าถูกต้อง/ครบถ้วนไหม |
| **Method** | Reference library + Web verification (sec.or.th, BOT, Tilleke, Baker McKenzie, infoquest) |

---

## ⚡ TL;DR — Headline Findings

🔴 **PRD เดิม "Risk level" อาจต่ำเกินจริง 2 ข้อ + ขาด 1 ข้อสำคัญที่ไม่ได้ระบุไว้**

1. **🚨 Risk #1 (Custodial wallet)** — PRD ระบุ Risk High ถูกต้อง แต่กรอบกฎหมายเปลี่ยนใหม่ (มีผล **16 ม.ค. 2568**) — ต้อง re-evaluate ว่า smart wallet ที่ platform เป็นคน deploy/sponsor ให้ user เข้านิยาม "ผู้ให้บริการรับฝากสินทรัพย์ดิจิทัล" หรือไม่ (ทุน 50M THB)

2. **🔴 Risk #2 (USDT as payment) ควรเป็น HIGH ไม่ใช่ Med** — มี **ประกาศ ก.ต.ท. ทธ. 5/2565** ห้ามใช้ digital asset เป็นสื่อกลางการชำระค่าสินค้า/บริการ — มีผล 1 เม.ย. 2565 → **โครงสร้าง Webshop ที่ user จ่าย USDT ซื้อ in-game item อาจเข้าข่ายโดยตรง** (แม้ว่า มี.ค. 2568 จะอนุมัติ USDT/USDC เป็น approved crypto ก็ตาม)

3. **🟠 Risk #3 (NFT classification)** — ระบุ Risk Med ถูก แต่มี **framework ใหม่ปี 2567 แบ่ง Utility Token เป็น Group 1/2** ซึ่ง in-game NFT น่าจะเข้า Group 1 — **ห้าม list บน licensed exchange** แต่ secondary trading P2P เป็นพื้นที่ที่ยังไม่ชัด

4. **⚠️ ขาดข้อสำคัญ: "ICO Portal requirement"** สำหรับ Primary Market — ถ้า in-game item ถูก classify เป็น digital token (โดยเฉพาะ "ไม่พร้อมใช้") การขายให้ public อาจต้องผ่าน ICO Portal ที่ SEC อนุมัติ

5. **🟢 KYC, PDPA, 15% WHT** — ตำแหน่งใน PRD ถูกต้อง รายละเอียดเพิ่มเติมด้านล่าง

---

## 📊 Concern-by-concern Analysis

### Concern #1: Custodial Wallet License (ก.ล.ต.)

**PRD เดิม:** Risk High — "Smart wallet ตามนิยามใหม่อาจไม่ถือเป็น custodial — ต้อง verify"

**คำตอบ:** ✅ ระดับ risk ถูกต้อง แต่ analysis ต้องลึกขึ้น

**ฐานทางกฎหมาย:**
- พ.ร.ก. การประกอบธุรกิจสินทรัพย์ดิจิทัล พ.ศ. 2561 — มาตรา 3 + ประกาศ ก.ล.ต. กำหนดประเภทธุรกิจเพิ่มเติม "ผู้ให้บริการรับฝากสินทรัพย์ดิจิทัล"
- [ประกาศ ก.ล.ต. ที่ กธ. 19/2564](https://dl.parliament.go.th/handle/20.500.13072/583869) — หลักเกณฑ์ผู้ประกอบธุรกิจ (ฉบับแก้ไขล่าสุดถึงฉบับที่ 12)
- **ประกาศใหม่ มีผล 16 มกราคม 2568** ([อ่านสรุป](https://www.infoquest.co.th/2025/462220)) — ปรับปรุงเกณฑ์เพิ่มความหลากหลายของผู้ให้บริการ
- **อัปเดตปี 2568** ([อ่านสรุป](https://www.infoquest.co.th/2025/480278)) — ลด NC cold wallet rate 2% → 1%, **เพิ่ม cold wallet custody 90% → 95%**, **ห้าม sub-custody**, ทุนจดทะเบียน 50M THB

**ประเด็นที่ต้อง verify กับทนาย licensed:**

| คำถาม | ทำไมสำคัญ |
|---|---|
| Smart wallet (ERC-4337) ที่ **platform เป็นคน deploy + sponsor gas + ถือ key recovery** เข้านิยาม custodial wallet หรือไม่? | ถ้าใช่ → ต้องขอใบอนุญาต + ทุน 50M THB |
| ถ้า user ถือ private key เอง แต่ platform เก็บ session key / recovery key | กึ่งกลาง — น่าจะไม่เข้า แต่ขึ้นอยู่กับว่า "ครอบครองโดยพฤตินัย" หรือไม่ |
| Multi-sig หรือ MPC wallet ที่ platform เป็นหนึ่งใน signers | น่าจะเข้านิยาม custodial — platform มีอำนาจขัดขวาง user เคลื่อนย้ายได้ |

**Practical recommendation:**
- 📌 **ต้องนิยาม wallet architecture ให้ชัด** ก่อนตัดสิน — option recommendation:
  - **Option A — "Non-custodial AA wallet"**: user ถือ private key (via passkey/biometric), platform เป็นแค่ paymaster — น่าจะหลบนิยาม custodial ได้
  - **Option B — "Custodial smart wallet"**: platform เก็บ key — ต้องขอใบอนุญาต **หรือ** outsource ให้ licensed custodian (เช่น Bitkub Custody)
- 📌 **ขอ no-action / opinion letter จาก ก.ล.ต.** เป็น best practice ก่อน launch
- 📌 **ถ้าเลือก Option A** ต้องพิสูจน์ได้ว่า user มีอำนาจเคลื่อนย้าย asset ได้เอง โดยไม่ต้องผ่าน platform

---

### Concern #2: USDT as Means of Payment (ธปท.)

**PRD เดิม:** Risk Med — "ธปท. มี circular เรื่อง crypto payment ในไทย — ต้องเช็ค"

**คำตอบ:** ❌ **ระดับ risk ควรเป็น HIGH** — และ regulator หลักคือ ก.ล.ต./ก.ต.ท. ไม่ใช่ ธปท.

**ฐานทางกฎหมาย:**
- **ประกาศคณะกรรมการกำกับตลาดทุน ที่ ทธ. 5/2565** (มีผล 1 เม.ย. 2565) — ห้าม "ผู้ประกอบธุรกิจสินทรัพย์ดิจิทัล" (DABO) ให้บริการที่ facilitate การใช้ digital asset เป็น "**สื่อกลางในการชำระค่าสินค้าและบริการ**"
- [BOT-SEC joint statement, มี.ค. 2565](https://www.bot.or.th/en/news-and-media/news/news-20220323.html)
- [In-House Community summary](https://www.inhousecommunity.com/article/thai-sec-officially-prohibits-licensed-digital-asset-operators-facilitating-use-digital-assets-means-payment/)

**สิ่งที่ห้าม (ประกาศ ทธ. 5/2565):**
1. โฆษณา/ชักชวน รับชำระด้วย digital asset
2. ให้บริการระบบ/เครื่องมือที่ใช้ digital asset เป็น means of payment
3. ให้บริการ wallet ที่ใช้ในการชำระค่าสินค้า/บริการ

**ทำไมเรื่องนี้ใหญ่กับ Webshop GameFi:**
- โครงสร้าง "user จ่าย USDT → ได้รับ in-game item" **อาจเข้าข่ายโดยตรง**ของประกาศนี้ ถ้า:
  - In-game item ถูกตีความเป็น "สินค้า/บริการ" (goods/services)
  - Platform ทำหน้าที่ "facilitate" การชำระ
- แต่ถ้า in-game item ถูก classify เป็น **digital token** (utility token) → การ exchange "digital asset for digital asset" อาจ**ไม่เข้า**ข่ายห้าม (ต้อง legal opinion)

**Update ล่าสุด (มีนาคม 2568):**
- [SEC อนุมัติ USDT + USDC](https://www.theasset.com/article/52449/thailand-s-sec-widens-ban-on-digital-assets-for-payments) เป็น approved cryptocurrencies สำหรับ digital asset transactions — **แต่ "approved for digital asset transactions" ≠ "approved as means of payment"**
- [Tourist Sandbox 15 ก.ค. 2568](https://www.sec.or.th/EN/Pages/News_Detail.aspx?SECID=8997) — เปิด sandbox ให้ foreign tourist แลก digital asset → THB ผ่าน licensed operator (ยังไม่ใช่การจ่ายตรง)

**Practical recommendation:**
- 📌 **ตัดสินใจ business model หลักก่อน:**
  - **Path A — USDT เป็น exchange to in-game token**: ขาย/ซื้อ utility token ด้วย USDT → น่าจะหลบประกาศ ทธ. 5/2565 ได้ (เพราะเป็น digital asset to digital asset)
  - **Path B — USDT เป็น direct payment for in-game item**: เสี่ยงสูง อาจต้อง avoid หรือใช้ off-shore entity
  - **Path C — เข้า Sandbox** ของ ก.ล.ต. ทำ specific use case ที่จำกัด user/scope
- 📌 **ถ้าเลือก Path A**: ต้อง **classify in-game item เป็น utility token** อย่างชัดเจน → ผูกกับ Concern #3 + #4 ทันที
- 📌 **Engage compliance counsel ตั้งแต่ pilot phase** — เรื่องนี้ regulator มอนิเตอร์เข้มงวด
- 📌 **อย่าใช้ภาษาว่า "จ่ายด้วย USDT"** ใน marketing — ใช้ "แลกเปลี่ยน" หรือ "ใช้ USDT เพื่อรับ token X" จะปลอดภัยกว่า

---

### Concern #3: NFT / Secondary Market Trading

**PRD เดิม:** Risk Med — "ขึ้นอยู่กับ classification ของ NFT"

**คำตอบ:** ✅ Risk level ถูก แต่ต้อง update นโยบาย Group 1/2 ปี 2567

**ฐานทางกฎหมาย:**
- พ.ร.ก. การประกอบธุรกิจสินทรัพย์ดิจิทัล พ.ศ. 2561 — มาตรา 3 นิยาม "ดิจิทัลโทเคน"
- [SEC framework ปี 2567](https://www.tilleke.com/insights/thailand-sec-amends-supervisory-framework-for-ready-to-use-utility-tokens/) — แบ่ง ready-to-use utility token เป็น 2 กลุ่ม
- [Baker McKenzie Guide 2025](https://www.bakermckenzie.com/en/-/media/files/insight/guides/2025/a-complete-guide-to-digital-asset-law-in-thailand-2025.pdf)

**Framework ปัจจุบัน:**

| Type | Examples | Listed บน DA Exchange? | ต้องผ่าน ICO Portal? |
|---|---|---|---|
| NFT collectible (ไม่มีสิทธิ์ใดๆ) | Art NFT, profile pic | ✗ (ไม่ใช่ digital token) | ✗ |
| **Group 1 utility token** | Loyalty points, concert ticket, **NFT with specific rights**, carbon credit, **น่าจะรวม in-game item** | ❌ ห้าม list | บางกรณีอาจไม่ต้อง |
| **Group 2 utility token** | DeFi governance, ecosystem token | ✅ list ได้ | ✅ |
| Investment token | Security-like | ✅ | ✅ บังคับ |

**สิ่งที่ Webshop GameFi ต้องพิจารณา:**

1. **In-game item ของคุณเข้า Group 1 มาก** เพราะ:
   - มีสิทธิ์เฉพาะ (ใช้ในเกม)
   - เป็น consumption goods
   - มี practical utility ตั้งแต่วันที่ออก
2. **Group 1 ห้าม list บน DA Exchange ที่ ก.ล.ต. กำกับ** → แต่ secondary market แบบ P2P ที่ไม่ใช่ "DA Exchange license" อาจทำได้
3. **SEC "hands-off" กับ GameFi** (per Tilleke 2024) — แค่ออก PSA แจ้งความเสี่ยงให้ผู้บริโภค → **ดี** สำหรับ pilot phase

**กรณีที่จะกลายเป็น "investment token" (Risk เพิ่ม):**
- ถ้า marketing ขายว่า "ซื้อ NFT เก็งกำไร"
- ถ้ามี yield/staking ใน secondary market
- ถ้า fractionalize NFT
- ถ้ามี return promise ใดๆ

**Practical recommendation:**
- 📌 **Classify in-game item เป็น Group 1 utility token (ready-to-use)** อย่างชัดเจน — ตั้งแต่ business model + tokenomics + whitepaper
- 📌 **Avoid marketing เรื่อง "investment / passive income / earn"** — focus ที่ "gameplay utility + ownership"
- 📌 **Secondary marketplace ไม่ใช่ "DA Exchange license"** เพราะ:
  - ไม่ match order ของ digital token ทั่วไป
  - จำกัด trading เฉพาะ in-game item ของ pilot games
  - ใช้ fixed-price / English auction (ไม่ใช่ order book)
- 📌 **ขอ no-action letter** จาก ก.ล.ต. ก่อน launch secondary market

---

### Concern #4: KYC Requirement

**PRD เดิม:** Risk Low (prototype) — "จำเป็นในขั้น production สำหรับ on/off-ramp + large tx"

**คำตอบ:** ✅ ถูก แต่ threshold ต้องระบุให้ชัด

**ฐานทางกฎหมาย:**
- พ.ร.บ. ป้องกันและปราบปรามการฟอกเงิน พ.ศ. 2542 + แก้ไขเพิ่มเติม
- AMLO กฎกระทรวง — กำหนด DABO เป็น "ผู้มีหน้าที่รายงาน" (reporting entity)
- ประกาศ ก.ล.ต. + แนวทาง AMLO อิงตาม FATF Recommendation 16 (travel rule)

**Threshold สำคัญ:**

| รายการ | Threshold | Note |
|---|---|---|
| KYC ต้องทำ | ทุกราย (ก่อนเปิดบัญชี) | NDID หรือ face-match กับบัตรประชาชน |
| รายงาน digital asset transaction | **≥ 100,000 THB** | กฎกระทรวง AMLO |
| Travel rule (originator/beneficiary info) | **≥ 50,000 THB equivalent** | FATF R.16 |
| รายงานธุรกรรมเงินสด | ≥ 2,000,000 THB | ปปง. 1-01 |
| เก็บ KYC record | ≥ 10 ปี หลังปิดบัญชี | |

**Practical recommendation:**
- 📌 **Prototype phase ไม่ต้องทำ real KYC** ก็ได้ (mock UI)
- 📌 **Production ต้องมี:**
  - e-KYC via NDID (cheap, ~30 THB/transaction)
  - MLRO designated officer
  - AMLO registration เป็น reporting entity
  - Sanctions screening (Chainalysis/TRM/Elliptic)
- 📌 **Tiered KYC** strategy:
  - Tier 1 (no KYC): cumulative tx < 50,000 THB
  - Tier 2 (basic): ≤ 200,000 THB/month
  - Tier 3 (full + EDD): no limit

---

### Concern #5: PDPA

**PRD เดิม:** Risk Low (prototype) — "Mandatory ในขั้น production"

**คำตอบ:** ✅ ถูก แต่ "Low" อาจ underestimate

**ฐานทางกฎหมาย:**
- **พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562** (Personal Data Protection Act, PDPA)
- มีผลบังคับเต็มรูปแบบ **1 มิถุนายน 2565** — ไม่มีข้อยกเว้นสำหรับ prototype
- บังคับใช้กับทุก data controller / processor ที่ process personal data ของ data subject ในไทย

**Practical recommendation:**
- 📌 **Prototype phase**: ถ้าใช้ user data จริง (อีเมล ชื่อ wallet address ที่ link กับ user identity) — **ก็ต้อง compliant ตั้งแต่วันแรก**
- 📌 **ต้องมี:**
  - Privacy Policy + Consent flow
  - Lawful basis สำหรับแต่ละ data processing
  - DPO (Data Protection Officer) — บังคับสำหรับ business ที่ process sensitive data
  - Data breach notification (72 ชั่วโมง)
  - Cross-border transfer agreement
- 📌 **Wallet address = personal data** ภายใต้ PDPA เพราะ identifiable + linked to person
- 📌 **บทลงโทษ** สูงสุด 5 ล้านบาท + อาญา + civil damages

---

### Concern #6: 15% WHT on Crypto Gain

**PRD เดิม:** Risk Low (prototype) — "จำเป็นใน secondary market settlement (production)"

**คำตอบ:** ✅ ถูก + de facto enforcement ผ่อนปรน

**ฐานทางกฎหมาย:**
- **ประมวลรัษฎากร มาตรา 40(4)(ฌ)** — กำไรจากการโอน cryptocurrency / digital token เป็นเงินได้พึงประเมิน
- **มาตรา 50(2)(จ)** — payer ต้องหัก ณ ที่จ่าย 15%
- **พ.ร.ฎ. ฉบับที่ 779 พ.ศ. 2566** — VAT exemption สำหรับ trade ผ่าน licensed DABO + loss offset ภายในปี

**สถานะ enforcement ปัจจุบัน:**
- Thai DABOs ปัจจุบัน **ไม่ได้หัก ณ ที่จ่าย 15% จริง** เพราะ cost basis คำนวณยาก
- ใช้ "annual aggregated reporting" แทน — DABO ส่งสรุปให้ user + รายงานสรรพากร
- User self-assess ในแบบ ภ.ง.ด. 90/91

**กรณี secondary market P2P (Webshop GameFi):**
- ถ้า platform เป็น "ผู้ให้บริการระบบ marketplace" และ user-to-user — **technically platform ไม่ใช่ "payer"** → ไม่ต้องหัก ณ ที่จ่าย
- แต่ user-seller ยัง**ต้องรายงาน gain ในแบบ ภ.ง.ด.** เอง
- ถ้า trade ไม่ผ่าน licensed DABO → **ไม่ได้ VAT exemption ตาม พ.ร.ฎ. 779** (อาจ VAT 7%)

**Practical recommendation:**
- 📌 **Prototype phase**: ระบุไว้ใน TOS ว่า user รับผิดชอบ tax filing เอง
- 📌 **Production phase**:
  - ออก "annual income certificate" ให้ user-seller (เลียนแบบ DABO)
  - Cooperate กับ Revenue Department ส่ง aggregate data
  - พิจารณาสมัครเป็น Thai DABO เพื่อได้ VAT exemption + loss offset
- 📌 **อย่าโฆษณาว่า "ปลอดภาษี"** เพราะไม่จริง — user มี tax liability เสมอ

---

## 🚨 GAP ที่ผมพบใน PRD — สำคัญมาก ไม่ได้ระบุไว้

### Gap A: ICO Portal Requirement สำหรับ Primary Market

ถ้า in-game item ถูก classify เป็น **digital token (ไม่ใช่แค่ NFT collectible)** การขาย Primary Market ให้ public อาจเข้าข่าย "การเสนอขายโทเคนดิจิทัลต่อประชาชน" (มาตรา 17-25 พ.ร.ก. 2561)

**ผลที่ตามมา:**
- ต้องผ่าน SEC-approved ICO Portal (เช่น Token X / Kubix / SE Digital)
- ต้องยื่น disclosure document
- Retail investor cap: 300,000 บาท / offering

**ทางออก:**
- ถ้า **classify เป็น "ready-to-use utility token"** อย่างชัดเจน → อาจได้รับ exemption (มาตรา 28)
- ถ้าเป็น **consumer product (ขายเป็นสินค้า ไม่ใช่ investment)** → อาจไม่เข้า ICO regime
- ขอ legal opinion ก่อน launch primary market

### Gap B: Foreign Operator / Geo-fencing

PRD ไม่ระบุว่า platform จดทะเบียนที่ไหน — ถ้าจด offshore แต่ target user ไทย → **เข้า Thai SEC jurisdiction** ยังไง

---

## 🎯 Updated Risk Matrix (PM แนะนำใส่ใน PRD v0.2)

| Concern | PRD v0.1 | **Updated** | Reason |
|---|---|---|---|
| Custodial wallet license | 🔴 High | 🔴 **High (with action plan)** | กรอบใหม่ ม.ค. 2568 — ต้องเลือก wallet model + อาจขอ no-action letter |
| USDT as means of payment | 🟠 Med | 🔴 **HIGH** | ประกาศ ทธ. 5/2565 ห้ามตรงๆ — ต้องเลือก business model ที่หลบ |
| NFT secondary trading | 🟠 Med | 🟠 **Med** | Group 1/2 framework + GameFi hands-off — manage classification |
| **ICO Portal (NEW)** | — | 🟠 **Med** | ถ้า in-game = digital token + sell to public อาจต้องผ่าน portal |
| KYC requirement | 🟡 Low | 🟡 **Low (prototype) / 🔴 High (prod)** | Production ต้องมี NDID + AMLO registration |
| PDPA | 🟡 Low | 🟠 **Med** | บังคับใช้แล้ว 1 มิ.ย. 2565 — ไม่มีข้อยกเว้น prototype |
| 15% WHT | 🟡 Low | 🟡 **Low** | De facto enforcement ผ่อนปรน + secondary market อาจไม่หักจริง |
| **Foreign operator (NEW)** | — | 🟠 **Med** | ต้องตัดสินใจ entity structure |

---

## ❓ คำถามที่ผม consultant ขอกลับ stakeholder (ส่งให้ PM)

ผมไม่กล้าตอบเอง — ขอ confirm 5 ข้อนี้:

1. **Wallet architecture** สุดท้ายจะเป็น Custodial / Non-custodial AA / Hybrid?
   → กระทบ Custodial Wallet license + ทุน 50M THB

2. **Entity structure** ของ Webshop GameFi:
   - จดบริษัทไทย (Bitkub Blockchain Technology) หรือ subsidiary ใหม่?
   - มี foreign entity ร่วมไหม?
   → กระทบ jurisdiction + license eligibility

3. **In-game item legal classification** (ผู้ออกต้องตัดสินก่อน issue):
   - เป็น "consumer good" ในเกม → minimal SEC regulation
   - เป็น "utility token Group 1" → ห้าม list บน DA Exchange แต่ secondary OK
   - เป็น "investment token" → ICO Portal mandatory
   → กระทบ ทุกอย่าง

4. **USDT business model:**
   - User จ่าย USDT → ได้รับ in-game token (digital-to-digital) — **path ปลอดภัยกว่า**
   - User จ่าย USDT → ได้รับ in-game item (digital-to-goods) — **อาจชน ทธ. 5/2565**
   - User แลก USDT → THB ใน platform — sandbox required

5. **Pilot scope:**
   - Internal alpha (BBT employees) — risk ต่ำมาก
   - Closed beta (invited users) — ต้อง consent + จำกัด user
   - Open beta to public — ต้องเริ่มทำ license/no-action letter จริงจัง
   → กระทบ timeline และ legal budget

---

## 📋 Immediate Next Actions (ผมแนะนำ PM)

| # | Action | Owner | Timeline |
|---|---|---|---|
| 1 | ตอบ 5 คำถามด้านบน | Stakeholder (BBT + Playpark) | This week |
| 2 | Engage licensed Thai compliance counsel (Baker McKenzie / Tilleke / Chandler MHM / Silk Legal) | PM coordinate | Next 2 weeks |
| 3 | Schedule pre-consultation กับ ก.ล.ต. (ก่อน file no-action letter) | Counsel | Within 1 month |
| 4 | Update PRD v0.2 — Section 9 (Compliance) ใส่ matrix ใหม่ + ICO Portal | PM | After Q1 above |
| 5 | Tokenomics + classification opinion จาก counsel | Crypto Researcher + Counsel | Before pilot launch |

---

## ⚖️ Sources

### Primary (SEC, BOT, Government)
- [ประกาศ ก.ล.ต. ที่ กธ. 19/2564 (ฉบับที่ 12) — กรอบ DABO + custodial wallet](https://dl.parliament.go.th/handle/20.500.13072/583869)
- [ก.ล.ต. ปรับเกณฑ์ DA Custodian ม.ค. 2568](https://www.infoquest.co.th/2025/462220)
- [ก.ล.ต. ปรับ NC + cold wallet 95% (2568)](https://www.infoquest.co.th/2025/480278)
- [BOT-SEC joint statement on digital asset payment ban (มี.ค. 2565)](https://www.bot.or.th/en/news-and-media/news/news-20220323.html)
- [SEC Thailand official notification list](https://www.sec.or.th/TH/Pages/LawandRegulations/DigitalAsset.aspx)

### Secondary (Law firms / Industry analysis)
- [Tilleke & Gibbins — Thailand SEC Amends Utility Token Framework (2024)](https://www.tilleke.com/insights/thailand-sec-amends-supervisory-framework-for-ready-to-use-utility-tokens/)
- [Baker McKenzie — Complete Guide to Digital Asset Law Thailand 2025](https://www.bakermckenzie.com/en/-/media/files/insight/guides/2025/a-complete-guide-to-digital-asset-law-in-thailand-2025.pdf)
- [In-House Community — Thai SEC Officially Prohibits Means-of-Payment](https://www.inhousecommunity.com/article/thai-sec-officially-prohibits-licensed-digital-asset-operators-facilitating-use-digital-assets-means-payment/)
- [The Asset — Thailand SEC widens ban on digital assets for payments (2025)](https://www.theasset.com/article/52449/thailand-s-sec-widens-ban-on-digital-assets-for-payments)
- [Global Legal Insights — Blockchain & Cryptocurrency Laws 2026 Thailand](https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/thailand/)

---

*ข้อมูลนี้เป็นข้อมูลทั่วไป ไม่ใช่คำปรึกษากฎหมาย — กฎอาจมีการแก้ไข โปรดตรวจสอบจากแหล่งทางการ (sec.or.th, bot.or.th) หรือปรึกษาที่ปรึกษากฎหมาย/คอมพลายแอนซ์ที่ได้รับใบอนุญาตก่อนดำเนินการ ก่อน launch production ของ Webshop GameFi ผมแนะนำเป็นอย่างยิ่งให้ engage Thai SEC-licensed counsel*
