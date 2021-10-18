const Nitross = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Nitross.addCommand({pattern: 'google ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://dapuhy-api.herokuapp.com/api/search/googlesearch?query=${match[1]}&apikey=ChLCG1FaXibNn1B`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAME +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.DOWNLOAD +'* ```' + json.result[0].link + '```\n\n\n' + 
		'*📗 ' + Lang.MODINFO +':* ```' + json.result[0].snippet + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
