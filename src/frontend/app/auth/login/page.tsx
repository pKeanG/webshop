// Login page — ported from mockup-v0.1.html section #02.
// STUB ONLY: no real auth. Production hooks into Privy passkey + POST /auth/login.

export default function LoginPage() {
  return (
    <section className="px-6 py-16 md:px-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-[320px_1fr]">
        {/* Side panel */}
        <aside className="rounded-2xl bg-kub-darker p-8 text-white">
          <h2 className="text-2xl font-extrabold text-kub-green">PlayID</h2>
          <p className="mt-2">บัญชีเดียว เข้าได้ทุกเกม</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li>✓ Wallet สร้างให้อัตโนมัติ (non-custodial)</li>
            <li>✓ รับเงินคืนเป็น USDT</li>
            <li>✓ Trade ระหว่างผู้เล่นได้</li>
            <li>✓ ปลอดภัยด้วย KUB Chain</li>
          </ul>
        </aside>

        {/* Login form */}
        <div className="max-w-lg rounded-2xl border border-border bg-white p-10">
          <h2 className="text-2xl font-bold">ยินดีต้อนรับกลับมา</h2>
          <p className="mt-1 text-muted">เข้าสู่ระบบด้วย PlayID เพื่อช้อปไอเทม</p>

          <form
            className="mt-6"
            // Submit handler intentionally absent — wire to React Hook Form + apiClient.
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-sm font-medium">อีเมล</label>
            <input
              className="mt-2 w-full rounded-lg border border-border bg-gray-50 px-4 py-3 text-sm"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
            />

            <div className="mt-4 flex justify-between">
              <label className="text-sm font-medium">รหัสผ่าน</label>
              <a className="text-sm font-medium text-blue-500">ลืมรหัสผ่าน?</a>
            </div>
            <input
              className="mt-2 w-full rounded-lg border border-border bg-gray-50 px-4 py-3 text-sm"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-kub-green py-3 font-semibold text-kub-dark hover:opacity-90"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-gray-400">
            <div className="h-px flex-1 bg-border" />
            หรือ
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Facebook', 'LINE', 'Apple'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="rounded-lg border border-border py-3 text-sm font-medium hover:bg-gray-50"
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="mt-6 text-center text-sm font-medium text-blue-500">
            ยังไม่มีบัญชี? สมัคร PlayID ฟรี →
          </p>
        </div>
      </div>
    </section>
  );
}
