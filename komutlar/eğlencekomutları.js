const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://i.imgyukle.com/2019/02/27/lhl6Q.png")
  .setDescription('')
  .setColor(0x00ffff)
.addField("** 🎡  Eğlence Komutları **", `
\n aşkölçer = İki Kulanıcı Arasındaki Aşk Seviyesini Ölçer
\n dizi = Yabancı Dizilerin Bilgilerini Gösterir
\n film = Yabancı Filmlerin Bilgilerini Gösterir
\n kp = Rastgele komik paylaşımlar atar
\n nahçek = İstediğiniz Kişiye Nah Çekersiniz
\n pikaçhu = Pikaçhu gifi Paylaşır
\n sev = İstediğiniz Kişiye Sev Gifti Gönderir
\n slots = Slot Makine Oyunu Oynarsınız
\n sınav = Bot Rasgele Soru Sorar
\n yala = Dondurma Yalarsınız
\n yumrukat = Yumruk Gifti Paylaşır
\n zarat = Bot Rasgele Zar Atar 
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
  aliases: [''],
  permLevel: 0
};
exports.help = {
  name: 'eğlence',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};
