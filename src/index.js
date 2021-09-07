// Require the necessary discord.js classes
const Client = require("./Structures/Client.js");

const Command = require("./Structures/Command.js");

const config = require("./Data/config.json");
require('dotenv').config()

const { GiveawaysManager } = require('discord-giveaways')
// Create a new client instance
const client = new Client();
const fs = require('fs');

client.giveaways = new GiveawaysManager(client, {
	storage : './giveaways.json',
	updateCountdownEvery: 5000,
	embedColor: '#ff0000',
	reaction : 'tada'
})

fs.readdirSync("./Commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./Commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
	if (msg.author.bot) return;

	if (!msg.content.startsWith(config.prefix)) return;

	const args = msg.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return msg.reply(`${args[0]} is not a valid command!`);

	command.run(msg, args, client);
});



// Login to Discord with your client's token
client.login('ODg0MTA0Mjc5NTY3MjU3Njgy.YTToRg.up0_bcuSxu1Kpsn-1_JZDWzXKCI');