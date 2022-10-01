const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  token: process.env.DISCORD_TOKEN,
  bugcity: process.env.BUGCITY,
  api: process.env.API_ROOT,
  webhookLogsUrl: process.env.WEBHOOK_LOGS,
};
