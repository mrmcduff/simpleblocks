const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(data) {
        this.hash = '';
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = '';
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
        this.addBlock(new Block('First block in the chain - Genesis block'));
    }

    addBlock(block) {
        block.height = this.chain.length
        block.time = (new Date()).getTime().toString().slice(0, -3);
        if (this.chain.length > 0) {
            block.previousBlockHash =
                this.chain[this.chain.length - 1].hash;
        }
        block.hash = SHA256(JSON.stringify(block)).toString();
        this.chain.push(block);
    }
}

module.exports = { Block, Blockchain }
