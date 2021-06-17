const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const ERC1155Rarible = artifacts.require('ERC1155Rarible');

module.exports = async function (deployer) {
  await deployProxy(ERC1155Rarible, ["MintGate", "MGNFT", "https://link.mintgate.app/api/token/", ""], { deployer, initializer: '__ERC1155Rarible_init' });
};

//0xEb9C17497264C2eF4b890444c98d51Db08191D93