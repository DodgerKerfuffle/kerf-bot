  
const ms = require('ms')
const { Permissions } = require('discord.js')

module.exports = {
    name : 'end',
    run : async(message, args, client) => {
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send('You do not have permissions to use this command')
        if(!args[1]) return message.channel.send('Please specify a message id')

        message.delete();
        client.giveaways.end(args[1])
        .catch(err => {
            console.log(err)
            message.channel.send(err)
        })
        
    }
}