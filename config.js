const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  token: process.env.DISCORD_TOKEN,
  bugcity: process.env.BUGCITY,
  api: process.env.API_ROOT,
  api_v2: process.env.API_ROOT_V2,
  storage: process.env.STORAGE,
  webhookLogsUrl: process.env.WEBHOOK_LOGS,
  webhook2: process.env.WEBHOOK_SEC,
};
