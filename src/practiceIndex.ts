import * as CryptoJS from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previouseHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previouseHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previouseHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previouseHash = previouseHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '2020202020', '', 'HI', 1234556);
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const nextTimestamp: number = getNewTimeStamp();
  const nextHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    nextTimestamp,
    data
  );

  const newBlock = new Block(
    newIndex,
    nextHash,
    previousBlock.hash,
    data,
    nextTimestamp
  );

  blockchain.push(newBlock);

  return newBlock;
};

console.log(createNewBlock('hi'), createNewBlock('good bye'));

export {};
