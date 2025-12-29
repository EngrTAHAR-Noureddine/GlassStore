import { Module } from '@nestjs/common';
import { PaymentsService } from './payments/payments.service';

@Module({
  providers: [PaymentsService]
})
export class PaymentsModule {}
