const Discord = require('discord.js');

exports.run = (bot, message) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('❌ Kanaları Yönet Yetkiniz Bulunmamaktadır');
  if (!args) return message.reply("Yeni Kanal Açıklamasını Yazmanız Gerekmektedir❗️")
  message.channel.setTopic(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni konusu ***${args}***`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 3
};

exports.help = {
  name: 'kanalaçıklaması',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};