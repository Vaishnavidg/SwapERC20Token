import { expect } from "chai";
import { ethers } from "hardhat";

describe("TokenGMT contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TokenGMT");
        const hardhatToken = await Token.deploy();
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    })
  
    it("Should transfer tokens between two accounts", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("TokenGMT");
        const hardhatToken = await Token.deploy();
        await hardhatToken.transfer(owner.address,addr1.address, 50);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
    })
})
