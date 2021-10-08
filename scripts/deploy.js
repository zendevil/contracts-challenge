async function main() {

     const ETHPool = await ethers.getContractFactory("ETHPool");
     const ethPool = await ETHPool.deploy([]);
    
     console.log("Greeter deployed to:", ethPool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
