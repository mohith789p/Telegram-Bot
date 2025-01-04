const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const fs = require("fs");

const token = "7947199665:AAHLYbRlQh8gof8bONkf5QgM8VYino9Mtfs";
const bot = new TelegramBot(token, { polling: true });

const width = 1024;
const height = 1024;
const seed = 42;
const model = "flux";

// Function to download the image
async function downloadImage(url, filePath) {
  try {
    const response = await axios({ method: "get", url, responseType: "stream" });
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    throw new Error("Failed to download the image: " + error.message);
  }
}

// Telegram bot logic
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userPrompt = msg.text;

  // Validate input
  if (!userPrompt || userPrompt.trim().length === 0) {
    bot.sendMessage(chatId, "Please provide a valid prompt for image generation.");
    return;
  }

  // Send a "working" message
  const workingMessage = await bot.sendMessage(chatId, "Working on your image");

  // Generate image URL
  const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(userPrompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
  const filePath = "generated-image.png";

  try {
    // Download the image
    await downloadImage(imageUrl, filePath);

    // Edit the "working" message to remove the "working" text and display the image
    await bot.deleteMessage(chatId, workingMessage.message_id);
    await bot.sendPhoto(chatId, filePath, { caption: "Here is the generated image for you." });
  } catch (error) {
    console.error(error);

    // Update the "working" message to notify the user of an error
    await bot.editMessageText("Something went wrong. Please try again later.", {
      chat_id: chatId,
      message_id: workingMessage.message_id,
    });
  }
});

console.log("Bot is running...");