import { VerificationModel } from '../models/verification.model';
import { UserModel } from '../models/user.model';
import { BlockchainService } from './blockchain.service';

export class VerificationService {
    private blockchainService: BlockchainService;

    constructor() {
        this.blockchainService = new BlockchainService();
    }

    async submitVerificationData(userId: string, aadhaar: string, voterId: string) {
        try {
            const verificationData = await VerificationModel.create({
                userId,
                aadhaar,
                voterId,
                status: 'Pending',
            });

            await this.blockchainService.addVerificationRecord(verificationData);

            return verificationData;
        } catch (error) {
            throw new Error(`Error submitting verification data: ${error.message}`);
        }
    }

    async getVerificationStatus(userId: string) {
        try {
            const verificationData = await VerificationModel.findOne({ userId });

            if (!verificationData) {
                throw new Error('Verification data not found');
            }

            const blockchainStatus = await this.blockchainService.getVerificationStatus(userId);

            return {
                ...verificationData.toObject(),
                blockchainStatus,
            };
        } catch (error) {
            throw new Error(`Error retrieving verification status: ${error.message}`);
        }
    }
}