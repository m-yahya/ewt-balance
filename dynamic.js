
const Web3 = require('web3');
const moment = require('moment');

//const volta = 'ws://80.158.39.62:8546';
//const volta = 'ws://80.158.47.134:7546';

const walletAddress = '0x86a5A44CFf58638784c2028e7181CEDe57933321';
const web3 = new Web3('ws://80.158.39.62:8546');

async function main() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    const latestBlock = await web3.eth.getBlock(latestBlockNumber)

    console.time("totalTime")
    for (let i = 0; i < latestBlockNumber; i++) {

        const block = await web3.eth.getBlock(i)
        const time = timeConverter(block.timestamp)
        if (time === '2019-07-01 00:00:00' || time === '2019-08-01 00:00:00' || time === '2019-09-01 00:00:00'
            || time === '2019-10-01 00:00:00' || time === '2019-11-01 00:00:00' || time === '2019-12-01 00:00:00'
            || time === '2020-01-01 00:00:00' || time === '2020-02-01 00:00:00') {
            const balance = await getBalance(walletAddress, i)
            console.log(i, time, balance);
        }

    }
    console.timeEnd("totalTime")

}

function timeConverter(UNIX_timestamp) {
    let newDate = new Date(UNIX_timestamp * 1000);
    let year = newDate.getFullYear();
    let month = (("0" + (newDate.getMonth() + 1)).slice(-2));
    let date = ("0" + newDate.getDate()).slice(-2);
    let hour = ("0" + newDate.getHours()).slice(-2);
    let min = ("0" + newDate.getMinutes()).slice(-2);
    let sec = ("0" + newDate.getSeconds()).slice(-2);
    let parsingTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;

    return parsingTime;
}

async function getBalance(address, block) {
    let balance = await web3.eth.getBalance(address, block)
    return balance
}

main()



