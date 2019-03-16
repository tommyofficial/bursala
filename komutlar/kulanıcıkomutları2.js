const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://i.imgyukle.com/2019/03/05/tqlD1.png")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**Kulanıcı Komutları 2 **", `
\n notal,notum,not-sıfırla = Bota Not Yazdırmanızı Sağlar
\n bug-bildir = Komutlarda Bulunan Bug Hataları Yapımcıya Bildirir
\n sunucubilgi = Bulunduğunuz Sunucu hakkında bilgi verir
\n fortnite = Fortnite Pc Deki Profil Hakında Bilgi Verir
\n steamoyun = Steamdaki Oyun Hakında Bilgileri Gösterir 
\n google = Googleden Arama Yaparsınız Bot Link Gönderir
\n csgo = CSGO İstatistiklerini Gösterir
\n  twitch = Twitch Kanalı Hakkında Bilgi Verir
\n songörülme = Etiketlenen Kişinin Son Görülme Zamanını Belirtir
\n ◀️ Prefiximiz ▶️  { ➕ } Komutun Başına Ekleyiniz ⚠️
\nKeyfeKeder 🌀 Discord Botu
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
  name: 'kulanıcı+',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};