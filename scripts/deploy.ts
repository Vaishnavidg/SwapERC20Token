import { ethers } from 'hardhat';
import { deployTokenINT } from './deployTokenINT';
import { deployTokenGMT } from './deployTokenGMT';

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const TokenINT = await deployTokenINT(); // Call the function to get TokenINT address
  console.log("Token address of TokenINT:", TokenINT);


  const TokenGMT = await deployTokenGMT(); // Call the function to get TokenGMT address
  console.log("Token address of TokenGMT:", TokenGMT);


  // const TokenI = await ethers.getContractFactory("TokenINT");
  // const tokenI = await TokenI.deploy();
  // const TokenINT = await tokenI.getAddress();
  // console.log("Token address of TokenINT:", await TokenINT );

  // const TokenG = await ethers.getContractFactory("TokenGMT");
  // const tokenG = await TokenG.deploy();
  // const TokenGMT = await tokenG.getAddress();
  // console.log("Token address of TokenGMT:",await TokenGMT );

  // const TokenS = await ethers.getContractFactory("SwapTokens");
  // const tokenS = await TokenS.deploy(await TokenINT,await TokenGMT);
  // const TokenSwap = await tokenS.getAddress();
  // console.log("Contract address:",TokenSwap );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//   PS E:\Impactility\BLOCKCHAIN\Swap_ERC20> npx hardhat run scripts/deploy.ts
// Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// Token address of TokenINT: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Token address of TokenGMT: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// Contract address: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
