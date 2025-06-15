# ✅ Checklist

A simple, powerful Telegram bot for managing personal checklists and to-dos — right from your chat!  
Stay organized, productive, and never forget a task again.

---

## 📖 Project Description

**Checklist Bot** is a Telegram bot that lets users create, manage, and track their personal to-do lists directly within Telegram. Designed for anyone who wants a fast, distraction-free way to keep track of tasks, this bot is perfect for students, professionals, and anyone who loves productivity tools.  
All data is securely stored in Firestore, ensuring your checklists are always available and private.

---

## 🚀 Features

- **Add Tasks**: Quickly add new tasks to your checklist.
- **Remove Tasks**: Delete tasks by their number.
- **List Tasks**: See all your tasks and their statuses.
- **Mark as Done**: Mark any task as completed.
- **Clear All**: Instantly clear your entire checklist.
- **User-specific Storage**: Each user's tasks are private and securely stored.
- **Persistent Data**: Uses Firebase Firestore for reliable, cloud-based storage.
- **Friendly Commands**: Simple, intuitive Telegram commands.
- **Help Command**: Get a list of all available commands anytime.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **node-telegram-bot-api** – Telegram Bot API library
- **firebase-admin** – Firebase Admin SDK for Firestore
- **Firestore** – NoSQL cloud database
- **dotenv** – Environment variable management

---

## ⚡ Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/mohith789p/Telegram-Bot.git
   cd Checklist Bot
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up environment variables:**

- Create a `.env` file in the root directory with the following variables:

  ```
  BOT_TOKEN=your_telegram_bot_token
  FIREBASE_CONFIG=your_firebase_service_account_json
  PORT=3000
  ```

- `BOT_TOKEN`: Obtain from [BotFather](https://t.me/BotFather) on Telegram.
- `FIREBASE_CONFIG`: Paste your [Firebase service account JSON](https://firebase.google.com/docs/admin/setup#initialize-sdk) as a single line string.

4. **Start the bot:**
   ```
   node index.js
   ```

---

## 📝 Usage

**Interact with the bot via Telegram chat:**

| Command                 | Description                         | Example              |
| ----------------------- | ----------------------------------- | -------------------- |
| `/start`                | Start the bot & see welcome message | `/start`             |
| `/help`                 | Show all available commands         | `/help`              |
| `/add <task>`           | Add a new task                      | `/add Buy groceries` |
| `/remove <task_number>` | Remove a task by its number         | `/remove 2`          |
| `/list`                 | List all tasks                      | `/list`              |
| `/done <task_number>`   | Mark a task as done                 | `/done 1`            |
| `/clear`                | Remove all tasks                    | `/clear`             |

---

## 📸 Working Demo

![screenshot](https://placehold.co/600x400?text=Checklist+Bot+Screenshot)

---

## 🌱 Environment Variables

| Variable          | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `BOT_TOKEN`       | Telegram Bot API token from BotFather                 |
| `FIREBASE_CONFIG` | Firebase Admin SDK service account JSON (as a string) |
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

---

## 🙏 Credits

- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [firebase-admin](https://firebase.google.com/docs/admin/setup)
- [dotenv](https://github.com/motdotla/dotenv)
- Telegram for the awesome platform
- [Placeholder.com](https://placehold.co/) for screenshot images

---

## 📬 Contact & Support

- **Telegram:** [@Mohith321p](https://t.me/Mohith321)
- **Email:** mohith321p@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/mohith789p/Telegram-Bot/tree/main/Checklist%20Bot)

---

_Happy productivity! 🚀_
