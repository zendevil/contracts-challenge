const { expect } = require("chai");

describe("ETHPool contract", function () {
  it("ETHPool contract", async function () {
      const signers = await ethers.getSigners();
      const ETHPool = await ethers.getContractFactory("ETHPool");
      const ethPool = await ETHPool.deploy([]);
    
      ethPool.connect(signers[0]).deposit({value: "1000000000000000"}) // 1 * 10^15 wei
      ethPool.connect(signers[1]).deposit({value: "2000000000000000"}) // 2 * 10^15 wei
      ethPool.connect(signers[2]).deposit({value: "3000000000000000"}) // 3 * 10^15 wei

      expect(await ethPool.connect(signers[0]).getDepositInPool()).to.equal(1000000000000000);
      expect(await ethPool.connect(signers[1]).getDepositInPool()).to.equal(2000000000000000);
      expect(await ethPool.connect(signers[2]).getDepositInPool()).to.equal(3000000000000000);
    
 
      ethPool.depositReward({value: "10000000000000000"}); //10^16 wei
      
      expect(await ethPool.allDeposits()).to.equal("6000000000000000")


      expect(await ethPool.connect(signers[0]).getRewardInPool()).to.equal("1666666666666666")
    
      balanceBefore = await signers[0].getBalance();

      await ethPool.withdrawReward("1666666666666666");

      
      // wouldn't be exactly equal due to gas costs
      expect(await signers[0].getBalance()).to.be.closeTo(ethers.BigNumber.from(balanceBefore).add(1666666666666666), 100000000000000);
  });
});
