require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    checkUpdate: false,
});

client.once('ready', () => {
    console.log(`Bot başarılı bir şekilde giriş yaptı ${client.user.username}`)
});

client.once('ready', () => { 
    joinVoiceChannel({
  channelId: "Kanal ID",
  guildId: "Sunucu ID",       
  adapterCreator: client.guilds.cache.get("Sunucu ID").voiceAdapterCreator
      });
  });

client.login('buraya discord kullanıcı tokeni gir')