const { web3, timeConverter, getBalance } = require('./utils')
const walletAddress = '0x86a5A44CFf58638784c2028e7181CEDe57933321'

async function main() {
  const latestBlockNumber = await web3.eth.getBlockNumber()

  console.time('totalTime')
  for (let i = 7041225; i < latestBlockNumber; i++) {
    const block = await web3.eth.getBlock(i)
    const time = timeConverter(block.timestamp)
    if (time === '2020-08-01 05:00:00') {
      const balance = await getBalance(walletAddress, i)
      console.log(i, time, balance)
    }
  }
  console.timeEnd('totalTime')
}

main()
