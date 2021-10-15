const { web3, timeConverter } = require("./helpers");

async function main() {
  let index = 14242264;
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.time("totalTime");
  for (index; index < latestBlockNumber; index++) {
    const block = await web3.eth.getBlock(index);
    const time = timeConverter(block.timestamp);
    const timeslice = time.slice(-8);

    console.log(`${index},${time}`);
  }

  console.timeEnd("totalTime");
}

main();
