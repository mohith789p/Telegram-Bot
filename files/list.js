const token = "7445002659:AAF_aMiVQeemQJakqfgzENKd2QIxxgL12wQ";
const TelegramBot = require("node-telegram-bot-api");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const services = require("./services.json");

const bot = new TelegramBot(token, { polling: true });

initializeApp({
  credential: cert(services),
});

const db = getFirestore();

// Start command
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userid = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userid);

  try {
    const doc = await userDoc.get();
    if (!doc.exists) {
      await userDoc.set({
        name: msg.from.first_name || "Unknown",
        userid: userid,
        username: msg.from.username || "N/A",
        taskList: [],
        timeStamp: new Date(msg.date * 1000),
      });
    }

    bot.sendMessage(
      chatId,
      "👋 *Welcome to the Checklist Bot!*\n\n" +
        "📌 Use /add <task> to add a new task\n" +
        "🗑️ Use /remove <task_number> to delete a task\n" +
        "📋 Use /list to view all tasks\n" +
        "✅ Use /done <task_number> to mark a task as done\n",
      { parse_mode: "Markdown" }
    );
  } catch (error) {
    console.error("❌ Error handling user data:", error);
  }
});

// Help command
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 *Here are your available commands:*\n\n" +
      "📌 Use /add <task> to add a new task\n" +
      "🗑️ Use /remove <task_number> to delete a task\n" +
      "📋 Use /list to view all tasks\n" +
      "✅ Use /done <task_number> to mark a task as done\n",
    { parse_mode: "Markdown" }
  );
});

// Add task
bot.onText(/\/add (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const task = match[1].trim();
  const userid = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userid);

  try {
    const doc = await userDoc.get();
    let taskList = doc.data()?.taskList || [];

    taskList.push({ task, done: false });
    await userDoc.set({ taskList }, { merge: true });

    bot.sendMessage(chatId, `✅ *Task added successfully!*`, {
      parse_mode: "Markdown",
    });
  } catch (e) {
    console.error("❌ Error while adding Task:", e);
    bot.sendMessage(chatId, "❌ Failed to add task. Please try again.");
  }
});

// Remove task
bot.onText(/\/remove (\d+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const taskIndex = parseInt(match[1], 10) - 1;
  const userId = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userId);

  try {
    const doc = await userDoc.get();
    let taskList = doc.data()?.taskList || [];

    if (taskIndex < 0 || taskIndex >= taskList.length) {
      return bot.sendMessage(chatId, "❌ Invalid task number!");
    }

    taskList.splice(taskIndex, 1);
    await userDoc.set(
      { taskList: taskList.length ? taskList : [] },
      { merge: true }
    );

    bot.sendMessage(chatId, "✅ Task removed.");
  } catch (e) {
    console.error("❌ Error while removing Task:", e);
  }
});

// List tasks
bot.onText(/\/list/, async (msg) => {
  const chatId = msg.chat.id;
  const userid = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userid);

  try {
    const doc = await userDoc.get();
    let taskList = doc.data()?.taskList || [];

    if (taskList.length === 0) {
      return bot.sendMessage(chatId, "✅ Your checklist is empty.");
    }

    let send = "📝 *Your Checklist:*\n\n";
    taskList.forEach((task, index) => {
      send += `*${index + 1}.* ${task.task} - ${
        task.done ? "✅ Done" : "⏳ Pending"
      }\n`;
    });

    bot.sendMessage(chatId, send, { parse_mode: "Markdown" });
  } catch (e) {
    console.error("❌ Error retrieving tasks:", e);
  }
});

// Mark task as done
bot.onText(/\/done (\d+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const taskIndex = parseInt(match[1], 10) - 1;
  const userid = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userid);

  try {
    const doc = await userDoc.get();
    let taskList = doc.data()?.taskList || [];

    if (taskIndex < 0 || taskIndex >= taskList.length) {
      return bot.sendMessage(chatId, "❌ Invalid task number!");
    }

    if (taskList[taskIndex].done) {
      return bot.sendMessage(chatId, "⚠️ Task is already marked as done.");
    }

    taskList[taskIndex].done = true;
    await userDoc.set({ taskList }, { merge: true });

    bot.sendMessage(chatId, `✅ Task ${taskIndex + 1} marked as done!`);
  } catch (e) {
    console.error("❌ Error marking task as done:", e);
  }
});
// Clear all tasks
bot.onText(/\/clear/, async (msg) => {
  const chatId = msg.chat.id;
  const userid = String(msg.from.id);
  const userDoc = db.collection("checkList").doc(userid);

  try {
    await userDoc.update({ taskList: [] });
    bot.sendMessage(chatId, "🧹 All tasks have been cleared!");
  } catch (e) {
    console.error("❌ Error clearing tasks:", e);
    bot.sendMessage(chatId, "❌ Failed to clear tasks. Please try again.");
  }
});

// Handle non-command messages
bot.on("message", (msg) => {
  if (!msg.text.startsWith("/")) {
    bot.sendMessage(msg.chat.id, "Use /help to see the list of commands.");
  }
});

console.log("Bot is running...");
