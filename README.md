# EWT Token Balance

This is a test script to retrieve the EWT token balance of an account monthly or for a specific block from [Energy Web Chain](https://www.energyweb.org/technology/energy-web-chain/).

## 1. Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

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
git clone https://github.com/olisystems/energy-browser.git
```

2. Change directory to the cloned folder and install all requisite npm packages (as listed in `package.json`):

```
cd app
npm install
```

### 1.3. Get Balance

1. To get the balance up to 01-02-2020, run the following command in the terminal:

```
$ node monthly-balance.js
```

2. Run the following command in the terminal to get the balance at 30 days interval:

```
$ node app.js
```

3. Currently, to get the balance dynamically requires a much longer time (up to several days). To get the balance dynamically, run the following command in the terminal:

```
$ node dynamic.js
```

## 2. Contributing

Pull requests are welcome.

1. Fork the repository.
2. Create your new feature branch: `git checkout -b new-feature-branch`
3. Stage your changes: `git add .`
4. Commit the changes: `git commit -m "add commit message"`
5. `push` to the branch: `git push origin new-feature-branch`
6. Submit a `pull request`.