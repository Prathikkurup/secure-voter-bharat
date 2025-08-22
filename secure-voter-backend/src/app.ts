import express from 'express';
import { json } from 'body-parser';
import { connectDB } from './config';
import { errorHandler } from './middleware/error.middleware';
import authRoutes from './routes/auth.routes';
import verificationRoutes from './routes/verification.routes';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/verification', verificationRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;