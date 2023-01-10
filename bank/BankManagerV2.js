const got = require('got');
const fetch = require('node-fetch');
const { api, bugcity } = require('../config');
const { log } = require('../utils/webhook');

class BankManager {
  async depositBTC(user, amount) {
    if (!user || !amount) return;
    try {
    } catch (e) {}
  }
  async withdrawBTC() {}
  async getBalance() {}
  async getBalances() {}
}

module.exports = BankManager;
