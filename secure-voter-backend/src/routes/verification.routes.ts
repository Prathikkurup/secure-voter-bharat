import { Router } from 'express';
import { VerificationController } from '../controllers/verification.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const verificationController = new VerificationController();

// Route to submit user verification data
router.post('/submit', authMiddleware, verificationController.submitVerificationData);

// Route to retrieve verification status
router.get('/status/:userId', authMiddleware, verificationController.getVerificationStatus);

export default router;