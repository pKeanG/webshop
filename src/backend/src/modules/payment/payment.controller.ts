import { Body, Controller, Post } from '@nestjs/common';
import { UsdtPaymentService } from './usdt/usdt.service';
import { OmisePaymentService } from './omise/omise.service';
import { PromptPayPaymentService } from './promptpay/promptpay.service';

type PaymentMethod = 'usdt' | 'omise' | 'promptpay' | 'bank-transfer';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly usdt: UsdtPaymentService,
    private readonly omise: OmisePaymentService,
    private readonly promptpay: PromptPayPaymentService,
  ) {}

  @Post('charge')
  charge(@Body() body: { method: PaymentMethod; orderId: string; amount: number }) {
    switch (body.method) {
      case 'usdt':
        return this.usdt.createCharge(body.orderId, body.amount);
      case 'omise':
        return this.omise.createCharge(body.orderId, body.amount);
      case 'promptpay':
        return this.promptpay.createCharge(body.orderId, body.amount);
      default:
        return { error: 'unsupported method (scaffold)' };
    }
  }
}
