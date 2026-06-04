import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * PromptPay QR — SCAFFOLD STUB.
 *
 * Provider TBD (Omise PromptPay / SCB Easy / KBank). Flow:
 *   1. Create a QR payload (EMVCo) for the THB amount.
 *   2. Poll/webhook for bank confirmation.
 *   3. On confirm → mint item (custodial path).
 */
@Injectable()
export class PromptPayPaymentService {
  async createCharge(_orderId: string, _amountThb: number) {
    throw new NotImplementedException(
      'PromptPayPaymentService.createCharge not implemented (scaffold).',
    );
  }
}
