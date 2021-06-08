const { web3, timeConverter } = require("./utils/helpers");
const { BLOCKS } = require("./utils/constants");

let array = [];

async function main() {
  let index = BLOCKS[BLOCKS.length - 1];
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.time("totalTime");
  for (index; index < latestBlockNumber; index++) {
    const block = await web3.eth.getBlock(index);
    const time = timeConverter(block.timestamp);
    const timeslice = time.slice(-8);
    if (timeslice === "00:00:00") {
      console.log(`${index},`);
      array.push(index);
    }
  }

  console.log(array);
  console.timeEnd("totalTime");
}

main();
