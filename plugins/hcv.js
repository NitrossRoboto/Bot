const Nitross = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');


Nitross.addCommand({ pattern: '4', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/85804`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data });

    }));

Nitross.addCommand({ pattern: '5', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/85765`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data });

    }));

Nitross.addCommand({ pattern: '6', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var webimage = await axios.get(`https://netfiletolink.herokuapp.com/85764`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4,  quoted: message.data });

    }));

