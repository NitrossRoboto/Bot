/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsNitrossbot - Yusuf Usta
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Nitrossbot = require('../events');
const Config = require('../config');
const NitrossStack = require('@nitrossroboto/nitrossbot-npm-pkg');

var CLR_DESC = ''
if (Config.LANG == 'SI') CLR_DESC = 'Clears all the messages from the chat.'
if (Config.LANG == 'EN') CLR_DESC = 'Clears all the messages from the chat.'

Nitrossbot.addCommand({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, usage: '.clear // .clear 9055xxx // .clear 9055xxx-12345@g.us'}, (async (message, match) => {
    if (message.reply_message) {
        var client_id = message.reply_message.data.participant
        var payload = await NitrossStack.clear(Config.LANG, message.client.user.jid)
        await message.client.sendMessage(client_id, payload.Action, MessageType.text);
        await message.client.modifyChat(client_id, ChatModification.delete);
        await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
    } else {
        if (match[1] == '') {
            var client_id = message.jid
            var payload = await NitrossStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        } else if (match[1] !== '') {
            let if_group = message.jid.includes('-') ? '' : '@s.whatsapp.net'
            var client_id = match[1] + if_group
            var payload = await NitrossStack.clear(Config.LANG, message.client.user.jid)
            await message.client.sendMessage(client_id, payload.Action, MessageType.text);
            await message.client.modifyChat(client_id, ChatModification.delete);
            await message.client.sendMessage(client_id, payload.Finish, MessageType.text);
        }
    }
}));
