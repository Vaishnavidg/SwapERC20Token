import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const INFURA_API_KEY: string = process.env.INFURA_API_KEY || '';
const PRIVATE_KEY_ACCOUNT1: string = process.env.PRIVATE_KEY_ACCOUNT1 || '';
const PRIVATE_KEY_ACCOUNT2: string = process.env.PRIVATE_KEY_ACCOUNT2 || '';
const POLYSCAN_API_KEY: string = process.env.POLYSCAN_API_KEY || '';

if (!INFURA_API_KEY || !PRIVATE_KEY_ACCOUNT1 ||!PRIVATE_KEY_ACCOUNT2|| !POLYSCAN_API_KEY) {
  throw new Error("Please provide values for INFURA_API_KEY, PRIVATE_KEY, and POLYSCAN_API_KEY in your .env file.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // polynetwork: {
    //   url: `http://20.235.255.126:8123/`,
    //   accounts: [PRIVATE_KEY],
    // },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY_ACCOUNT1]
    },
    mumbai2: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY_ACCOUNT2]
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYSCAN_API_KEY
    }
  }
};

export default config;

// PS E:\Impactility\BLOCKCHAIN\Swap_ERC20> npx hardhat run scripts/deployTokenINT.ts --network mumbai
// Deploying contracts with the account: 0x797d7BC5c5C37B3f569535484B9be7BD62b86305
// Token address of TokenINT: 0x2C17c120c0b9806F9E8B60Abf378C44538CFa7B6


// PS E:\Impactility\BLOCKCHAIN\Swap_ERC20> npx hardhat run scripts/deployTokenGMT.ts --network mumbai2
// Deploying contracts with the account: 0x35C6e706EE23CD898b2C15fEB20f0fE726E734D2
// Token address of TokenGMT: 0x4B5f49efF0e0Fa117E321B88Cd8B035d3F019064