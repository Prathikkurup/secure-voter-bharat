import { Request, Response } from 'express';
import { VerificationService } from '../services/verification.service';

export class VerificationController {
    private verificationService: VerificationService;

    constructor() {
        this.verificationService = new VerificationService();
    }

    public submitVerificationData = async (req: Request, res: Response): Promise<void> => {
        try {
            const { aadhaar, voterId } = req.body;
            const result = await this.verificationService.saveVerificationData(aadhaar, voterId);
            res.status(201).json({ message: 'Verification data submitted successfully', data: result });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting verification data', error: error.message });
        }
    };

    public getVerificationStatus = async (req: Request, res: Response): Promise<void> => {
        try {
            const { userId } = req.params;
            const status = await this.verificationService.getVerificationStatus(userId);
            res.status(200).json({ message: 'Verification status retrieved successfully', status });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving verification status', error: error.message });
        }
    };
}