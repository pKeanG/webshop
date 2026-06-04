/**
 * Wallet abstraction — non-custodial Account Abstraction (PRD v0.2 §4.1).
 *
 * INTERFACE ONLY — no Privy SDK calls are made here yet. The actual integration plugs
 * Privy / Web3Auth into the `WalletProvider` shape below. Backend never sees the private key.
 */

export interface ConnectedWallet {
  /** Smart-wallet (ERC-4337) address deployed on KUB Chain testnet. */
  address: `0x${string}`;
  /** Provider that owns the signer (passkey, social, etc.) */
  provider: 'privy' | 'web3auth' | 'custom-aa';
  /** Chain id the wallet is currently scoped to. */
  chainId: number;
}

export interface WalletProvider {
  /** Trigger login + on-demand smart-wallet deployment (sponsored gas via paymaster). */
  connect(): Promise<ConnectedWallet>;
  /** Disconnect session. */
  disconnect(): Promise<void>;
  /** Get current wallet, or null if not connected. */
  getCurrent(): Promise<ConnectedWallet | null>;
  /** Sign an arbitrary message — used for backend SIWE/JWT issuance. */
  signMessage(message: string): Promise<`0x${string}`>;
}

/**
 * No-op placeholder. Replace with a real Privy implementation in
 * `lib/web3/providers/privy.ts` once the Privy app id is provisioned.
 */
export const noopWalletProvider: WalletProvider = {
  async connect() {
    throw new Error('[wallet] connect() not implemented — wire up Privy/Web3Auth.');
  },
  async disconnect() {
    /* noop */
  },
  async getCurrent() {
    return null;
  },
  async signMessage() {
    throw new Error('[wallet] signMessage() not implemented.');
  },
};
