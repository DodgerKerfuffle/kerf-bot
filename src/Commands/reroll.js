const { MessageEmbed, Permissions } = require('discord.js')

module.exports = {
    name : 'reroll',
    run : async(message, args, client) => {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send('You do not have permission')

        if(!args[1]) return message.channel.send('Please specify a message id')

        client.giveaways.reroll(args[1])
            .catch(err => {
            console.log(err)
            message.channel.send(err)
        })
    }
}