require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const services = JSON.parse(process.env.FIREBASE_CONFIG);
const http = require("http");
const PORT = process.env.PORT || 3000;
const fs = require("fs");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

initializeApp({
  credential: cert(services),
});

const db = getFirestore();

const width = 1024;
const height = 1024;
const seed = 42;
const model = "flux";

async function downloadImage(url, filePath) {
  try {
    const response = await axios({
      method: "get",
      url,
      responseType: "stream",
    });
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

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userPrompt = msg.text;

  if (!userPrompt || userPrompt.trim().length === 0) {
    bot.sendMessage(
      chatId,
      "Please provide a valid prompt for image generation."
    );
    return;
  }

  const workingMessage = await bot.sendMessage(
    chatId,
    "Working on your image..."
  );

  const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(
    userPrompt
  )}?width=${width}&height=${height}&seed=${seed}&model=${model}`;
  const filePath = "generated-image.png";

  try {
    await downloadImage(imageUrl, filePath);
    await bot.deleteMessage(chatId, workingMessage.message_id);
    await bot.sendPhoto(chatId, filePath, {
      caption: "Here is the generated image for you.",
      contentType: "image/png",
    });

    // Save to Firestore
    await db.collection("genPic").add({
      userId: chatId,
      imageUrl,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      userPrompt,
    });
  } catch (error) {
    console.error(error);
    await bot.editMessageText("Something went wrong. Please try again later.", {
      chat_id: chatId,
      message_id: workingMessage.message_id,
    });
  }
});

console.log("Bot is running...");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("Telegram Bot is running");
  })
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
