//https://github.com/RAVANA-SL/slRavana

const Raone = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

let rn = Config.WORKTYPE == 'public' ? false : true


if (Config.ALIVE_IMG_TYPE == 'pp') {

    Raone.addCommand({pattern: 'alive', fromMe: rn, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image,{caption: Config.ALIVEMSG}); });
    }));

    Raone.addCommand({pattern: 'sysd', fromMe: rn, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.ALIVE_IMG_TYPE == 'img') {

   Raone.addCommand({pattern: 'alive', fromMe: rn, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {caption: Config.ALIVEMSG})
   }));
}
