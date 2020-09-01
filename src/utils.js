const Web3 = require("web3");

// set up web3 provider
//const volta = 'ws://80.158.39.62:8546';
//const volta = 'ws://80.158.47.134:7546';
const web3 = new Web3("ws://80.158.20.81:8546");

// covert UNIX timestamp to human readable format
const timeConverter = (UNIX_timestamp) => {
  let newDate = new Date(UNIX_timestamp * 1000);
  let year = newDate.getFullYear();
  let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  let date = ("0" + newDate.getDate()).slice(-2);
  let hour = ("0" + newDate.getHours()).slice(-2);
  let min = ("0" + newDate.getMinutes()).slice(-2);
  let sec = ("0" + newDate.getSeconds()).slice(-2);
  let parsingTime =
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;

  return parsingTime;
};

// get balance
const getBalance = async (address, block) => {
  let balance = await web3.eth.getBalance(address, block);
  return balance;
};

// get current date

const currentDate = () => {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  let date = `${day}-${month}-${year}`;
  return date;
};

module.exports = { web3, timeConverter, getBalance, currentDate };
