import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    aadhaar: string;
    voterId: string;
    verificationStatus: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema = new Schema({
    aadhaar: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    voterId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    verificationStatus: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;