const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {
  db.delete(`nots_${message.author.id}`)
  const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
  .setDescription('Notun **sıfırlandı!**')
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'not-sıfırla',
  description: 'Özel komut.',
  usage: 'not-sıfırla'
};