const { wage1, wage2, wage3, companies, ownerId, staffs } = require(`../data`);
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
  const companyName = interaction.options.getString("company");

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
  let message = "해당 이름의 사업체가 존재하지 않습니다.";
  for (let com of companies) {
    if (com.companyName == companyName) {
      let wage = {};
      if (com.members.length == 1) {
        wage = wage1;
      } else if (com.members.length < 4) {
        wage = wage2;
      } else wage = wage3;
      const wageSum = getWageSum(com, wage);
      try {
        await bankManager.depositBTC(ownerId, String(wageSum));
        await interaction.editReply(
          `벅크셔해서웨이에 ${wageSum}BTC이 입금되었습니다.\n`
        );
      } catch (e) {
        console.log(e);
      }
      message = ``;
      await interaction.followUp(
        `__${com.companyName}__ 사업체의 급여분배를 시작합니다.\n`
      );

      // for (let member of com.members) {
      //   const weeklyWage = wage[member.level] * 7;
      //   try {
      //     await bankManager.withdrawBTC(member.userId, String(weeklyWage));
      //     message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }

      for (let member of com.members) {
        if (member.level == "c") {
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
        if (member.level == "e") {
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
        if (member.level == "s") {
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
        if (member.level == "v") {
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
