const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

// Get the current date in YYYYMMDD format
const date = new Date();
const today = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;

// Telegram Bot Token
const token = '7919323427:AAGigRCBsR1c6nNvG7jIfj0j-EeDKviY_Us'; // Your Telegram bot token
const bot = new TelegramBot(token, { polling: true });

// Train status command
bot.onText(/\/trainstatus (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const trainNumber = match[1]?.trim(); // Extract train number from command

  if (!trainNumber) {
    bot.sendMessage(chatId, "Please provide a valid train number. Example: /trainstatus 12051");
    return;
  }

  try {
    const response = await axios.get("https://indian-railway-irctc.p.rapidapi.com/api/trains/v1/train/status", {
      params: {
        departure_date: today, // Use the dynamic date in YYYYMMDD format
        isH5: true,
        client: 'web',
        train_number: trainNumber
      },
      headers: {
        'X-RapidAPI-Key': 'fdb30b8075msh8aa07a7ae3443a0p1df4b0jsnd6adca855453', // Your RapidAPI key
        'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
      }
    });

    const trainStatus = response.data;

    // Validate and format the response
    if (trainStatus && trainStatus.body) {
      const statusMessage = `
🚆 Train Number: ${trainNumber}
Time Updated: ${trainStatus.body.time_of_availability || 'N/A'}
Current Station: ${trainStatus.body.current_station || 'N/A'}
Next Station: ${trainStatus.body.stations[0]?.stationName || 'N/A'}
Status: ${trainStatus.body.train_status_message || 'N/A'}
      `;
      console.log("Train Status: ", statusMessage.trim()); // Log the status
      bot.sendMessage(chatId, statusMessage.trim());
    } else {
      bot.sendMessage(chatId, `No status found for train number ${trainNumber}. Please check the train number and try again.`);
    }
  } catch (error) {
    console.error("Error fetching train status: ", error);
    const errorMessage = error.response?.data?.message || "Failed to fetch train status. Please try again later.";
    bot.sendMessage(chatId, errorMessage);
  }
});

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome! Use /trainstatus <train_number> to get the current status of a train.");
});

// Graceful error handling for unsupported messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (!msg.text.startsWith('/')) {
    bot.sendMessage(chatId, "I didn't understand that. Use /trainstatus <train_number> to get train status.");
  }
});
console.log("bot is running");
