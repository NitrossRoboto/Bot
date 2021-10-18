const Nitross = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Apk = "Nitross MOD STORE";

if (Config.WORKTYPE == 'private') {

     Nitross.addCommand({ pattern: 'rapkmod ?(.*)', fromMe: true,desc: Apk}, (async (message, match) => {

        await message.sendMessage("*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n║  *🤴Nitross MOD STORE🤴*  ║\n*╚═══❖═══▣ ╩ ▣════❖═══╝*\n\n*මෙමෙ ඇප් සියල්ල බොට් හරහා ලබාගත හැක.*\n\n*|🔰Nitross WA MOD v1 - .rawamo*\n\n*|🔰Video Marker v1.61 premium - .ravm*\n\n*|🔰VivaVideo 8.11.3 p - .ravv*\n\n*|🔰Piscart gold full v.17.3.1  - .rapa*\n\n*|🔰PLAYit v2.5.8.14 vip - .rapy*\n\n*|🔰Dual Space Lite v3.1.1 vip - .rads*\n\n*|🔰Glitch video efct pro- .ragve*\n\n*|🔰Photo editer v6.9 pro - .rape*\n\n\n*තවත් ඇප් ඉදිරියේදී එකතුවේ..*\n________________________");    

    }));

Nitross.addCommand({ pattern: 'rawamo', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85744`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Nitross WA MOD v1.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ravm', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85756`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Video Marker v1.61 premium.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ravv', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85746`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'VivaVideo 8.11.3 p.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rapa', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfiletolink.herokuapp.com/62767`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Piscart gold full v.17.3.1 g.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rapy', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85750`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'PLAYit v2.5.8.14 vip.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rads', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85753`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Dual Space Lite v3.1.1 vip.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ragve', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85752`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Glitch video efct pro.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rape', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85758`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Photo editer v6.9 pro.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

}

if (Config.WORKTYPE == 'public') {

     Nitross.addCommand({ pattern: 'rapkmod ?(.*)', fromMe: false,desc: Apk}, (async (message, match) => {

        await message.sendMessage("*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n║  *🤴Nitross MOD STORE🤴*  ║\n*╚═══❖═══▣ ╩ ▣════❖═══╝*\n\n*මෙමෙ ඇප් සියල්ල බොට් හරහා ලබාගත හැක.*\n\n*|🔰Nitross WA MOD v1 - .rawamo*\n\n*|🔰Video Marker v1.61 premium - .ravm*\n\n*|🔰VivaVideo 8.11.3 p - .ravv*\n\n*|🔰Piscart gold full v.17.3.1  - .rapa*\n\n*|🔰PLAYit v2.5.8.14 vip - .rapy*\n\n*|🔰Dual Space Lite v3.1.1 vip - .rads*\n\n*|🔰Glitch video efct pro- .ragve*\n\n*|🔰Photo editer v6.9 pro - .rape*\n\n\n*තවත් ඇප් ඉදිරියේදී එකතුවේ..*\n________________________");    

    }));

Nitross.addCommand({ pattern: 'rawamo', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85744`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Nitross WA MOD v1.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ravm', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85756`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Video Marker v1.61 premium.apk', mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ravv', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfile2link.herokuapp.com/85746`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'VivaVideo 8.11.3 p.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rapa', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85747`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Piscart gold full v.17.3.1 g.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rapy', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85750`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'PLAYit v2.5.8.14 vip.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rads', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85753`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Dual Space Lite v3.1.1 vip.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'ragve', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85752`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Glitch video efct pro.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));

Nitross.addCommand({ pattern: 'rape', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

      var webimage = await axios.get(`https://netfile2link.herokuapp.com/85758`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {filename: 'Photo editer v6.9 pro.apk',  mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        
    }));
  
  }
