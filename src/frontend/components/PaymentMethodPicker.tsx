'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type Method = 'usdt' | 'card' | 'promptpay' | 'bank';

interface MethodOption {
  key: Method;
  icon: string;
  label: string;
  detail: (priceUsdt: number, priceThb: number) => string;
  recommended?: boolean;
}

const METHODS: MethodOption[] = [
  {
    key: 'usdt',
    icon: '💎',
    label: 'USDT (KUB Chain)',
    detail: (u) => `${u} USDT · ส่วนลด 3% สำหรับ USDT`,
    recommended: true,
  },
  {
    key: 'card',
    icon: '💳',
    label: 'Credit / Debit Card',
    detail: (_u, t) => `฿${t} · Visa, Mastercard, JCB`,
  },
  {
    key: 'promptpay',
    icon: '📱',
    label: 'QR PromptPay',
    detail: (_u, t) => `฿${t} · สแกนผ่าน mobile banking`,
  },
  {
    key: 'bank',
    icon: '🏦',
    label: 'Bank Transfer',
    detail: (_u, t) => `฿${t} · โอนแล้วยืนยันใน 5-15 นาที`,
  },
];

export function PaymentMethodPicker({
  priceUsdt,
  priceThb,
}: {
  priceUsdt: number;
  priceThb: number;
}) {
  const [selected, setSelected] = useState<Method>('usdt');

  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {METHODS.map((m) => {
          const isSelected = m.key === selected;
          return (
            <button
              key={m.key}
              type="button"
              onClick={() => setSelected(m.key)}
              className={cn(
                'flex items-center gap-4 rounded-xl border p-5 text-left transition',
                isSelected
                  ? 'border-2 border-kub-green bg-kub-green-light'
                  : 'border-border bg-white hover:bg-gray-50',
              )}
            >
              <span
                className={cn(
                  'grid h-6 w-6 place-items-center rounded-full border-2',
                  isSelected ? 'border-kub-green' : 'border-gray-300',
                )}
              >
                {isSelected ? <span className="h-3 w-3 rounded-full bg-kub-green" /> : null}
              </span>
              <span className="text-2xl">{m.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold">{m.label}</h4>
                  {m.recommended ? (
                    <span className="inline-flex items-center rounded bg-kub-green px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-kub-dark">
                      ⭐ Recommended
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-muted">{m.detail(priceUsdt, priceThb)}</p>
              </div>
              <span className="text-xl text-gray-400">›</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-full bg-kub-green py-4 text-lg font-bold text-kub-dark hover:opacity-90"
        // No-op — wire to ShopController createIntent + on-chain tx in real impl.
        onClick={() => {
          /* TODO: POST /api/v1/games/:gameId/shop/purchase/intent */
        }}
      >
        {selected === 'usdt'
          ? `ซื้อด้วย USDT · ${priceUsdt} USDT (≈ ฿${priceThb})`
          : `ดำเนินการต่อ · ฿${priceThb}`}
      </button>
    </>
  );
}
