import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config';

export class AuthService {
    async register(userData: { email: string; password: string }) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new User({
            email: userData.email,
            password: hashedPassword,
        });
        return await user.save();
    }

    async login(userData: { email: string; password: string }) {
        const user = await User.findOne({ email: userData.email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(userData.password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = this.generateToken(user._id);
        return { user, token };
    }

    private generateToken(userId: string) {
        return jwt.sign({ id: userId }, config.JWT_SECRET, { expiresIn: '1h' });
    }
}