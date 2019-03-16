const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
   
   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`📝  Birşeyler Yazmanız Gerekmektedir`)).then(m => m.delete(5000));

     console.log("+oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("BLUE")
       .setThumbnail(client.user.avatarURL)
       .setFooter('KeyfeKeder Oylama Sistemi')

       .addField(`**Sizler İçin Yeni Bir Oylama Mesajımız Var 📊**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '.oylama <oylamaismi>'
};
