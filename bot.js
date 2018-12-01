const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
 console.log(`----------------`);
 console.log(`ON ${client.guilds.size} Ween, ' `);
 console.log(`----------------`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`مؤخرتكَ مكانَ جيد لوضعْ رآيك فيهاَ.`,"https://www.twitch.tv/meercy")
client.user.setStatus("idle")
 
});

client.login(process.env.WEEN);
