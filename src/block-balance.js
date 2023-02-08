const { PUBLICKEYS, NETWORKS, BLOCKS } = require("./utils/constants");

const {
  web3,
  unixToHumanReadable,
  getBalance,
  currentDate,
} = require("./utils/helpers");

const fs = require("fs");
var path = require("path");

function main() {
  PUBLICKEYS.forEach(async (publickey) => {
    // get network name
    const network = NETWORKS[publickey];

    // get current date from utils
    let date = currentDate();

    // define file path
    let file = path.join(__dirname + `/../tmp/${network}-${date}.xlsx`);

    // apend header
    // append values to file
    const header =
      `Wallet Address, ${publickey}` +
      "\n" +
      "Block No., Local Time, Balance [EWT]" +
      "\n";
    fs.writeFile(file, header, { flag: "a+" }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    // loop through the blocks array
    for (let i = 0; i < BLOCKS.length; i++) {
      const blockNum = BLOCKS[i];
      const block = await web3.eth.getBlock(blockNum);
      const time = unixToHumanReadable(block.timestamp);
      const balance = await getBalance(publickey, blockNum);
      let content =
        `${BLOCKS[i]}, ${time}, ${balance / 1000000000000000000}` + "\n";

      // append values to file
      fs.writeFile(file, content, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
    console.log("done writing files!");
  });
}

main();
