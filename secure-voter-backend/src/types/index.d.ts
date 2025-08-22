export interface User {
    id: string;
    aadhaar: string;
    voterId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Verification {
    id: string;
    userId: string;
    status: 'pending' | 'verified' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}

export interface JwtPayload {
    id: string;
    aadhaar: string;
    voterId: string;
}