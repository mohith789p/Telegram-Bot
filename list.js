const TelegramBot = require('node-telegram-bot-api');
const token = '7445002659:AAFmkiOnBxBqTUF8ayRpod_eqa6ygh_tqvs';
const bot = new TelegramBot(token, { polling: true });

// On starting the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to the Checklist Bot!\n" +
    "use \"/add <task> \" to add a new task\n" +
    "use \"/remove <task_number>\" to delete the task\n" +
    "use \"/list\" to view all tasks\n" +
    "use \"/done <task_number>\" to mark a task as done\n"
  );
});

const checklist = {};

// Add a new task
bot.onText(/\/add (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const task = match[1].trim();

  if (!checklist[chatId]) {
    checklist[chatId] = [];
  }

  checklist[chatId].push({ task, done: false });
  bot.sendMessage(chatId, "Task added.");
});

// remove a task
bot.onText(/\/remove (\d+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const taskIndex = parseInt(match[1], 10) - 1;
    const userchecklist = checklist[chatId] || [];
  
    if (taskIndex < 0 || taskIndex >= userchecklist.length) {
      bot.sendMessage(chatId, "Invalid task number!");
      return;
    }
  
    userchecklist.splice(taskIndex, 1);
    bot.sendMessage(chatId, "Task removed.");
  });

// List all tasks
bot.onText(/\/list/, (msg) => {
  const chatId = msg.chat.id;
  const userchecklist = checklist[chatId] || [];

  if (userchecklist.length === 0) {
    bot.sendMessage(chatId, "Your checklist is empty.");
    return;
  }

  const tasks = userchecklist
                .map((list, index) => (index+1) + ") " + list.task + " - " + (list.done ? "Done" : "Pending"))
                .join("\n");

  bot.sendMessage(chatId, "Your Checklist:\n" + tasks);
});

// Mark a task as done
bot.onText(/\/done (\d+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const taskIndex = parseInt(match[1], 10) - 1;
  const userchecklist = checklist[chatId] || [];

  if (taskIndex < 0 || taskIndex >= userchecklist.length) {
    bot.sendMessage(chatId, "Invalid task number!");
    return;
  }

  userchecklist[taskIndex].done = true;
  bot.sendMessage(chatId, "Task marked as done!");
});

// other
bot.on('message', (msg) => {
  if (!msg.text.startsWith("/")) {
    bot.sendMessage(msg.chat.id, "Use /start to see the list of commands.");
  }
});

console.log("Bot is running...");