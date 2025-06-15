# 🚆 Track my Train

A lightning-fast Telegram bot for checking live Indian train status by train number.  
Get real-time updates on train location, next station, and status—right from your chat!

---

## 📖 Project Description

**TrainStatusBot** is a Telegram bot that provides instant, real-time Indian Railways train status updates.  
Simply send a train number, and the bot fetches the latest running status using a trusted public API.  
Ideal for travelers, commuters, and anyone who wants quick, reliable train information without navigating clunky apps or websites.

---

## 🚀 Features

- **Live Train Status**: Get the current running status of any Indian train by number.
- **Next Station Info**: See the upcoming station and current location.
- **Time of Last Update**: Know how recent the status is.
- **Simple Commands**: Just one command to remember!
- **Friendly Replies**: Clear, concise, and easy-to-read status messages.
- **Error Handling**: User-friendly messages for invalid input or API errors.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **node-telegram-bot-api** – Telegram Bot API library
- **axios** – HTTP client for API requests
- **dotenv** – Environment variable management
- **Indian Railway IRCTC RapidAPI** – For live train data

---

## ⚡ Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/mohith789p/Telegram-Bot.git
   cd TrainStatus Bot
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Configure environment variables:**

- Create a `.env` file in the root directory:
  ```
  BOT_TOKEN=your_telegram_bot_token
  RAPID_API_KEY=your_rapidapi_key
  PORT=3000
  ```
- `BOT_TOKEN`: Get from [BotFather](https://t.me/BotFather) on Telegram.
- `RAPID_API_KEY`: Get from [RapidAPI](https://rapidapi.com/).

4. **Start the bot:**
   ```
   node index.js
   ```

---

## 📝 Usage

- **Start the bot:**
- `/start`  
  _Get a welcome message and instructions._

- **Check train status:**
- `/trainstatus <train_number>`  
  _Example: `/trainstatus 12051`_

- **Example Output:**
  ```
  🚆 Train Number: 12051
  🕓 Time Updated: 15:24
  📍 Current Station: New Delhi
  ➡️ Next Station: Kanpur Central
  📢 Status: Running on time
  ```

- **Fallback:**  
  Any other message will prompt a helpful reminder about the correct command.

---

## 📸 Working Demo

![screenshot](https://placehold.co/600x400?text=TrainStatusBot+in+Action)

---

## 🌱 Environment Variables

| Variable        | Description                                     |
| --------------- | ----------------------------------------------- |
| `BOT_TOKEN`     | Telegram Bot API token from BotFather           |
| `RAPID_API_KEY` | RapidAPI key for Indian Railway IRCTC API       |
| `PORT`          | (Optional) Port for HTTP server (default: 3000) |

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
- [RapidAPI Indian Railway IRCTC API](https://rapidapi.com/axisbits-axisbits-default/api/indian-railway-irctc/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Placeholder.com](https://placehold.co/) for screenshot images

---

## 📬 Contact & Support

- **Telegram:** [@Mohith321p](https://t.me/Mohith321)
- **Email:** mohith321p@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/mohith789p/Telegram-Bot/tree/main/Checklist%20Bot)

---

_Happy journeys with TrainStatusBot! 🚄_
