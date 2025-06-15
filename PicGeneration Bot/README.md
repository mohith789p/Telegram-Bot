# 🎨 Genpic

A Telegram bot that transforms your imagination into images using AI!  
Send a prompt, and instantly receive a unique, AI-generated image right in your chat.

---

## 📖 Project Description

**Genpic** is an AI-powered Telegram bot that generates images from natural language prompts. Users simply send a message describing what they want to see, and the bot replies with a custom-generated image using the Pollinations AI API.  
Perfect for artists, content creators, educators, or anyone who wants to visualize ideas quickly and effortlessly, Genpic makes creative exploration accessible to everyone, right from Telegram.

---

## 🚀 Features

- **Prompt-to-Image Generation**: Send any text prompt and receive a unique AI-created image.
- **Fast & Reliable**: Quick responses and robust error handling.
- **Image Downloading**: Images are downloaded and sent as Telegram photos.
- **Prompt History**: User prompts and generated image URLs are saved in Firestore for analytics or future use.
- **Cloud-Ready**: Easily deployable and scalable.
- **Simple User Experience**: No commands needed—just send your prompt!

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **node-telegram-bot-api** – Telegram Bot API library
- **axios** – HTTP client for API/image requests
- **firebase-admin** – Firebase Admin SDK for Firestore integration
- **Firestore** – NoSQL cloud database for storing prompts and image data
- **dotenv** – Environment variable management
- **Pollinations API** – AI image generation service

---

## ⚡ Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/mohith789p/Telegram-Bot.git
   cd PicGeneration Bot
   ```

2. **Install dependencies:**
   npm install

3. **Configure environment variables:**

- Create a `.env` file in the root directory:
  ```
  BOT_TOKEN=your_telegram_bot_token
  FIREBASE_CONFIG=your_firebase_service_account_json
  PORT=3000
  ```
- `BOT_TOKEN`: Get from [BotFather](https://t.me/BotFather) on Telegram.
- `FIREBASE_CONFIG`: Paste your [Firebase service account JSON](https://firebase.google.com/docs/admin/setup#initialize-sdk) as a single-line string.

4. **Start the bot:**
   ```
   node index.js
   ```

---

## 📝 Usage

- **Interact via Telegram:**

1. Open a chat with your bot.
2. Send any descriptive prompt (e.g., `A futuristic city at sunset`).
3. Wait a few seconds—the bot will reply with a unique AI-generated image!

- **Example Prompts:**
- `A cat riding a skateboard`
- `A serene mountain landscape in watercolor`
- `Cyberpunk astronaut in neon lights`

---

## 📸 Working Demo

![screenshot](https://placehold.co/600x400?text=Genpic+in+Action)

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

## 🙏 Credits

- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [axios](https://github.com/axios/axios)
- [firebase-admin](https://firebase.google.com/docs/admin/setup)
- [Pollinations AI](https://pollinations.ai/) for image generation
- [dotenv](https://github.com/motdotla/dotenv)
- [Placeholder.com](https://placehold.co/) for screenshot images

---

## 📬 Contact & Support

- **Telegram:** [@Mohith321p](https://t.me/Mohith321)
- **Email:** mohith321p@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/mohith789p/Telegram-Bot/tree/main/Checklist%20Bot)

---

_Unleash your imagination with Genpic! 🚀_
