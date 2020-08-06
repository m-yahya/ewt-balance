const { web3, timeConverter, getBalance } = require('./utils')
const walletAddress = '0x86a5A44CFf58638784c2028e7181CEDe57933321'

async function main() {
  let blocks = [
    224166,
    759757,
    1293735,
    1808059,
    2343577,
    2859862,
    3381785,
    3909123,
    4399555,
    4934044,
    5451991,
    5987593,
    6505859,
  ]
  for (let i = 0; i < blocks.length; i++) {
    const blockNum = blocks[i]
    const block = await web3.eth.getBlock(blockNum)
    const time = timeConverter(block.timestamp)
    const balance = await getBalance(walletAddress, blockNum)
    console.log(
      `Block Number: ${blockNum}, Timestamp: ${time}, Balance[wei]: ${balance}`,
    )
  }
}

main()
