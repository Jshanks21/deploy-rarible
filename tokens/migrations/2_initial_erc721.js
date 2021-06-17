const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const ERC721Rarible = artifacts.require('ERC721Rarible');

module.exports = async function (deployer) {
  await deployProxy(ERC721Rarible, ["MintGate", "MGNFT", "https://link.mintgate.app/api/token/", ""], { deployer, initializer: '__ERC721Rarible_init' });
};