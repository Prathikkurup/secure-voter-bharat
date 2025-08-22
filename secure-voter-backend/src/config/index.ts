import dotenv from 'dotenv';

dotenv.config();

const config = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/secure-voter',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  blockchain: {
    privateKey: process.env.BLOCKCHAIN_PRIVATE_KEY || 'your_private_key',
    contractAddress: process.env.CONTRACT_ADDRESS || 'your_contract_address',
    infuraUrl: process.env.INFURA_URL || 'https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID',
  },
};

export default config;