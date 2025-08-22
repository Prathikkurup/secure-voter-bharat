# Secure Voter Bharat Backend

This project is a backend implementation for the Secure Voter Bharat application, which integrates user verification with blockchain technology. It is built using Node.js, Express, and MongoDB, and it interacts with an Ethereum smart contract for managing user verification records.

## Features

- User registration and authentication with JWT.
- Submission and retrieval of user verification data (Aadhaar, Voter ID).
- Integration with Ethereum blockchain for storing and querying verification status.
- Error handling and input validation.

## Project Structure

```
secure-voter-backend
├── src
│   ├── index.ts               # Entry point of the application
│   ├── app.ts                  # Express app configuration
│   ├── config/index.ts         # Configuration settings
│   ├── controllers             # Controllers for handling requests
│   ├── routes                  # Route definitions
│   ├── models                  # MongoDB models
│   ├── middleware              # Middleware for authentication and error handling
│   ├── services                # Business logic services
│   ├── utils                   # Utility functions
│   └── types                   # TypeScript types and interfaces
├── contracts                   # Solidity smart contracts
│   └── Verification.sol        # Smart contract for user verification
├── scripts                     # Deployment scripts
│   └── deploy.ts               # Script for deploying the smart contract
├── hardhat.config.ts           # Hardhat configuration file
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
├── .env.example                # Example environment variables
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Ethereum wallet (for deploying the smart contract)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd secure-voter-backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and fill in the required environment variables.

### Running the Application

1. Start the MongoDB server (if using a local instance).
2. Run the application:

   ```
   npm run dev
   ```

### API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT.
- **POST /api/verification**: Submit user verification data.
- **GET /api/verification/:id**: Retrieve verification status by user ID.

### Blockchain Integration

The application interacts with an Ethereum smart contract to store and retrieve user verification records. Ensure you have the necessary Ethereum testnet keys and configurations in your `.env` file.

### Deployment

To deploy the smart contract, run the following command:

```
npx hardhat run scripts/deploy.ts --network goerli
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.