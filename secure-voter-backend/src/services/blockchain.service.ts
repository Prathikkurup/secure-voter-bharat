import { ethers } from 'ethers';
import { config } from '../config';
import VerificationContract from '../../artifacts/contracts/Verification.sol/Verification.json';

export class BlockchainService {
    private provider: ethers.providers.JsonRpcProvider;
    private signer: ethers.Signer;
    private contract: ethers.Contract;

    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(config.BLOCKCHAIN_RPC_URL);
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(config.CONTRACT_ADDRESS, VerificationContract.abi, this.signer);
    }

    async addVerifiedUser(userId: string, voterId: string, aadhaarId: string): Promise<void> {
        try {
            const tx = await this.contract.addVerifiedUser(userId, voterId, aadhaarId);
            await tx.wait();
        } catch (error) {
            throw new Error(`Failed to add verified user: ${error.message}`);
        }
    }

    async getVerificationStatus(userId: string): Promise<any> {
        try {
            const status = await this.contract.getVerificationStatus(userId);
            return status;
        } catch (error) {
            throw new Error(`Failed to get verification status: ${error.message}`);
        }
    }
}