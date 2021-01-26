const hashSHA256 = require("crypto-js/sha256");

class Bloco {
    /* index;
    timestamp​;
    hash;
    previousHash;
    data;​ */

    constructor({ index = 0, previousHash = null, data='Bloco inicial' }) {
        this.index = index;
        this.timestamp = new Date();
        this.hash = this.gerarHash();
        this.previousHash = previousHash;
        this.data = data;
    }

    gerarHash() {
        return hashSHA256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString();
    }
}

class Blockchain {
    constructor() {
        this.blocos = [new Bloco({})];
    }

    adicionarBloco(bloco) {
        const ultimoBloco = this.obterUltimoBloco();
        const previousHash = ultimoBloco.hash;

        bloco.index = ultimoBloco.index++;
        bloco.previousHash = previousHash;

        this.blocos.push(bloco);
    }

    obterUltimoBloco() {
        return this.blocos[this.blocos.length - 1];
    }
}


function criarBloco(block) {
    return new Bloco( block );
}


function criarBlockchain() {
    return new Blockchain();
}

module.exports.blockchain = {
    criarBloco,
    criarBlockchain
};