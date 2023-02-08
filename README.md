# EWT Token Balance

This application contains multiple scripts to retrieve the EWT token balance of an account dynamically or for specific months or blocks from [Energy Web Chain](https://www.energyweb.org/technology/energy-web-chain/).

## 1. Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 1.1. Prerequisites

Please make sure you've already installed following dependencies:

```
npm >=6.11.3
node >=10.16.3
```

### 1.2. Installing

Follow the steps below to have development environment running:

1. Clone the repository:

```
git clone https://github.com/olisystems/ewt-balance.git
```

2. Change directory to the cloned folder and install all requisite npm packages (as listed in `package.json`):

```
cd ewt-balance
npm install
```

## 2. Get Balance

1. To get the balance up to 01-07-2020, run the following command in the terminal:

```
$ npm run balanceByBlock
```

2. Run the following command in the terminal to get the balance for specific timestamps:

```
$ npm run balanceByMonth
```

3. Currently, to get the balance dynamically requires a much longer time (up to several days). To get the balance dynamically, run the following command in the terminal:

```
$ npm run dynamic
```

4. Instead of starting from an early block, use the last known block number as a starting point and get the block number for next month using the `getBlockNumber.js`. Then put this block number into `blocks` array of `block-balance.js` script.

   For example, we can see from the `block-balance.js` that the last calculated block number is `6505859`. We can use this block number as a starting point in the `getBlockNumber.js` file and use the next month as `timestamp`. Hence we will get the block number for the next month that we can use in the `block-balance.js` script.

   Run the following command to get the block number for the specified timestamp:

```
$ npm run getBlockNumber
```

## Updated 01.06.21

1. Run `node getBlockNumber.js`
2. Copy block numbers from console to `BLOCKS.js` array
3. Run `node block-balance.js`

## 2. Contributing

Pull requests are welcome.

1. Fork the repository.
2. Create your new feature branch: `git checkout -b new-feature-branch`
3. Stage your changes: `git add .`
4. Commit the changes: `git commit -m "add commit message"`
5. `push` to the branch: `git push origin new-feature-branch`
6. Submit a `pull request`.
