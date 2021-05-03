const { web3, timeConverter, getBalance } = require("./utils");
const walletAddress = "0x86a5A44CFf58638784c2028e7181CEDe57933321";
//const walletAddress = "0x54809eA74BECdD734d2C4329729835ab39BB23F3";


async function main() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  for (let i = 11589857; i < latestBlockNumber; i++) {
    const block = await web3.eth.getBlock(i);
    const time = timeConverter(block.timestamp);
    if (time === "2021-05-01 00:00:00") {
    const balance = await getBalance(walletAddress, i);
    console.log(
      `Block No.: ${i}, Local Time: ${time}, Timestamp [UNIX]: ${block.timestamp}, Balance [wei]: ${balance}`
    );
  }
   }
  console.timeEnd("totalTime");
}

main();
