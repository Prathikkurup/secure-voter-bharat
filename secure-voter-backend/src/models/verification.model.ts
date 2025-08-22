import { Schema, model } from 'mongoose';

const verificationSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    aadhaar: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{12}$/.test(v); // Validate Aadhaar format
            },
            message: props => `${props.value} is not a valid Aadhaar number!`
        }
    },
    voterId: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[A-Z]{3}\d{7}$/.test(v); // Validate Voter ID format
            },
            message: props => `${props.value} is not a valid Voter ID!`
        }
    },
    verificationStatus: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const Verification = model('Verification', verificationSchema);

export default Verification;