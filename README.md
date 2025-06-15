# 📦 Telegram-Bot Collection

Welcome to the **Telegram-Bot Collection** — a curated suite of modular, purpose-driven Telegram bots built with Node.js and the Telegram Bot API.  
This repository serves as a central hub for all individual bot services, making it easy to explore, deploy, and extend a variety of useful bots for different needs.

---

## 📖 Description

This project brings together several standalone Telegram bots, each designed to solve a specific problem or automate a daily task.  
Whether you want to manage your to-dos, generate AI art, check train statuses, or get real-time weather updates, you’ll find a dedicated bot here.  
All bots are written in JavaScript (Node.js), follow best practices, and are easy to set up and extend.

---

## 🤖 Included Bots

| Bot Name              | Description                                       |
| --------------------- | ------------------------------------------------- |
| **Checklist Bot**     | 📝 Manage personal to-do lists and tasks.         |
| **PicGeneration Bot** | 🎨 Generate images or AI art via simple commands. |
| **TrainStatus Bot**   | 🚆 Fetch real-time train running status in India. |
| **Weather Bot**       | 🌦️ Get current weather updates based on location. |

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **node-telegram-bot-api** – Telegram Bot API library
- **Firebase Firestore** – Cloud NoSQL database (where applicable)
- **dotenv** – Environment variable management

---

## 📁 Folder Structure

```text
    Telegram-Bot/
    ├── Checklist Bot/        # Personal checklist manager bot
    ├── PicGeneration Bot/    # Image generation bot
    ├── TrainStatus Bot/      # Real-time train info bot
    ├── Weather Bot/          # Live weather updates bot
    ├── .gitignore
    └── README.md
```

Each bot is self-contained with its own code, dependencies, and documentation.

---

## 🚀 Setup Instructions

1. **Navigate to the desired bot’s folder:**

   Each bot is located in its own subdirectory inside the `Telegram-Bot` project. Choose the bot you want to run (e.g., `Checklist Bot`, `Weather Bot`, etc.).

2. **Install dependencies:**

   Inside the selected folder, run:

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a .env file in the same folder and add the required keys (e.g., BOT_TOKEN, API keys, Firebase config, etc.). Details for each bot’s required configuration are available in their individual README.md files.

4. **Start the bot:**
   ```bash
   node index.js
   ```

## 👥 Contributing

We welcome contributions for new bots or improvements to existing ones!  
To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add new bot or feature'`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request with clear documentation.

Please ensure your code is well-documented and tested.

---

## ✨ Why Use This Collection?

- **Modular:** Each bot is independent and easy to deploy.
- **Extensible:** Add new bots or features with minimal effort.
- **Open Source:** Free to use, modify, and share.
- **Developer-Friendly:** Clean code, clear structure, and helpful docs.

---

## 📬 Contact & Support

- **Email:** mohith321p@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/mohith789p/Telegram-Bot/issues)
- **Pull Requests:** [Submit a PR](https://github.com/mohith789p/Telegram-Bot/pulls)

---

_Happy automating with the Telegram-Bot Collection! 🚀_
