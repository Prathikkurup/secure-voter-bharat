import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import app from './app';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await mongoose.connect(config.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

startServer();