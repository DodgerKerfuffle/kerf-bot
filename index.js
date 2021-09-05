// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


const prefix = 'kerf';
var gas = 100;
var food = 50
var drink = 50;
var entertainment = 75;
var time = 100;
var exitvar = 0;
client.on('message', msg => {
	if (!msg.content.startsWith(prefix)) return;
	if (msg.content.startsWith(prefix + 'date')){
		var split = msg.toString().replace('kerfdate','').split(',')
		gas = 100;
		food = 50;
		drink = 50;
		entertainment = 75;
		time = 100;
		exitvar = 0;
		if (split.length < 25 || split.length > 25){
			msg.reply('Please put in 25 moves');
		}
		else{
		for (let i = 0; i < split.length; i++){
			if (split[i].includes('move')){
				gas = gas - 10;
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('gas')){
				gas = 100;
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('italian')){
				food = food + 56;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('taco')){
				food = food + 56;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('sandwich')){
				food = food + 36;
				drink = drink + 14;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('fair')){
				food = food + 16;
				drink = drink + 14;
				entertainment = entertainment + 32;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('juice')){
				food = food - 4;
				drink = drink + 54;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('coffee')){
				food = food - 4;
				drink = drink + 54;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('nightclub')){
				food = food - 4;
				drink = drink + 34;
				entertainment = entertainment + 32;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('flower')){
				food = food - 4;
				drink = drink - 6;
				entertainment = 100;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('dance')){
				food = food - 14;
				drink = drink - 21;
				entertainment = 100;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('theater')){
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment + 52;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('airport')){
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 18;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('ring')){
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('mall')){
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else if (split[i].includes('home')){
				food = food - 4;
				drink = drink - 6;
				entertainment = entertainment - 8;
				time = time - 4;
				checkValues(msg, i);
				if (exitvar === 1){
					break;
				}
			}
			else{
				msg.reply('Invalid input detected');
				break;
			}
		}
	}
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

function checkValues(msg, i){
	if (gas >= 100){
		gas = 100;
	}
	if (food >= 100){
		food = 100;
	}
	if (drink >= 100){
		drink = 100;
	}
	if (entertainment >= 100){
		entertainment = 100;
	}
	if (time === 0){
		msg.reply(`Successful date with the following stats:\nGas: ${gas}\nFood: ${food}\nDrink: ${drink}\nEntertainment: ${entertainment}`);
		exitvar = 1;
	}
	if (gas === 0){
		msg.reply(`Ran out of gas on turn ${i+1} with the following stats:\nGas: ${gas}\nFood: ${food}\nDrink: ${drink}\nEntertainment: ${entertainment}`);
		exitvar = 1;
	}
	else if (food <= 0){
		msg.reply(`Ran out of food on turn ${i+1} with the following stats:\nGas: ${gas}\nFood: ${food}\nDrink: ${drink}\nEntertainment: ${entertainment}`);
		exitvar = 1;
	}
	else if (drink <= 0){
		msg.reply(`Ran out of drink on turn ${i+1} with the following stats:\nGas: ${gas}\nFood: ${food}\nDrink: ${drink}\nEntertainment: ${entertainment}`);
		exitvar = 1;
	}
	else if (entertainment <= 0){
		msg.reply(`Ran out of entertainment on turn ${i+1} with the following stats:\nGas: ${gas}\nFood: ${food}\nDrink: ${drink}\nEntertainment: ${entertainment}`);
		exitvar = 1;
	}
}

// Login to Discord with your client's token
client.login(token);