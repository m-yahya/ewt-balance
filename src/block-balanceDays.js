const { web3, timeConverter, getBalance, currentDate } = require("./utils");
const walletAddress = "0x54809eA74BECdD734d2C4329729835ab39BB23F3";
const fs = require("fs");
var path = require("path");

let blocks = [
  10676815,
  10693929,
  10711057,
  10728325,
  10745596,
  10762862,
  10780136,
  10797401,
  10814674,
  10831946,
  10849221,
  10866490,
  10883758,
  10901030,
  10918308,
  10935548,
  10952821,
  10970090,
  10987365,
  11004640,
  11021196,
  11038451,
  11055725,
  11072995,
  11090267,
  11107541,
  11124805,
  11142071,
  11159339,
  11176602,
  11193867,
  11211144,
  11228417,
  11245687,
  11262966,
];

async function main() {
  // get current date from utils
  let date = currentDate();
  // define file path
  let file = path.join(__dirname + `/../days/${date}-block-balance.txt`);

  // apend header
  // append values to file
  const header =
    "Wallet Address: 0x54809eA74BECdD734d2C4329729835ab39BB23F3" +
    "\n" +
    "Block No., Local Time, Timestamp [UNIX], Balance [wei]" +
    "\n";
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
      `${blocks[i]}, ${time}, ${block.timestamp}, ${balance}` + "\n";
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
