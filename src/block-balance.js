const { web3, timeConverter, getBalance, currentDate } = require("./utils");
const walletAddress = "0x86a5A44CFf58638784c2028e7181CEDe57933321";
const fs = require("fs");
var path = require("path");

let blocks = [
  222726,
  758317,
  1292295,
  1806619,
  2342857,
  2859142,
  3381093,
  3908432,
  4398835,
  4932662,
  5450551,
  5986153,
  6504420,
  7039848,
  7567778,
  8066319,
  8571250,
  9054587,
  9545086,
  10063351
];

async function main() {
  // get current date from utils
  let date = currentDate();
  // define file path
  let file = path.join(__dirname + `/../tmp/${date}-block-balance.txt`);

  // apend header
  // append values to file
  const header = "Block No., Local Time, Timestamp [UNIX], Balance [wei]" +
    "\n"
  fs.writeFile(file, header, { flag: "a+" }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  // loop through the blocks array
  for (let i = 0; i < blocks.length; i++) {
    const blockNum = blocks[i];
    const block = await web3.eth.getBlock(blockNum);
    const time = timeConverter(block.timestamp);
    const balance = await getBalance(walletAddress, blockNum);
    let content =
      `${blocks[i]}, ${time}, ${block.timestamp}, ${balance}` +
      "\n";
    // append values to file
    fs.writeFile(file, content, { flag: "a+" }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
  console.log("done writing files!");
}

main();
