import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * Non-custodial AA wallet flow (PRD v0.2 §4.1):
 *   1. On user signup, frontend uses Privy / passkey to create an EOA-equivalent key.
 *   2. Backend deploys a smart-wallet contract on KUB testnet (sponsored by paymaster).
 *   3. Backend stores mapping (userId ↔ wallet address) — NEVER the private key.
 *
 * STUB ONLY — real impl pending counsel opinion that this architecture does not constitute
 * custody (see PRD v0.2 §4.1 "Verification gate").
 */
@Injectable()
export class WalletService {
  async getByUserId(_userId: string): Promise<{ address: string }> {
    throw new NotImplementedException('WalletService.getByUserId not implemented (scaffold).');
  }

  async createForUser(_userId: string): Promise<{ address: string }> {
    throw new NotImplementedException('WalletService.createForUser not implemented (scaffold).');
  }
}
