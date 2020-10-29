const Discord = require("discord.js");
const client = new Discord.Client();
const parser = require("discord-command-parser");
const log = require(__dirname + "/log.js");
const fs = require("fs");
const prefix = ".";

var commands = [];

var commandFiles = fs
  .readdirSync(`${__dirname}/commands`)
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`${__dirname}/commands/${file}`);
  commands.push({ name: command.name, command: command.command });
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  log.log(msg);
  const parsed = parser.parse(msg, prefix, { allowSpaceBeforeCommand: true });

  if (!parsed.success) return;

  handleCommand(msg, parsed.command);
});

async function handleCommand(msg, command) {
  commands.find((element) => {
    if (command.toLowerCase() == element.name.toLowerCase()) {
      element.command(msg);
      return;
    }
  });
}


client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.login("NzM3NTkwNDc2NzQzNTA3OTky.Xx_kqQ.9Kj0F0_rdgBq6SX2gwuFPvenFkg");
