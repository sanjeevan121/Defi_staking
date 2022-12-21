const hre = require("hardhat");
const { ethers} = require("hardhat");

async function main() {
  [signer1, signer2] = await hre.ethers.getSigners();
  
  const Staking = await ethers.getContractFactory("Staking", signer1);
  const staking = await Staking.deploy({value: 1000});
  
  await staking.deployed();
  
  console.log(
    `Staking  deployed to :  ${staking.address} by : ${signer1.address} `
  );
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
