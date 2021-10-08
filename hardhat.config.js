/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
   networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/jf_RW90fJV4upBJYq89e--PDvY-79NIb`,
      accounts: [``],
    },
   }
};
