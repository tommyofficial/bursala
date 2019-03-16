const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://i.imgyukle.com/2019/02/27/lhDmo.png")
  .setDescription('')
  .setColor(0x00ffff)
.addField("** 📄 Komut Kategorileri **", `
\n Yönetici Komutları = yönetici 
\n Kulanıcı Komutları = kulanıcı
\n Kulanıcı Komutları 2 = kulanıcı+
\n Müzik Komutları = müzik
\n Eğlence Komutları = eğlence
\n Botun Kendi Gerekli Kanaların Kurabilmesi İçin ⭐️ botkurulum ⭐️
\n ◀️ Prefiximiz ▶️  { ➕ } Komutun Başına Ekleyiniz ⚠️
\n KeyfeKeder 🌀 Discord Botu
`)
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['YARDIM','Yardım'],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};
