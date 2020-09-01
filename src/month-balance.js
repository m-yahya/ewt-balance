const { web3, timeConverter, getBalance } = require("./utils");
const walletAddress = "0x86a5A44CFf58638784c2028e7181CEDe57933321";

async function main() {
  const latestBlockNumber = await web3.eth.getBlockNumber();

  console.time("totalTime");
  for (let i = 222725; i < latestBlockNumber; i++) {
    const block = await web3.eth.getBlock(i);
    const time = timeConverter(block.timestamp);
    if (
      time === "2019-07-01 00:00:00" ||
      time === "2019-08-01 00:00:00" ||
      time === "2019-09-01 00:00:00" ||
      time === "2019-10-01 00:00:00" ||
      time === "2019-11-01 00:00:00" ||
      time === "2019-12-01 00:00:00" ||
      time === "2020-01-01 00:00:00" ||
      time === "2020-02-01 00:00:00" ||
      time === "2020-03-01 00:00:00" ||
      time === "2020-04-01 00:00:00" ||
      time === "2020-05-01 00:00:00" ||
      time === "2020-06-01 00:00:00" ||
      time === "2020-07-01 00:00:00" ||
      time === "2020-08-01 00:00:00" ||
      time === "2020-09-01 00:00:00"
    ) {
      const balance = await getBalance(walletAddress, i);
      console.log(`Block No.: ${i}, Local Time: ${time}, Timestamp [UNIX]: ${block.timestamp}, Balance [wei]: ${balance}`);
    }
  }
  console.timeEnd("totalTime");
}

main();
