const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if(!args[0]) return message.channel.send("Dizi ara!")
    require("request")(`https://acarla.glitch.me/api/dizi?ara=${args.join(" ")}&key=envycode`, function(x, y, body) {
        var veri = JSON.parse(body)
        if(veri.hata) return message.channel.send(veri.hata)
        var embed = new Discord.RichEmbed()
            .addField("İsim", veri.başlık)
            .addField("Devam ediyor mu?", veri.devamediyormu ? "Evet" : "Hayır")
            .addField("Süre", veri.süre)
            .addField("Kategoriler", veri.kategoriler.join(", "))
            .addField("Açıklama", veri.açıklama)
            .addField("Ülke", veri.ülke)
            .addField("Yapım yılı", veri.yapımyılı)
            .addField("Türkiye'de yayın tarihi", veri.sitedeyayınlanma)
            .addField("Sezonlar", veri.sezonlar)
            .addField("Bölümler", veri.bölümler)
            .addField("Takipçiler", veri.takipçiler)
            .addField("IMDB puanı", veri.imdb)
            .addField("Oy", `${veri.siteoylaması.oy} (${veri.siteoylaması.oylayanlar.toLocaleString()} kişi oylamış)`)
        message.channel.send(embed)
    })
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'dizi', 
  description: 'Dizi ararsanız.',
  usage: 'dizi [dizi ismi]'
};