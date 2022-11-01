const {
  wage1,
  wage2,
  wage3,
  wage_t,
  companies,
  ownerId,
  staffs,
} = require(`../data`);
const BankManager = require(`../bank/BankManager`);
const bankManager = new BankManager();

async function distribute(interaction) {
  // if (interaction.user.id != ownerId) {
  //   await interaction.reply(`<@${ownerId}>만 명령어를 사용할 수 있습니다.`);
  //   return;
  // }
  if (interaction.user.id != ownerId && !staffs.includes(interaction.user.id)) {
    await interaction.reply(
      `벅크셔해서웨이 직원만 명령어를 사용할 수 있습니다.`
    );
    return;
  }
  const companyName = interaction.options.getString('company');
  const customer = interaction.options.getUser('customer');

  await interaction.deferReply();

  function getWageSum(companies, wage) {
    let wageSum = 0;
    for (let member of companies.members) {
      const weeklyWage = wage[member.level] * 7;
      wageSum += weeklyWage;
    }
    return wageSum;
  }

  //분배 시작
  let message = '해당 이름의 사업체가 존재하지 않습니다.';
  for (let com of companies) {
    if (com.companyName == companyName) {
      //count Member
      let memCnt = 0;
      for (let mem of com.members) {
        if (mem.level !== 'c') memCnt++;
      }
      let wage = {};
      if (memCnt == 0) {
        wage = wage1;
      } else if (memCnt < 4) {
        wage = wage2;
      } else wage = wage3;

      let wageSum = getWageSum(com, wage);
      //투귀단 로직 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      if (com.companyName === '투귀단') {
        wageSum = getWageSum(com, wage_t);
        message = '투귀단 분배를 시작합니다.\n\n';
        try {
          await bankManager.depositBTC(customer.id, String(wageSum));
          await interaction.editReply(
            `벅크셔해서웨이에 ${wageSum}BTC이 입금되었습니다.\n`
          );
        } catch (e) {
          console.log(e);
          return;
        }
        for (let member of com.members) {
          let memberCnt = com.members.length;
          const weeklyWage = Math.floor(wageSum / memberCnt);
          try {
            await bankManager.withdrawBTC(member.userId, String(weeklyWage));
            message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
          } catch (e) {
            console.log(e);
          }
        }
        await interaction.followUp(`${message}`);
        return;
      }
      //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      const balance = await bankManager.getBalance(customer.id);
      console.log(balance);
      console.log(balance.point);
      console.log(balance.point.current);
      if (balance < wageSum) {
        return await interaction.reply(
          `<@${customer.id}> 사장님 잔고에 충분한 급여가 존재하지 않습니다.\nDAO4DAO에서 급여를 분배받았는지 확인해 주세요.`
        );
      }
      try {
        await bankManager.depositBTC(customer.id, String(wageSum));
        await interaction.editReply(
          `벅크셔해서웨이에 ${wageSum}BTC이 입금되었습니다.\n`
        );
      } catch (e) {
        console.log(e);
        return;
      }
      message = ``;
      await interaction.followUp(
        `__${com.companyName}__ 사업체의 급여분배를 시작합니다.\n`
      );

      for (let member of com.members) {
        if (member.level == 'c') {
          const weeklyWage = wage[member.level] * 7;
          try {
            // await bankManager.withdrawBTC(member.userId, String(weeklyWage));
            // message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
            message += `<@${member.userId}>의 직급이 사장이므로 급여를 분배하지 않습니다.\n`;
          } catch (e) {
            console.log(e);
          }
        }
      }
      for (let member of com.members) {
        if (member.level == 'e') {
          const weeklyWage = wage[member.level] * 7;
          try {
            await bankManager.withdrawBTC(member.userId, String(weeklyWage));
            message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
          } catch (e) {
            console.log(e);
          }
        }
      }
      for (let member of com.members) {
        if (member.level == 's') {
          const weeklyWage = wage[member.level] * 7;
          try {
            await bankManager.withdrawBTC(member.userId, String(weeklyWage));
            message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
          } catch (e) {
            console.log(e);
          }
        }
      }
      for (let member of com.members) {
        if (member.level == 'v') {
          const weeklyWage = wage[member.level] * 7;
          try {
            message += `<@${member.userId}> 휴무상태로 주급이 분배되지않았습니다.`;
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
  await interaction.followUp(`${message}`);
}

module.exports = {
  distribute,
};
