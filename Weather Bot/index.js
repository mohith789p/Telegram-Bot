require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const services = JSON.parse(process.env.FIREBASE_CONFIG);
const http = require("http");
const PORT = process.env.PORT || 3000;

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Open-Meteo API base URL
const api_url = process.env.API_URL;

// Initialize Firebase
initializeApp({
  credential: cert(services),
});

const db = getFirestore();

// Function to fetch weather data
async function getWeather(latitude, longitude) {
  const params = {
    latitude,
    longitude,
    current_weather: true,
  };
  const response = await axios.get(api_url, { params });
  return response.data;
}

// Format weather response for Telegram
function formatWeatherResponse(weatherData) {
  if (!weatherData || !weatherData.current_weather) {
    throw new Error("Invalid weather data");
  }
  const { temperature, weathercode, windspeed } = weatherData.current_weather;
  return `\nCurrent Weather:\n- Temperature: ${temperature}°C\n- Weather Code: ${weathercode}\n- Wind Speed: ${windspeed} km/h`;
}

console.log("Bot is running...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Welcome! Send me a location (latitude and longitude) using the format /loc <latitude> <longitude>"
  );
});

// Handle /loc command with latitude and longitude
bot.onText(/\/loc\s+([-\d.]+)\s+([-\d.]+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = String(msg.from.id);
  const latitude = parseFloat(match[1]);
  const longitude = parseFloat(match[2]);

  try {
    const weatherData = await getWeather(latitude, longitude);
    const response = formatWeatherResponse(weatherData);

    // Save to Firestore
    const weatherDoc = db.collection("weatherReport").doc();
    await weatherDoc.set({
      userId: userId,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      response: {
        temperature: `${weatherData.current_weather.temperature}°C`,
        weathercode: weatherData.current_weather.weathercode,
        windspeed: `${weatherData.current_weather.windspeed} km/h`,
      },
      timestamp: new Date(),
    });

    bot.sendMessage(chatId, response);
  } catch (error) {
    console.error("Error fetching weather:", error);
    bot.sendMessage(chatId, "Sorry, I could not fetch the weather data.");
  }
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    msg.chat.id,
    "Welcome! Send me a location (latitude and longitude) using the format /loc <latitude> <longitude>"
  );
});

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("Telegram Bot is running");
  })
  .listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
