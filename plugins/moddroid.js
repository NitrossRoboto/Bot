const NitrossBot = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

NitrossBot.addCommand({pattern: 'moddroid ?(.*)', fromMe: false, desc: Lang.MODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://dapuhy-api.herokuapp.com/api/search/moddroid?query=${match[1]}&apikey=ChLCG1FaXibNn1B`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAME +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].thumb + '```\n\n\n' + 
    '*📘 ' + Lang.VERSION +'* ```' + json.result[0].version + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
