const { wage1, wage2, wage3, companies, ownerId, staffs } = require(`../data`);

function getWageSum(companies, wage) {
  let wageSum = 0;
  for (let member of companies.members) {
    // console.log(wage);
    const weeklyWage = wage[member.level] * 7;
    wageSum += weeklyWage;
  }
  return wageSum;
}

async function showMember(interaction) {
  if (interaction.user.id != ownerId && !staffs.includes(interaction.user.id)) {
    await interaction.reply(
      `벅크셔해서웨이 직원만 명령어를 사용할 수 있습니다.`
    );
    return;
  }

  await interaction.deferReply();

  const companyName = interaction.options.getString("company");
  let wageSum = 0;
  let memberMessage = "";
  for (let com of companies) {
    if (com.companyName == companyName) {
      //count Member
      let memCnt = 0;
      for (let mem of com.members) {
        if (mem.level !== "c") memCnt++;
      }
      let wage = {};
      if (memCnt == 0) {
        wage = wage1;
      } else if (memCnt < 4) {
        wage = wage2;
      } else wage = wage3;

      wageSum = getWageSum(com, wage);
      for (let member of com.members) {
        if (member.level == "c") {
          // memberMessage += `[사장 : ${wage.c * 7} BTC] <@${member.userId}>\n`;
          memberMessage += `[사장 : 사장직급의 급여는 분배하지 않습니다.] <@${member.userId}>\n`;
        }
      }
      for (let member of com.members) {
        if (member.level == "e") {
          memberMessage += `[임원 : ${wage.e * 7} BTC] <@${member.userId}>\n`;
        }
      }
      for (let member of com.members) {
        if (member.level == "s") {
          memberMessage += `[직원 : ${wage.s * 7} BTC] <@${member.userId}>\n`;
        }
      }
      for (let member of com.members) {
        if (member.level == "v") {
          memberMessage += `[휴무 : ${wage.v * 7} BTC] <@${member.userId}>\n`;
        }
      }
    }
  }
  if (memberMessage.length === 0) {
    memberMessage =
      "해당 이름의 사업체가 존재하지 않습니다. 사업체 이름을 다시 확인해 주세요.";
    await interaction.editReply(memberMessage);
  } else {
    await interaction.editReply(
      `**[${companyName}]**의 직원명단입니다. 총 급여는 **${wageSum} BTC** 입니다.\n\n${memberMessage}`
    );
  }

  return;
}

module.exports = {
  showMember,
};
