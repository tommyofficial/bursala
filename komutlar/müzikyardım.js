const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://yunti.files.wordpress.com/2018/03/muzikliste_04.gif")
  .setDescription('')
  .setColor(0x00ffff)
 .addField("**📣 Müzik Komutları **", `
\n çal = Müziği başlatır 
\n geç = Şarkıyı Geçer
\n duraklat = Şarkıyı Duraklatır
\n devam = Şarkıyı Devam Etirir 
\n sıra = Sıradaki Şarkıyı Gösterir 
\n ◀️ Prefiximiz ▶️  { ➕ } Komutun Başına Ekleyiniz ⚠️
\n KeyfeKeder Müzik :musical_note: 
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
  aliases: [''],
  permLevel: 0
};
exports.help = {
  name: 'müzik',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};
