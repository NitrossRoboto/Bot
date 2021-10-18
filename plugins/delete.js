//RAVANA

const RAVANA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes The Replied Message"

RAVANA.addCommand({pattern: 'del', fromMe: true, desc: DEL_DESC}, (async (message, match) => {

  await message.reply_message.delete();

}));
