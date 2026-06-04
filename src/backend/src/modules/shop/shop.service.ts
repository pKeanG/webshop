import { Injectable, NotImplementedException } from '@nestjs/common';

/**
 * Primary market (Webshop) — Playpark-issued items.
 *
 * STUB ONLY. Production flow (per PRD v0.2 §4 + agent spec §B):
 *   1. POST /purchase/intent → create pending order in DB, return on-chain tx data
 *      (USDT transfer target = WrapperToken contract for Group 2 path).
 *   2. Backend indexer confirms USDT receipt + WrapperToken mint.
 *   3. User calls WrapperToken.redeemForItem on FE → GameItem1155 mints.
 *   4. Order marked SUCCESS, receipt + audit log emitted.
 *
 * For non-crypto rails (Omise/PromptPay/Bank), backend signs + mints directly
 * after webhook confirmation (custodial mint, paymaster pays gas).
 */
@Injectable()
export class ShopService {
  async listItems(_gameId: string) {
    throw new NotImplementedException('ShopService.listItems not implemented (scaffold).');
  }

  async getItem(_gameId: string, _itemId: string) {
    throw new NotImplementedException('ShopService.getItem not implemented (scaffold).');
  }

  async createPurchaseIntent(
    _gameId: string,
    _payload: { itemId: string; method: string; quantity: number },
  ) {
    throw new NotImplementedException(
      'ShopService.createPurchaseIntent not implemented (scaffold).',
    );
  }
}
