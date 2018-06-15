/**
 *
 *
 * ./thor -network test --verbosity 10 --api-addr 172.31.35.4:8546

 // Read the compiled contract code
 // Compile with
 // solc SampleContract.sol --combined-json abi,asm,ast,bin,bin-runtime,clone-bin,devdoc,interface,opcodes,srcmap,srcmap-runtime,userdoc > contracts.json
 let source = fs.readFileSync("contracts.json");
 let contracts = JSON.parse(source)["contracts"];

 // ABI description as JSON structure
 let abi = JSON.parse(contracts.SampleContract.abi);

 // Smart contract EVM bytecode as hex
 let code = '0x' + contracts.SampleContract.bin;

 // Create Contract proxy class
 let SampleContract = web3.eth.contract(abi);

 // Unlock the coinbase account to make transactions out of it
 console.log("Unlocking coinbase account");
 var password = "";
 try {
    web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
    console.log(e);
    return;
}
 **/

const thorify = require("thorify").thorify;  const Web3 = require("web3"); const web3 = new Web3();  thorify(web3, "http://54.213.160.84:8546");

// web3.eth.getBlock("latest").then(res => console.log(res));


// web3.eth.accounts.create("123123", (a, v) => {
//     console.log('ACCOUNT' + a, v)
// });

// privateKey: '0x36c59b342cb55ec102f5aad2475c5c619aaef1678a82d64e03a174905890c1f0',
// web3.eth.getBalance("0xa60C92B6CD82c5Effe13764CE18f235E86c02efa", 'latest').then(result => {
//     console.log('Account balance is: ' + result);
// })
// web3.eth.getEnergy("0xa60C92B6CD82c5Effe13764CE18f235E86c02efa", 'latest').then(result => {
//     console.log('Account energy is: ' + result);
// })

web3.eth.personal.unlockAccount("0xa60C92B6CD82c5Effe13764CE18f235E86c02efa", "123123").then(() => {
    console.log('Account unlocked.');
}).catch(console.error);


// web3.eth.personal.unlockAccount("0xa60C92B6CD82c5Effe13764CE18f235E86c02efa", "xxxx",1000, function (error, result) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('unlocked account');
//     }
// })

