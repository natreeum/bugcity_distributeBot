const { WebhookClient } = require("discord.js");

const { webhookLogsUrl } = require("../config");

const logWebhook = new WebhookClient({
  url: webhookLogsUrl,
});

async function log(text = "hello", wh = logWebhook) {
  try {
    const message = await wh.send({
      content: text,
    });
    return message;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  log,
};
