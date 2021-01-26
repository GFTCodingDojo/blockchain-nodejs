const blockchain = require('./blockchain').blockchain;

const block = {
        index: 0,
        previousHash: null,
        data: { valor: 100},
    }

test('Criar Bloco', () => {
    const bloco = blockchain.criarBloco(block);
    expect(bloco).toBeTruthy();
});

test('Valida dados', () => {
    const bloco = blockchain.criarBloco(block);
    expect(bloco.data).toBeTruthy();
});

test('Valida se criou o hash', () => {
    const bloco = blockchain.criarBloco(block);
    expect(bloco.hash).toBeTruthy();
})

/* Blockchain */

test('Criar Blockchain', () => {
    const bc = blockchain.criarBlockchain();
    expect(bc).toBeTruthy();
});

test('Adicionar Bloco na Blockchain', () => {
    const bc = blockchain.criarBlockchain();
    const bloco = blockchain.criarBloco(block);
    bc.adicionarBloco(bloco);
    expect(bc.blocos).toContain(bloco);
});

test('Obter ultimo bloco', () => {
    const bc = blockchain.criarBlockchain();
    const bloco1 = blockchain.criarBloco(block);
    const bloco2 = blockchain.criarBloco(block);
    bc.adicionarBloco(bloco1);
    bc.adicionarBloco(bloco2);
    expect(bc.obterUltimoBloco()).toBe(bloco2);
});

test('Hash penúltimo bloco igual previousHash último bloco', () => {
    const bc = blockchain.criarBlockchain();

    const bloco1 = blockchain.criarBloco(block);
    const bloco2 = blockchain.criarBloco(block);

    bc.adicionarBloco(bloco1);
    bc.adicionarBloco(bloco2);

    expect(bloco1.hash).toBe(bloco2.previousHash);
});
