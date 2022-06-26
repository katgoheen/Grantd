// scripts/greet.js

const web3 = require('web3');
const hre = require("hardhat");
const ContractJson = require("../artifacts/contracts/Greeter.sol/Factory.json");
const ContractJson2 = require("../artifacts/contracts/Greeter.sol/Escrow.json");
// The ABI is very important -- it's the interface to your contract, including
// the different available functions that are exposed for other contracts,
// accounts, etc. to call.
const abi = ContractJson.abi;
const abi2 = ContractJson2.abi;

async function main() {
    // Notice that we're using process.env.ALCHEMY_API_KEY to load an
    // environment variable. If you are seeing errors, make sure to go
    // back to Step 12 and 13 to set up the dotenv dependency and .env
    // file correctly!
    const alchemy = new hre.ethers.providers.AlchemyProvider(
        'maticmum',
        process.env.ALCHEMY_API_KEY
    );
    // We're using the same wallet private key for the wallet that you
    // created in Step 6. 
    const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, alchemy);

    // Get the deployed contract. We need both the specific CONTRACT_ADDRESS
    const Factory = new hre.ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        abi,
        userWallet
    )

    // We're going to issue two write-transactions to modify the state
    // of the Polygon blockchain via our Greeter smart contract.
    
    // The first transaction sets a new greeting with setGreeting, and then
    // waits for the transaction to be mined before doing a sanity
    // check and checking the new greeting state.
    let source = "0xd0940954B9330329c58822091f334935B02f3eFC"
    let destin = "0xa7C8eeeA1D00D1BFa4b117AebF95D9681365AC08"
    let contra = "0xa025aEe76148DE9376bc4879a25b9A2a13aebdc3"
    const setTx1 = await Factory.createContract()
    await setTx1.wait();
    const addr = await Factory.getByID(0)
    const Escrow = new hre.ethers.Contract(
        addr,
        abi2,
        userWallet
    )

    console.log("beforer: " + Escrow.address)
    console.log("before: " + await Escrow.getAllDeposits()); 
    console.log("before: " + await Escrow.initEscrow(destin, source, 1, 1250001)); 
    // await Escrow.depositToEscrow(function(){}, {from: source, value: web3.utils.toWei('100', 'ether')});
    // console.log("before: " + await Escrow.totalEscrowBalance.call(destin));
    // await Escrow.deployed().then(function(instance) {
	// 		instance.initEscrow(destin, source, 10, 1250001);
	// })
    // .then(function() {
	// 		instance.depositToEscrow(function(){}, {from: destin, value: web3.utils.toWei('100', 'ether')});
	// 		return instance.totalEscrowBalance.call(accounts[0]);
	// })
	// .then(function(_totalContractBalance) {
	// 		assert.equal(_totalContractBalance, 100, "incorrect account balance in contract");
	// });

    // // The second transaction does the exact same thing with a new input.
    // const setTx2 = await Greeter.setGreeting("web3 is awesome!");
    // await setTx2.wait();
    // console.log("after: " + await Greeter.greet());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
