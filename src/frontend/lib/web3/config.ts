import { createConfig, http } from 'wagmi';
import type { Chain } from 'viem';

/**
 * KUB Chain (Bitkub Chain) TESTNET — chainId 25925.
 *
 * Mainnet (chainId 96) is intentionally NOT defined here. Production launch is gated by
 * Risk Acceptance sign-off (PRD v0.2 §11.3). When unblocked, add a mainnet Chain object
 * to this file under a separate guarded export.
 */
export const kubTestnet: Chain = {
  id: 25925,
  name: 'Bitkub Chain Testnet',
  nativeCurrency: { name: 'tKUB', symbol: 'tKUB', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-testnet.bitkubchain.io'] },
    public: { http: ['https://rpc-testnet.bitkubchain.io'] },
  },
  blockExplorers: {
    default: { name: 'BKC Testnet Scan', url: 'https://testnet.bkcscan.com' },
  },
  testnet: true,
};

export const wagmiConfig = createConfig({
  chains: [kubTestnet],
  transports: {
    [kubTestnet.id]: http(
      process.env.NEXT_PUBLIC_KUB_RPC_URL ?? 'https://rpc-testnet.bitkubchain.io',
    ),
  },
  ssr: true,
});

export const ACTIVE_CHAIN_ID = Number.parseInt(
  process.env.NEXT_PUBLIC_KUB_CHAIN_ID ?? '25925',
  10,
);

if (ACTIVE_CHAIN_ID !== kubTestnet.id) {
  // Hard guardrail: scaffold must never accidentally point at mainnet.
  // eslint-disable-next-line no-console
  console.warn(
    `[web3/config] NEXT_PUBLIC_KUB_CHAIN_ID=${ACTIVE_CHAIN_ID} but only testnet (25925) is wired up.`,
  );
}
