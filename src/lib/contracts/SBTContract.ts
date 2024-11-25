import { ethers } from 'ethers';

const SBT_ABI = [
  // Add your ERC1155 SBT contract ABI here
];

export class SBTContract {
  private contract: ethers.Contract;

  constructor(provider: ethers.Provider, contractAddress: string) {
    this.contract = new ethers.Contract(contractAddress, SBT_ABI, provider);
  }

  async mintSBT(to: string, tokenId: number, data: string) {
    return await this.contract.mint(to, tokenId, data);
  }

  async verifySBT(tokenId: number) {
    return await this.contract.verify(tokenId);
  }
}