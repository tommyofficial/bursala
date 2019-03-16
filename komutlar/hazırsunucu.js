const Discord = require('discord.js');

exports.run = (client, message, params) => {
    if (message.member.hasPermission('MANAGE_GUILD')) {
        
        message.channel.send('<a:loading:522816642556887040> **Wedge Botu için gerekli şeyler kuruluyor...**');
        
        message.guild.createChannel('Hoşgeldiniz', 'category');
        
        message.guild.createChannel('hoşgeldiniz');
        
        message.guild.createChannel('duyurular');
        
        message.guild.createChannel('level-sistemi');
    
        message.guild.createChannel('etkinlikler');
      
        message.guild.createChannel('partners');
      
        
        message.guild.createChannel('Chat Channel', 'category');
      
        message.guild.createChannel('sohbet-muhabbet');
        
        message.guild.createChannel('resimler-görseller');

        message.guild.createChannel('bot-kullanım');
        
        message.guild.createChannel('müzik-şarkı');
        
        message.guild.createChannel('Chat Room', 'category');
        
        message.guild.createChannel('Sohbet / 1', 'voice');
        
        message.guild.createChannel('Sohbet / 2', 'voice');
        
        message.guild.createChannel('Music', 'category');
        
        message.guild.createChannel('Music', 'voice');
        
        message.guild.createChannel('Music / 2', 'voice');
        
        message.guild.createChannel('Music / 3', 'voice');
        
        message.channel.send(':white_check_mark:: **Herşey Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu kullanmak için yetkin yok!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'hazırsunucu',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'sunucu-yap'
};
   
