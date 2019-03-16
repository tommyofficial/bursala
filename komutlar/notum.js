const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
     //db.fetch(`nots_${message.author.id}`).then(i => {
    let not = await db.fetch(`nots_${message.author.id}`);
  let notYazi;
  if (not == null) notYazi = 'Yok!'
  else notYazi = `${not}`
  const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
  .setDescription('Notun: **'+ notYazi +'**')
     message.channel.send(embed)
   }
                                                    ;
  ;
 
                                                    ;
  ;

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'notum',
  description: 'Özel komut.',
  usage: 'notum'
};