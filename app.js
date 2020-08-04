const Web3 = require('web3')
const moment = require('moment')

const walletAddress = '0x86a5A44CFf58638784c2028e7181CEDe57933321'
const web3 = new Web3('ws://80.158.20.81:8546')

async function main() {
  const latestBlockNumber = await web3.eth.getBlockNumber()
  const latestBlock = await web3.eth.getBlock(latestBlockNumber)

  const startDate = moment('2019-07-01')
  let endDate = moment(timeConverter(latestBlock.timestamp).split(' ')[0])
  endDate = moment(endDate).subtract(1, 'months').format('YYYY-MM-DD')

  let result = []
  let days = []
  const increment = 17280
  let block = 223000

  while (startDate.isBefore(endDate)) {
    result.push(startDate.format('YYYY-MM'))
    startDate.add(1, 'month')
  }

  for (let index = 0; index < result.length; index++) {
    const month = result[index].split('-')[0]
    const year = result[index].split('-')[1]
    const day = getDaysInMonth(year, month)
    days.push(day)
  }

  for (let i = 0; i < days.length; i++) {
    const day = days[i]
    const blockTime = await web3.eth.getBlock(block)
    const balance = await getBalance(walletAddress, block)
    block = block + increment * day
    console.log(block, timeConverter(blockTime.timestamp), balance)
  }
}

function timeConverter(UNIX_timestamp) {
  let newDate = new Date(UNIX_timestamp * 1000)
  let year = newDate.getFullYear()
  let month = ('0' + (newDate.getMonth() + 1)).slice(-2)
  let date = ('0' + newDate.getDate()).slice(-2)
  let hour = ('0' + newDate.getHours()).slice(-2)
  let min = ('0' + newDate.getMinutes()).slice(-2)
  let sec = ('0' + newDate.getSeconds()).slice(-2)
  let parsingTime =
    year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
  return parsingTime
}

async function getBalance(address, block) {
  let balance = await web3.eth.getBalance(address, block)
  return balance
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate()
}

main()
