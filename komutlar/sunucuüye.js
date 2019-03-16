const { Canvas } = require("canvas-constructor");
const { get } = require("snekfetch");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const botCount = message.guild.members.filter(m => m.user.bot).size;
    const humanCount = serverSize - botCount;
    const guildName = message.guild.name;
    get(message.guild.iconURL).then(guildIcon => {
        const canvas = new Canvas(400, 200)
        .setColor("#2C2F33")
        .addRect(0, 0, 400, 200)
        .setColor("#ffffff")
        .setTextFont('25px Impact')
        //.setTextAlign("center")
        .addText(`Sunucu Üye Bilgileri`, 10, 50)
        .setTextFont('20px Impact')
        .addText(`Toplam: ${serverSize}`, 10, 125)
        .addText(`Üye Sayısı: ${humanCount}`, 10, 150)
        .addText(`Bot Sayısı: ${botCount}`, 10, 175)
        .addRoundImage(guildIcon.body, 255, 59, 128, 128, 64) // 64
        .save();
        
        message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
    });
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucuüye","sunucuü"],
  permLevel: 0
};

module.exports.help = {
  name: "süye",
  description: "Sunucudaki üye bilgilerini gösterir.",
  usage: "sunucuüye"
}
   