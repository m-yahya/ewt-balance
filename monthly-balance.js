const Web3 = require('web3');
const moment = require('moment');

const walletAddress = '0x86a5A44CFf58638784c2028e7181CEDe57933321';
const web3 = new Web3('ws://80.158.39.62:8546');

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

async function main() {

    let blocks = [222726, 758317, 1292295, 1806619, 2342857, 2859142, 3381093, 3908432]
    for (let i = 0; i < blocks.length; i++) {
        const blockNum = blocks[i];
        const block = await web3.eth.getBlock(blockNum)
        const time = timeConverter(block.timestamp)
        const balance = await getBalance(walletAddress, blockNum)
        console.log(`Block Number: ${blockNum}, Timestamp: ${time}, Balance[wei]: ${balance}`);

    }
}

main()