const ms = require('ms')
const { MessageEmbed, Permissions } = require('discord.js')

module.exports = {
    name : 'giveaway',
    run : async(message, args, client) => {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send('You dont have manage messages permission.')
        
        message.delete().catch(err => {
            console.log(err)
        });
        const duration = args[1]
        if(!duration) return message.channel.send('please enter a valid duration')

        const winners = args[2]
        if(Number.isNaN(+winners)) return message.channel.send('Please specify an amount of winners')

        const roleName = message.guild.roles.cache.find(role => role.name.toLowerCase().includes(args[3].toLowerCase()));
        if (!roleName) return message.channel.send('Please specify a role');

        const prize = args.slice(4).join(" ")
        if(!prize) return message.channel.send('Please specify a prize to win')

        client.giveaways.start(message.channel, {
            duration : parseInt(ms(duration)),
            prize : prize,
            winnerCount: parseInt(winners),
            hostedBy: message.author,
            exemptMembers: new Function('member', `return !member.roles.cache.some((r) => r.name === \'${roleName.name}\')`),
            messages: {
                giveaway: " ",
                giveawayEnd: " ",
                drawing: "Ending {timestamp}",
                inviteToParticipate: "React with 🎉 to join the giveaway",
                winMessage: "Congrats {winners}, you have won the giveaway",
                embedFooter: `${winners} winner(s)`,
                noWinner: "Could not determine a winner",
                hostedBy: `Required Role: <@&${roleName.id}>\nHosted by ${message.author}`,
                winners: "Winner(s):",
                endedAt: 'Ended at',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            },
           
        })
    }
}