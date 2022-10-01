const pingCommandBuilder = require(`../SlashCommandBuilders/distributeCommandBuilder`);
const { distribute } = require(`../functions/distributeFunction`);
const { showMember } = require(`../functions/memberList`);
module.exports = {
  data: pingCommandBuilder,
  async execute(interaction) {
    //분배시작
    if (interaction.options.getSubcommand() === "분배시작") {
      await distribute(interaction);
    }
    //직원조회
    else if (interaction.options.getSubcommand() === "직원조회") {
      await showMember(interaction);
    }
  },
};
