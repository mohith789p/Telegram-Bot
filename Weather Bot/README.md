# 🌦️ Sky Watcher

A Telegram bot for instant, location-based weather updates!  
Send your coordinates and get real-time weather data—fast, simple, and reliable.

---

## 📖 Project Description

**Sky Watcher** is a Telegram bot that delivers current weather information for any location in the world.  
Users send their latitude and longitude, and the bot fetches up-to-date weather data using the Open-Meteo API.  
The bot is perfect for travelers, outdoor enthusiasts, or anyone who needs quick, accurate weather updates in their chat.

All queries are logged to Firestore for analytics or future enhancements.

---

## 🚀 Features

- **Real-Time Weather**: Get the latest weather for any latitude/longitude.
- **Simple Location Command**: Just send `/loc <latitude> <longitude>`.
- **Temperature, Wind, and Weather Code**: Clear, concise weather details.
- **Firestore Logging**: Each query is saved for analytics or future features.
- **Robust Error Handling**: Friendly messages if something goes wrong.
- **Cloud-Ready**: Easily deployable and scalable.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **node-telegram-bot-api** – Telegram Bot API library
- **axios** – HTTP client for API requests
- **firebase-admin** – Firebase Admin SDK for Firestore
- **Firestore** – NoSQL cloud database for storing queries
- **dotenv** – Environment variable management
- **Open-Meteo API** – Weather data provider

---

## ⚡ Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/mohith789p/Telegram-Bot.git
   cd Weather Bot
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure environment variables:**

- Create a `.env` file in the root directory:
  ```
  BOT_TOKEN=your_telegram_bot_token
  FIREBASE_CONFIG=your_firebase_service_account_json
  API_URL=https://api.open-meteo.com/v1/forecast
  PORT=3000
  ```
- `BOT_TOKEN`: Get from [BotFather](https://t.me/BotFather) on Telegram.
- `FIREBASE_CONFIG`: Paste your [Firebase service account JSON](https://firebase.google.com/docs/admin/setup#initialize-sdk) as a single-line string.
- `API_URL`: The base URL for the Open-Meteo API.

4. **Start the bot:**

   ```
   node index.js
   ```

---

## 📝 Usage

- **Start the bot:**
- `/start`  
  _Get a welcome message and instructions._

- **Get weather for a location:**
- `/loc <latitude> <longitude>`  
  _Example: `/loc 28.6139 77.2090`_

- **Example Output:**
  ```
  Current Weather:
      Temperature: 32°C
      Weather Code: 2
      Wind Speed: 14 km/h
  ```

---

## 📸 Working Demo

![screenshot](https://placehold.co/600x400?text=Sky+Watcher+in+Action)

---

## 🌱 Environment Variables

| Variable          | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `BOT_TOKEN`       | Telegram Bot API token from BotFather                 |
| `FIREBASE_CONFIG` | Firebase Admin SDK service account JSON (as a string) |
| `API_URL`         | Base URL for Open-Meteo API                           |
| `PORT`            | (Optional) Port for HTTP server (default: 3000)       |

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request.

Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

---

## 🙏 Credits

- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [axios](https://github.com/axios/axios)
- [firebase-admin](https://firebase.google.com/docs/admin/setup)
- [Open-Meteo API](https://open-meteo.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Placeholder.com](https://placehold.co/) for screenshot images

---

## 📬 Contact & Support

- **Telegram:** [@Mohith321p](https://t.me/Mohith321)
- **Email:** mohith321p@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/mohith789p/Telegram-Bot/tree/main/Checklist%20Bot)

---

_Stay prepared with Sky Watcher! ☀️🌧️_
