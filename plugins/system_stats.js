const Nitrossbot = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs')
const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Nitrossbot.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 Nitrossbot Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/NitrossbotSupport\n*Telegram Channel:* https://t.me/Nitrossbotremaster\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.client.sendMessage(message.jid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{Nitrossbotlogo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/media/gif/WhatsNitrossbot Animated.mp4'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{Nitrossbotlogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));

    Nitrossbot.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Nitrossbot.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 Nitrossbot Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/NitrossbotSupport\n*Telegram Channel:* https://t.me/Nitrossbotremaster\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {
                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.client.sendMessage(message.jid, Buffer.from(resim.data), MessageType.image, { mimetype: Mimetype.png, caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL)});
            }
            else if (payload.includes('{Nitrossbotlogo}')) {
                await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/media/gif/WhatsNitrossbot Animated.mp4'), MessageType.video, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{Nitrossbotlogo}', '')});
            }
            else {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL), MessageType.text);
            }
        }
    }));

    Nitrossbot.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
