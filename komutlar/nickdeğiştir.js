const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let nuser = message.mentions.users.first();
  let nick = args.slice(1).join(" ");
 if(!args[0] || args[0] === "help") return message.reply(`Kullanım: +nick <kullanıcı> <nick>`);
 if(!message.author.hasPermission("ADMINISTRATOR")) return;

   message.delete().catch(O_o=>{});
   message.guild.member(nuser).setNickname(nick);

   let nEmbed = new Discord.RichEmbed()
   .setTitle("Nick Değiştirildi")
   .setColor("BLUE")
   .setFooter(`Değiştiren: ${message.author.tag}`,`${message.author.avatarURL}`)
   .setDescription(`${nuser}'nick olarak değiştirildi ${nick}`);
   
 message.channel.send(nEmbed).then(msg => msg.delete(10000));

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ndeğiş","nick","nickname"],
  permLevel: 3
};

module.exports.help = {
  name: 'nickdeğiştir',
  description: '',
  usage: 'nickdeğiş'
};