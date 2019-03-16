const Discord = require('discord.js');


exports.run = (client, message, params) => {

        
        message.channel.send('🛠 **KeyfeKeder Botumuz İçin Gerekli Kanaları Ayarlıyoruz...**').then(m => m.delete(9000))
        
        message.guild.createChannel('mod-log');
        message.guild.createChannel('giriş-çıkış')
        message.guild.createChannel('sayaç')
        message.guild.createChannel('davet-takip')
        message.guild.createChannel('cezalılar')
        message.guild.createChannel('keyfekeder-log-sistemi')
        
        message.channel.send(' **📢 Herşey Ayarlandı Bizi Tercih Etiğiniz İçin Teşekkür Ediyoruz**').then(m => m.delete(9000))
        
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'botkurulum',
  description: 'Bot için gerekli ayarları kurar.',
  usage: '.kur'
};