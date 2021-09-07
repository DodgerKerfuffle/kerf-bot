module.exports = {
    name: 'help',
    run: async (message, args, client) => {
        if (args[1] === 'date') {
            message.channel.send('Calculates a given route and displays whether or not it is a winning route along with statistics. \nInput exactly 25 moves separated by a comma after the command\nThe acceptable commands are: move, up, down, left, right, gas, italian, taco, sandwich, fair, juice, coffee, nightclub, flower, dance, theater, airport, ring, mall, home\n\nExample: kerfdate up, fair, up, left, juice, left, taco, up, nightclub, up, italian, flower, up, gas, right, coffee, theater, right, gas, right, sandwich, move, move, move, move ')
        }
        else if (args[1] === 'giveaway') {
            message.channel.send('This command creates a giveaway. The proper format for creating a giveaway is: "kerfgiveaway [duration] [# of winners] [role] [title of giveaway/prize]"\nExample: kerfgiveaway 1d 1 mod discord nitro\nNote: You cannot ping a role to use it for a giveaway, you simply just type out the role. Additionally, if a role has spaces, just type one of the words and the bot will find it.')
        }
        else if (args[1] === 'end') {
            message.channel.send('Ends a giveaway. The proper format is "kerfend [messageID of giveaway]"')
        }
        else if (args[1] === 'reroll') {
            message.channel.send('Rerolls a giveaway. The proper format is "kerfreroll [messageID of giveaway]"')
        }
        else {
            message.channel.send('Available commands:\ndate\ngiveaway, end, reroll\n\nIf you want to know more about a command, type "kerfhelp [command]"\nExample: kerfhelp date')
        }
    }
}