const Discord = require('discord.js');
exports.run = (client, message, args) => {
      
   if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x808080)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(':fire: Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }  
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Uyarı sebebini, belirtmelisiniz!');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyarmam gerekiyor?').catch(console.error);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠️ Uyarı ⚠️', 'Bunu Yapamak İçin Yetkin Yetersiz')
    return message.author.sendEmbed(botunmesajyonet);
  }
  message.delete();
  message.reply('Kişi, başarılı bir şekilde uyarıldı!')
  const embed = new Discord.RichEmbed()
  .setColor('0x808080')
  .setTitle(`**Yanlış giden birşeyler var ❗️ **`)
  .setDescription('💢 Kuralların, ihlali gerekçesi nedeni ile uyarıldınız ❗️')
  .addField('📝 Belirtilen, sebep;', reason)
  .setFooter(' KeyfeKeder Bot 🌀 iyi eğlenceler diler!', client.user.avatarURL)
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 3
};

exports.help = {
  name: 'uyar',
  description: 'Belirtilen kullanıcıyı, uyarır!',
  usage: 'uyar'
};