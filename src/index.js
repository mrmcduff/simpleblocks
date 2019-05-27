const { Blockchain } = require('./simpleChain');
const { Block } = require('./block');

// const blockchain = new Blockchain();
// console.log(blockchain);

// blockchain.addBlock(new Block('foo'));
// console.log(blockchain);

const block = new Block({ foo: 'foo' });
block.validate().then((value) => {
    console.log(value);
});

console.log(block.body);
block.getBData().then(data => {
    console.log(data);
});
