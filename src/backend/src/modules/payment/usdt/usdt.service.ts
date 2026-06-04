import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * USDT (KAP20 on KUB Chain) payment flow — SCAFFOLD ONLY.
 *
 * Per PRD v0.2 §4.4 + §11.2 R1: USDT direct payment is HIGH risk under ประกาศ ก.ต.ท. ทธ. 5/2565.
 * Mitigation: user buys the Group 2 wrapper token with USDT, then redeems for in-game item
 * (two-step exchange — see {IWrapperToken}). Real implementation gated on:
 *   - Counsel opinion on means-of-payment exposure
 *   - Risk Acceptance sign-off (PRD §11.3)
 */
@Injectable()
export class UsdtPaymentService {
  async createCharge(_orderId: string, _amountUsdt: number) {
    throw new NotImplementedException('UsdtPaymentService.createCharge not implemented (scaffold).');
  }

  async confirmOnChainReceipt(_txHash: string) {
    throw new NotImplementedException(
      'UsdtPaymentService.confirmOnChainReceipt not implemented (scaffold).',
    );
  }
}
