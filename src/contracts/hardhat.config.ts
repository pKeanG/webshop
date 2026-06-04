import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';
const KUB_TESTNET_RPC =
  process.env.KUB_TESTNET_RPC ?? 'https://rpc-testnet.bitkubchain.io';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: { enabled: true, runs: 200 },
      viaIR: false,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    // KUB Chain (Bitkub Chain) TESTNET — chainId 25925
    // DO NOT add mainnet config until Risk Acceptance (PRD v0.2 §11.3) is signed.
    bitkubTestnet: {
      url: KUB_TESTNET_RPC,
      chainId: 25925,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v6',
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true',
  },
};

export default config;
