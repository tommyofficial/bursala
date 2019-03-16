const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://i.imgyukle.com/2019/03/05/tqtbI.png")
  .setDescription('')
  .setColor(0x00ffff)
.addField("**Kulanıcı Komutları **", `
\n radyo = Listemizde Bulunan Radyoları Dinlemenizi Sağlar
\n ailemiz = Botun Hangi Sunucularda Olduğunu Gösterir
\n botdavet = KeyfeKeder Botumuzun Davet Linkini Gösterir
\n botlink = Yazdığınız Botun ID si ile Bir Bot Davet Linki Oluşturur
\n davet = Bulunduğunuz Sunucunun Davet Linkini Oluşturur
\n sunucuüye = Bulunduğunuz Sunucudaki Üye Bilgisini Gösterir
\n havadurumu = Girilen Lokasyon/Bölgenin Hava Durumunu Gösterir
\n tavsiye = Bot Sahibine Bot Hakında Tavsiye / Öneri Vermenizi Sağlar 
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
  name: 'kulanıcı',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};