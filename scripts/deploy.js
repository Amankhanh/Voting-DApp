async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  const voting = await Voting.deploy(["Alice", "Bob", "Charlie"]);

  await voting.waitForDeployment();

  console.log("Contract deployed to:", await voting.getAddress());
}

main();

//Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3//