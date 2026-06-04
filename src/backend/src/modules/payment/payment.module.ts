import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { UsdtPaymentService } from './usdt/usdt.service';
import { OmisePaymentService } from './omise/omise.service';
import { PromptPayPaymentService } from './promptpay/promptpay.service';

@Module({
  controllers: [PaymentController],
  providers: [UsdtPaymentService, OmisePaymentService, PromptPayPaymentService],
  exports: [UsdtPaymentService, OmisePaymentService, PromptPayPaymentService],
})
export class PaymentModule {}
