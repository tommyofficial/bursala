const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:hayirr:513258163516997662> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkese rol verebilmem için bir rol etiketlemelisin.')
  
  
   const embed = new Discord.RichEmbed()
     .setDescription(`Herkese ${rol} adlı rol verildi!`)
   .setThumbnail(`http://www.hareketligifler.net/data/media/583/yeni-hareketli-resim-0115.gif`)
        .setColor(rol.hexColor)
   const ver = new Discord.RichEmbed()
   .setDescription('Bir kullanıcıya ``' + rol.name + '`` adlı rol verildi!')
   .setColor(rol.hexColor)
   
   message.guild.members.forEach(u => {
u.addRole(rol)
})
  // message.channel.send('Herkese **'+ rol.name +'** adlı rol verildi!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-ver'],
    permLevel: 3
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Herkese rol verir.',
    usage: 'herkese-rol-ver @rol / rol-ismi'
}