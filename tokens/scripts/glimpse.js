const os = require('os');

console.log('os', os.homedir())
console.log(`Loading etherscan key from ${os.homedir() + "/.ethereum/etherscan.json"}`);
apiKey = require(os.homedir() + "/.ethereum/etherscan.json").apiKey;
console.log("loaded etherscan api key", apiKey);