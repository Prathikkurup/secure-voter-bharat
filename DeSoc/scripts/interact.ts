import hre from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

const CONTRACT_ADDRESS = "0x1EE2D65c0B63C65aB40E11eEbB31CcBA29D17Cfa"; // Replace with deployed address

async function main() {
  // Get signer (the first account from Hardhat)
  const [signer] = await hre.ethers.getSigners();

  // Connect to deployed contract
  const contract = await hre.ethers.getContractAt("Identity", CONTRACT_ADDRESS, signer);

  // Example: Register identity
  const tx = await contract.registerIdentity(
    "Amit Chaube",
    "QmAadharHashExample",
    "QmPanHashExample",
    "QmDrivingHashExample"
  );
  await tx.wait();
  console.log("Identity registered!");

  // Example: Get identity
  const identity = await contract.getIdentity(signer.address);
  console.log("Identity details:", identity);

  // Example: Update reputation (if signer is admin)
  // const tx2 = await contract.updateReputation(signer.address, 80);
  // await tx2.wait();
  // console.log("Reputation updated!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
