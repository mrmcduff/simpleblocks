const Blockchain = require('./simpleChain').Blockchain;
const Block = require('./simpleChain').Block;

const blockchain = new Blockchain();
console.log(blockchain);

blockchain.addBlock(new Block('foo'));
console.log(blockchain);
