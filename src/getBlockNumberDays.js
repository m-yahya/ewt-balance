const { web3, unixToHumanReadable } = require("./utils/helpers");
const { BLOCKS } = require("./utils/constants");

let array = [];

async function main() {
  let index = BLOCKS[BLOCKS.length - 1];
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.time("totalTime");
  for (index; index < latestBlockNumber; index++) {
    const block = await web3.eth.getBlock(index);
    const time = unixToHumanReadable(block.timestamp);
    let timeslice = time.slice(-8);
    timeslice = timeslice.slice(0, 5);
  //  console.log(timeslice);
    if (timeslice === "00:00") {
      console.log(`${index}`);
      array.push(index);
    }
  }

  console.log(array);
  console.timeEnd("totalTime");
}

main();
