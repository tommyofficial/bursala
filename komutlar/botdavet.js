const Discord = require('discord.js');


exports.run = function(client, message,) {

// Avatar linkini ekleyin.
let avatar = "http://www.hareketligifler.net/data/media/903/turkiye-bayragi-hareketli-resim-0024.gif"



const embed = new Discord.RichEmbed()
        .setTitle(`Geliştirici`)
        // Discord nickinizi ve idnizi ekleyin, isteğe göre bağlantı ekleyebilirsiniz.
        .setDescription(` <@271635028264353794>`)
        .setImage(avatar)
    .addField("KeyfeKeder BOT", "[DAVET](https://is.gd/0nSLgR)",true)
    .addField("DESTEK SUNUCUMUZ", "[LİNK](https://is.gd/c9wbMU)  ",true)
    .addField("DBLDE BİZE OY VERMEK İSTERSENİZ", "[LİNK](https://is.gd/PootCz)  ",true)
        .setColor(3447003)
        

        message.channel.send(embed)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['bd', 'BD',''], 
  permLevel: 0
};

exports.help = {
  name: 'botdavet',
  description: 'Bot sahibinin profilini gösterir.', 
  usage: 'developer'

};