// set up web3 provider
const Web3 = require("web3");
const dotenv = require("dotenv");
dotenv.config();

const web3 = new Web3(process.env.EWC_RPC);

// covert UNIX timestamp to human readable format
const unixToHumanReadable = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const readableTime =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    " " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  return readableTime;
};

// get current date
const currentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  todayDate =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;
  return todayDate;
};

// get balance
const getBalance = async (address, block) => {
  let balance = await web3.eth.getBalance(address, block);
  return balance;
};

module.exports = { web3, unixToHumanReadable, currentDate, getBalance };
