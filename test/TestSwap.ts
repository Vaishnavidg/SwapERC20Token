import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");


describe("SwapTokens contract", function () {
    // // let owner: Signer;
    let OwnerI: Signer;
    let OwnerG: Signer;
    let TokenINT: any; // Import TokenINT contract
    let TokenGMT: any; // Import TokenGMT contract
    let SwapTokens: any; // Import SwapTokens contract

    async function deployTokenFixture() {
        // [OwnerI, OwnerI] = await ethers.getSigners();
        // Deploy TokenINT contract
        const TokenINTFactory = await ethers.getContractFactory("TokenINT");
        TokenINT = await TokenINTFactory.deploy();
       
        // Deploy TokenGMT contract
        const TokenGMTFactory = await ethers.getContractFactory("TokenGMT");
        TokenGMT = await TokenGMTFactory.deploy();
        // OwnerG = TokenGMT.owner();
        // console.log(OwnerG);

        // Deploy SwapTokens contract
        // const SwapTokensFactory = await ethers.getContractFactory("SwapTokens");
        // Deploy SwapTokens contract
        const SwapTokensFactory = await ethers.getContractFactory("SwapTokens");
        SwapTokens = await SwapTokensFactory.deploy(TokenINT.address,TokenGMT.address);

        return {TokenINT,TokenGMT,SwapTokens};
    }
   

    it("should swap tokens between two accounts", async function () {
        // Transfer some tokens to SwapTokens contract
        // await TokenINT.transfer(SwapTokens.address, 100);
        // await TokenGMT.transfer(SwapTokens.address, 100);
        const {TokenINT,TokenGMT,SwapTokens} = await loadFixture(deployTokenFixture);
        // Swap tokens
        // const OwnerI = TokenINT.address;
        // console.log(OwnerI);
        // const OwnerG = TokenGMT.address;
        console.log(SwapTokens);
        await SwapTokens.swap(TokenINT.address,TokenGMT.address,50);
        // await SwapTokens.swap(OwnerI,OwnerG,50);
        expect(await SwapTokens.connect(OwnerI).swap(OwnerI,OwnerG,50)).to.equal(true);
        // expect(await SwapTokens.swap(OwnerI,OwnerG,50)).to.equal(true);
        // // Check balances after swap
        // expect(await TokenINT.balanceOfGMT(TokenINT.address)).to.equal(50);
        // expect(await TokenGMT.balanceOf(OwnerI)).to.equal(50);
    });
});
