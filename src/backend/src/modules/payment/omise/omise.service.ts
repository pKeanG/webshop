import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * Omise (Credit / Debit Card) — SCAFFOLD STUB.
 *
 * Hard constraint: do NOT init the real Omise SDK in this scaffold. Real implementation will:
 *   1. Charge via Omise tokenized payload (FE-side tokenization).
 *   2. Handle 3DS redirect.
 *   3. Webhook → confirm + mark Transaction SUCCESS in DB.
 *   4. Trigger backend-signed mint (custodial mint for fiat rails, paymaster pays gas).
 */
@Injectable()
export class OmisePaymentService {
  async createCharge(_orderId: string, _amountThb: number) {
    throw new NotImplementedException(
      'OmisePaymentService.createCharge not implemented (scaffold).',
    );
  }

  async handleWebhook(_payload: unknown) {
    throw new NotImplementedException(
      'OmisePaymentService.handleWebhook not implemented (scaffold).',
    );
  }
}
