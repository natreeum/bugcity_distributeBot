const BankManager = require('./bank/BankManagerV2');

const bankManager = new BankManager();

const main = async () => {
  const res = await bankManager
    .getBalance('251349298300715008')
    .then(console.log);
};

main();
