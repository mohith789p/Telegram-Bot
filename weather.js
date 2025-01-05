const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Replace with your Telegram bot token
const TELEGRAM_TOKEN = '7801867957:AAHKum7qNkbtQ_IHgNbmCF4_bHaUEu75wm0';
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Open-Meteo API base URL
const OPEN_METEO_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome! Send me a location (latitude and longitude) using the format /loc <latitude> <longitude>, or share your location.');
});

// Handle /loc command with latitude and longitude
bot.onText(/\/loc\s+([-\d.]+)\s+([-\d.]+)/, async (msg, match) => {
  const latitude = parseFloat(match[1]);
  const longitude = parseFloat(match[2]);

  try {
    const weatherData = await getWeather(latitude, longitude);
    const response = formatWeatherResponse(weatherData);
    bot.sendMessage(msg.chat.id, response);
  } catch (error) {
    bot.sendMessage(msg.chat.id, 'Sorry, I could not fetch the weather data.');
  }
});

// Handle location sharing
bot.on('location', async (msg) => {
  const { latitude, longitude } = msg.location;
  try {
    const weatherData = await getWeather(latitude, longitude);
    const response = formatWeatherResponse(weatherData);
    bot.sendMessage(msg.chat.id, response);
  } catch (error) {
    bot.sendMessage(msg.chat.id, 'Sorry, I could not fetch the weather data.');
  }
});

// Handle other text-based city queries (for future enhancement)
bot.on('message', async (msg) => {
  const text = msg.text;

  // Skip if it matches /start or other commands
  if (text.startsWith('/')) return;

  // Replace this with a geocoding API if you need latitude/longitude for a city name
  bot.sendMessage(msg.chat.id, 'Sorry, I currently only accept location data for weather reports.');
});

// Function to fetch weather data
async function getWeather(latitude, longitude) {
  const params = {
    latitude,
    longitude,
    current_weather: true, // Fetch current weather
  };
  const response = await axios.get(OPEN_METEO_BASE_URL, { params });
  return response.data;
}

// Format weather response for Telegram
function formatWeatherResponse(weatherData) {
  if (!weatherData || !weatherData.current_weather) {
    throw new Error('Invalid weather data');
  }
  const { temperature, weathercode, windspeed } = weatherData.current_weather;
  return `
Current Weather:
- Temperature: ${temperature}°C
- Weather Code: ${weathercode}
- Wind Speed: ${windspeed} km/h
  `;
}

console.log('Bot is running...');
