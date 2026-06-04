# Mockup Assets

วาง image files ไว้ที่นี่ — mockup HTML จะ reference แบบ relative path

## Required files

| File | ที่ใช้ใน | คำอธิบาย |
|---|---|---|
| `kub-wallet-logo.png` | Concept 2, 2B | KUB Wallet (Bitkub NEXT) logo — รูปจริง 512×512 หรือสูงกว่า · PNG transparent หรือ white bg |

## วิธีใส่รูป

1. Save รูป logo เป็นไฟล์ ใช้ชื่อตามตารางด้านบน เช่น `kub-wallet-logo.png`
2. วางในโฟลเดอร์นี้
3. Refresh mockup HTML — รูปจะแสดงทุกที่ที่ใช้ logo (payment row, login modal, QR center, trust strip, etc.)

## หมายเหตุ

- ตอนนี้ HTML ใช้ `background-image: url('assets/kub-wallet-logo.png')` — ถ้ายังไม่มีไฟล์ จะแสดงเป็น blank/broken
- ขนาดที่ render: 14px - 96px (responsive) — ใช้ PNG ความละเอียดสูงพอ
