const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://i.imgyukle.com/2019/02/27/lhs78.png")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("** Yönetici Komutları 💢**", `
\n giriş-çıkış-ayarla = Resimli Sunucuya Hoşgeldin Güle Güle
\n hazırsunucu = Sunucu İçin Gerekli Kanaları Kurmanızı Sağlar 
\n küfürengelle = Küfür Engelleme Sistemini Açıp Kapatmanızı Sağlar 
\n linkengelle = Link Engelleme Sistemini Açık Kapatmanızı Sağlar
\n herkese-rol-ver = Herkese Etiketlenen  Rolü Verir.
\n herkesten-rol-al = Herkesten Etiketlenen Rolü Alır
\n otorol = Sunucuya Gelen Üyelere Otomatik Rol Vermenizi Sağlar
\n sayaç = Sunucuya Kaç Üye Gelip Gitiğini Görmenizi Sağlar
\n sustur = İstediğiniz Kişiyi Sunucuda Sustursunuz
\n üyeat = Sunucunuzdan Üye Atmanızı Sağlar
\n tagayarla = Sunucuya Gelen Üyelere Oto Tag Vermenizi Sağlar
\n temizle = Kanaldaki Mesajları Silmenizi Sağlar 
\n uyar = Etiketlenen Kulanıcıyı Uyarmanızı Sağlar 
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
  name: 'yönetici',
  description: 'Şarkı komutlarını gösterir..',
  usage: 'şarkı'
};
