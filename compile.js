// Copyright 2017 https://tokenmarket.net - MIT licensed
//
// Run with Node 7.x as:
//
// node --harmony-async-await  deploy.js
//

var solc = require('solc'); let fs = require("fs"); const thorify = require("thorify").thorify;  const Web3 = require("web3"); const web3 = new Web3(); thorify(web3, "http://54.213.160.84:8546");


const input = fs.readFileSync('Token.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[":Token"].bytecode;
const abi = JSON.parse(output.contracts[':Token'].interface);
// const contract = web3.eth.Contract(abi);
                   
var contract = new web3.eth.Contract(abi, '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0xa60C92B6CD82c5Effe13764CE18f235E86c02efa', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

console.log(contract);

//
// // Create a web3 connection to a running geth node over JSON-RPC running at
// // http://localhost:8545
// // For geth VPS server + SSH tunneling see
// // https://gist.github.com/miohtama/ce612b35415e74268ff243af645048f4
// let web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('http://54.213.160.84:8546'));
//
// // Read the compiled contract code
// // Compile with
// // solc SampleContract.sol --combined-json abi,asm,ast,bin,bin-runtime,clone-bin,devdoc,interface,opcodes,srcmap,srcmap-runtime,userdoc > contracts.json
// let source = fs.readFileSync("contracts.json");
// let contracts = JSON.parse(source)["contracts"];
//
// // ABI description as JSON structure
// let abi = JSON.parse(contracts.SampleContract.abi);
//
// // Smart contract EVM bytecode as hex
// let code = '0x' + contracts.SampleContract.bin;
//
// // Create Contract proxy class
// let SampleContract = web3.eth.contract(abi);
//
// // Unlock the coinbase account to make transactions out of it
// console.log("Unlocking coinbase account");
// var password = "";
// try {
//     web3.personal.unlockAccount(web3.eth.coinbase, password);
// } catch(e) {
//     console.log(e);
//     return;
// }
//
//
// console.log("Deploying the contract");
// let contract = SampleContract.new({from: web3.eth.coinbase, gas: 1000000, data: code});
//
// // Transaction has entered to geth memory pool
// console.log("Your contract is being deployed in transaction at http://testnet.etherscan.io/tx/" + contract.transactionHash);
//
// // http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// // We need to wait until any miner has included the transaction
// // in a block to get the address of the contract
// async function waitBlock() {
//     while (true) {
//         let receipt = web3.eth.getTransactionReceipt(contract.transactionHash);
//         if (receipt && receipt.contractAddress) {
//             console.log("Your contract has been deployed at http://testnet.etherscan.io/address/" + receipt.contractAddress);
//             console.log("Note that it might take 30 - 90 sceonds for the block to propagate befor it's visible in etherscan.io");
//             break;
//         }
//         console.log("Waiting a mined block to include your contract... currently in block " + web3.eth.blockNumber);
//         await sleep(4000);
//     }
// }
//
// waitBlock();