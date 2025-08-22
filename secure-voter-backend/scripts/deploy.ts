import { ethers } from "hardhat";

async function main() {
    const Verification = await ethers.getContractFactory("Verification");
    const verification = await Verification.deploy();

    await verification.deployed();

    console.log("Verification contract deployed to:", verification.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });