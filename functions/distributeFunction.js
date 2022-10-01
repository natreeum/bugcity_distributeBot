const { wage, companies, ownerId } = require(`../data`);
const BankManager = require(`../bank/BankManager`);
const bankManager = new BankManager();

async function distribute(interaction) {
  if (interaction.user.id != ownerId) {
    await interaction.reply(`<@${ownerId}>만 명령어를 사용할 수 있습니다.`);
    return;
  }
  const companyName = interaction.options.getString("company");

  await interaction.deferReply();

  function getWageSum(companies) {
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
      const wageSum = getWageSum(com);
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
      for (let member of com.members) {
        const weeklyWage = wage[member.level] * 7;
        try {
          await bankManager.withdrawBTC(member.userId, String(weeklyWage));
          message += `<@${member.userId}>에게 ${weeklyWage} BTC를 지급했습니다.\n`;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  await interaction.followUp(`${message}`);
}

module.exports = {
  distribute,
};
