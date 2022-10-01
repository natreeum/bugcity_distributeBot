const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = new SlashCommandBuilder()
  .setName("급여")
  .setDescription("급여분배")
  .addSubcommand((subcommand) =>
    subcommand
      .setName("직원추가")
      .setDescription("사업체의 직원을 추가합니다.")
      .addStringOption((option) =>
        option
          .setName("company")
          .setDescription(`enter company name`)
          .setRequired(true)
      )
      .addUserOption((option) =>
        option.setName("user").setDescription(`enter user`).setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("nick")
          .setDescription(`enter user's nick`)
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("level")
          .setDescription(`enter user's level`)
          .setRequired(true)
          .addChoices(
            {
              name: "사장",
              value: "c",
            },
            {
              name: "임원",
              value: "e",
            },
            {
              name: "직원",
              value: "s",
            }
          )
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("직원조회")
      .setDescription("사업체의 직원명단을 조회합니다.")
      .addStringOption((option) =>
        option
          .setName("company")
          .setDescription(`enter company name`)
          .setRequired(true)
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("분배시작")
      .setDescription("분배를 시작합니다.")
      .addStringOption((option) =>
        option
          .setName("company")
          .setDescription(`enter company name`)
          .setRequired(true)
      )
  );

module.exports = pingCommandBuilder;
