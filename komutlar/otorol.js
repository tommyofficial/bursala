const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));


exports.run = async (bot, message, args) =>
{
      let profil = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(" Ayarlamam İçin Bir Rol Etiketlemelisiniz  \nRolü Etiketleyemiyorsan ** Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma **  \n 📢 Örnek Kullanım : +otorol @rol #kanal \n 📢 Önemli Not : Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem ☣️");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**📢 Doğru Kullanım = +otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));
      

    if(!profil[message.guild.id]){
    
        profil[message.guild.id] = {
      
            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }
    
    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("./autorole.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.RichEmbed()
        .setDescription(`☑️  Otorol başarıyla ${args[0]} olarak ayarlandı! \n☑️  Otorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı`)
        .setColor("RANDOM")
        
    message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}