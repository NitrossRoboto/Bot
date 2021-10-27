/* Copyright (C) 2021 Nitross Roboto.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Nitross Bot - From NitrossRoboto
*/

const Nitrossbot = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const fs = require('fs');
const NitrossStack = require('@nitrossroboto/nitrossbot-npm-pkg');
let wk = Config.WORKTYPE == 'public' ? false : true
var pic = ''
var giff = ''
var wr_usage = ''
if (Config.LANG == 'EN') pic = 'Sends random anime photo.', wr_usage = '*Please use only* _normal_ *or* _nsfw_ *words!*', giff = 'Sends random anime video.'
if (Config.LANG == 'SI') pic = 'Sends random anime photo.', wr_usage = '*Please use only* _normal_ *or* _nsfw_ *words!*', giff = 'Sends random anime video.'

Nitrossbot.addCommand({pattern: 'animepic ?(.*)', fromMe: wk, desc: pic, usage: 'animepic normal // animepic nsfw'}, (async (message, match) => {
  if (match[1] == 'normal') {
    var image_link = await NitrossStack.anime_wall('normal')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsNitrossbot' })
  } else if (match[1] == 'nsfw') {
    var image_link_nsfw = await NitrossStack.anime_wall('nsfw')
    var image_buffer_nsfw = await axios.get(image_link_nsfw, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer_nsfw.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsNitrossbot' })
  } else {
    return await message.client.sendMessage(message.jid,wr_usage,MessageType.text)
  }
}));
Nitrossbot.addCommand({pattern: 'animegif ?(.*)', fromMe: wk, desc: giff, usage: 'animegif normal // animegif nsfw'}, (async (message, match) => {
  if (match[1] == 'normal') {
    var gif_link = await NitrossStack.anime_gif('normal')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(gif_link, '/root/Bot/pic.mp4', async() => {                          
      await message.client.sendMessage(message.jid, fs.readFileSync('/root/Bot/pic.mp4'), MessageType.video, { caption: 'Made by WhatsNitrossbot', mimetype: Mimetype.gif })
    })
  } else if (match[1] == 'nsfw') {
    var gif_link_nsfw = await NitrossStack.anime_gif('nsfw')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(gif_link_nsfw, '/root/Bot/picn.mp4', async() => {                          
      await message.client.sendMessage(message.jid, fs.readFileSync('/root/Bot/picn.mp4'), MessageType.video, { caption: 'Made by WhatsNitrossbot', mimetype: Mimetype.gif })
    })
  } else {
    return await message.client.sendMessage(message.jid,wr_usage,MessageType.text)
  }
}));
