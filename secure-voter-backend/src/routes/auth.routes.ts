import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

export default router;