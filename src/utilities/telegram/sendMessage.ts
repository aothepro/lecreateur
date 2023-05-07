const { TELEGRAM_BOT_TOKEN, TELEGRAM_BOT_CHAT_ID } = process.env;

export default function sendTelegramMessage(
  message: string,
  chatId = TELEGRAM_BOT_CHAT_ID
) {
  return fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "markdown",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
}
