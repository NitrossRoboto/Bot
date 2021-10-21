const NitrossBot = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lib = "NitrossBot LIBRARY"; 


if (Config.WORKTYPE == 'private') {

     NitrossBot.addCommand({ pattern: 'library ?(.*)', fromMe: true, desc: lib}, (async (message, match) => {

        await message.sendMessage("*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n*║  *Education LIBRARY*  ║\n*╚═══❖═══▣ ╩ ▣════❖═══╝*\n\n\n🔷java පිලිබද.\n\n.pdfjavan\n🔷javaScript පිලිබද.\n\n.pdfjs\n🔷HTML පිලිබද.\n\n.pdfhtml\n🔷Arduno පිලිබද.\n\n.pdfarduno\n🔷c# පිලිබද.\n\n.pdfcsh\n🔷c++ පිලිබද.\n\n.pdfcplus\n🔷Microbit පිලිබද.\n\n.pdfmicrobit\n🔷PHP පිලිබද.\n\n.pdfphp\n🔷Android studio පිලිබද.\n\n.pdfas\n\n🔷MicroController පිලිබද.\n\n.pdfmc\n\n\n\nපොත් කියවා දැනුම ලබමු🥰");    

    }));

//java books

     NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/41409`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

    }));

    NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44218`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

    }));

    NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44220`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

    }));

//java script

    NitrossBot.addCommand({ pattern: 'pdfjs', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44216`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

    }));

//HTML

NitrossBot.addCommand({ pattern: 'pdfhtml', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44224`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Arduno

NitrossBot.addCommand({ pattern: 'pdfarduno', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44236`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfarduno', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44237`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//c#

NitrossBot.addCommand({ pattern: 'pdfcsh', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44242`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//c++

NitrossBot.addCommand({ pattern: 'pdfcplus', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44247`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Microbit

NitrossBot.addCommand({ pattern: 'pdfmicrobit', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44257`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//PHP

NitrossBot.addCommand({ pattern: 'pdfphp', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44272`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Android studio

NitrossBot.addCommand({ pattern: 'pdfas', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44278`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfas', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44279`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Microcontroller

NitrossBot.addCommand({ pattern: 'pdfmc', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44282`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfmc', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44283`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

}

else if (Config.WORKTYPE == 'public') {

    NitrossBot.addCommand({ pattern: 'library ?(.*)', fromMe: false,desc: lib}, (async (message, match) => {

await message.sendMessage("*╔═▣═══❖⦁⦁⦁💢⦁⦁⦁❖═══▣═╗*\n*║  *NitrossBot LIBRARY*  ║\n*╚═══❖═══▣ ╩ ▣════❖═══╝*\n\n\n🔷java පිලිබද.\n\n.pdfjavan\n🔷javaScript පිලිබද.\n\n.pdfjs\n🔷HTML පිලිබද.\n\n.pdfhtml\n🔷Arduno පිලිබද.\n\n.pdfarduno\n🔷c# පිලිබද.\n\n.pdfcsh\n🔷c++ පිලිබද.\n\n.pdfcplus\n🔷Microbit පිලිබද.\n\n.pdfmicrobit\n🔷PHP පිලිබද.\n\n.pdfphp\n🔷Android studio පිලිබද.\n\n.pdfas\n\n🔷MicroController පිලිබද.\n\n.pdfmc\n\n\n\nපොත් කියවා දැනුම ලබමු🥰");    

}));

   //java books

   NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/41409`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44218`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfjava', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44220`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//java script

NitrossBot.addCommand({ pattern: 'pdfjs', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44216`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//HTML

NitrossBot.addCommand({ pattern: 'pdfhtml', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44224`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Arduno

NitrossBot.addCommand({ pattern: 'pdfarduno', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44236`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfarduno', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44237`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//c#

NitrossBot.addCommand({ pattern: 'pdfcsh', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44242`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//c++

NitrossBot.addCommand({ pattern: 'pdfcplus', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44247`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Microbit

NitrossBot.addCommand({ pattern: 'pdfmicrobit', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44257`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//PHP

NitrossBot.addCommand({ pattern: 'pdfphp', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44272`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Android studio

NitrossBot.addCommand({ pattern: 'pdfas', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44278`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfas', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44279`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

//Microcontroller

NitrossBot.addCommand({ pattern: 'pdfmc', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44282`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

NitrossBot.addCommand({ pattern: 'pdfmc', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

var webimage = await axios.get(`https://netfiletolink.herokuapp.com/44283`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.document, { mimetype: Mimetype.pdf, quoted: message.data})

}));

    
}
