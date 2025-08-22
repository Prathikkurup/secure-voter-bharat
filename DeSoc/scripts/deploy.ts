import { ethers } from "hardhat";

async function main() {
    const Identity = await ethers.getContractFactory("Identity");
    console.log("Deploying Identity contract...");

    const identity = await Identity.deploy();
    await identity.waitForDeployment();

    console.log("Identity Contract deployed to:", identity.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
