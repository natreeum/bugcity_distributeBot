const got = require("got");
const fetch = require("node-fetch");
const util = require("util");
const { api, bugcity } = require("../config");
const { log } = require("../utils/webhook");

class BankManager {
  async depositBTC(user, amount) {
    if (!user || !amount) return;

    try {
      var details = {
        storageName: "BUGkshireHathaway",
        amount,
        token: bugcity,
        userId: user,
        memo: "BUGkshireHathaway deposit",
      };
      const params = new URLSearchParams();

      for (const property in details) {
        params.append(property, details[property]);
      }

      const resp = await fetch(`${api}/bugcity/storage/deposit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params,
      });

      const json = await resp.json();
      console.log(user, "deposit", amount);
      if (json.data.state === "success") {
        log(`[DEPOSIT SUCCESS] <@${user}> - ${amount} BTC π`);
      } else if (json.data.state === "error") {
        log(
          `[DEPOSIT FAILED]\n${json.data.message}\n<@${user}> - ${amount} BTC π`
        );
      }
      return json;
    } catch (e) {
      console.error(e);
      log(`[DEPOSIT FAILED] <@${user}> - ${amount} BTC π`);
      throw new Error("BTC μΆκΈ μ€ν¨");
    }
  }

  async withdrawBTC(user, amount) {
    if (!user || !amount) return;

    try {
      var details = {
        storageName: "BUGkshireHathaway",
        amount,
        token: bugcity,
        userId: user,
        memo: "BUGkshireHathaway withdraw",
      };
      const params = new URLSearchParams();

      for (const property in details) {
        params.append(property, details[property]);
      }

      const resp = await fetch(`${api}/bugcity/storage/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params,
      });

      const json = await resp.json();
      console.log(user, "withdraw", amount);
      if (json.data.state === "success") {
        log(`[WITHDRAW SUCCESS] <@${user}> - ${amount} BTC π`);
      } else {
        log(
          `[WITHDRAW FAILED]\n${json.data.message}\n<@${user}> - ${amount} BTC π`
        );
      }
      return json;
    } catch (e) {
      console.error(e);
      log(
        `[WITHDRAW FAILED]\n${json.data.message}\n<@${user}> - ${amount} BTC π`
      );
      throw new Error("BTC μκΈ μ€ν¨");
    }
  }

  async getBalance(user) {
    try {
      const url = `${api}/v2/users/${user}/points/bugtc`;
      const json = await got
        .get(url, {
          headers: {
            "X-Auth-Token": bugcity,
          },
        })
        .json();
      return json;
    } catch (e) {
      console.error(e);
      throw new Error("BTC λ°Έλ°μ€ μ‘°ν μ€ν¨");
    }
  }

  async getBalances(user) {
    const {
      data: { state },
    } = await this.withdrawBTC(user, 1);
    if (state === "error") {
      return { data: { state: "error" } };
    }
    const json = await this.depositBTC(user, 1);
    return json;
  }
}

module.exports = BankManager;
