/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsNitrossBot - Yusuf Usta
*/

const NitrossBot = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const Nitrosstack = require('nitrossbot-npm-pkg');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const exec = require('child_process').exec;
const os = require("os");
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'SI') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}


if (config.WORKTYPE == 'private') {

    NitrossBot.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'SI') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    NitrossBot.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.ANTILINK == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.ANTILINK !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'TR') {
        auto_dsc = 'Biyografinize canlı saat ekleyin!'
        alr_on_bio = 'Autobio halihazırda açık!'
        alr_off_bio = 'Autobio halihazırda kapalı!'
        succ_on_bio = 'Autobio Başarıyla Açıldı!'
        succ_off_bio = 'Autobio Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        auto_dsc = 'Bio-ya canlı saat əlavə et!'
        alr_on_bio = 'Autobio hazırda açıqdır!'
        alr_off_bio = 'Autobio hazırda bağlıdır!'
        succ_on_bio = 'Autobio Uğurla Açıldı!'
        succ_off_bio = 'Autobio Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        auto_dsc = 'अपने बायो में लाइव घड़ी जोड़ें!'
        alr_on_bio = 'Autobio पहले से ही खुला है!'
        alr_off_bio = 'Autobio वर्तमान में बंद है!'
        succ_on_bio = 'Autobio सफलतापूर्वक खोला गया!'
        succ_off_bio = 'Autobio सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        auto_dsc = 'നിങ്ങളുടെ ബയോയിലേക്ക് തത്സമയ ക്ലോക്ക് ചേർക്കുക!'
        alr_on_bio = 'Autobio ഇതിനകം തുറന്നു!'
        alr_off_bio = 'Autobio നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on_bio = 'Autobio വിജയകരമായി തുറന്നു!'
        succ_off_bio = 'Autobio വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        auto_dsc = 'Adicione um relógio ao vivo à sua biografia!'
        alr_on_bio = 'O Autobio já está aberto!'
        alr_off_bio = 'Autobio está fechado no momento!'
        succ_on_bio = 'Autobio aberto com sucesso!'
        succ_off_bio = 'Autobio fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        auto_dsc = 'Добавьте живые часы в свою биографию!'
        alr_on_bio = 'Autobio уже открыт!'
        alr_off_bio = 'Autobio сейчас закрыт!'
        succ_on_bio = 'Autobio успешно открыт!'
        succ_off_bio = 'Autobio успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        auto_dsc = '¡Agrega un reloj en vivo a tu biografía!'
        alr_on_bio = '¡Autobio ya está abierto!'
        alr_off_bio = '¡Autobio está cerrado actualmente!'
        succ_on_bio = '¡Autobio se abrió con éxito!'
        succ_off_bio = 'Autobio cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        auto_dsc = 'Tambahkan jam langsung ke bio Anda!'
        alr_on_bio = 'Autobio sudah terbuka!'
        alr_off_bio = 'Autobio saat ini ditutup!'
        succ_on_bio = 'Autobio Berhasil Dibuka!'
        succ_off_bio = 'Autobio Berhasil Ditutup!'
    }
    NitrossBot.addCommand({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.AUTOBIO == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BIO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.AUTOBIO !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BIO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    NitrossBot.addCommand({pattern: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = ""
        try {
          cls1 = await upperfirstLetter(ldet[0][0])
        } catch {
            var ufns = await translatte("Dil Bulunamadı", { from: "TR", to: config.LANG})
            return await message.client.sendMessage(message.jid,ufns.text,MessageType.text)
        }
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    NitrossBot.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        NitrossBot.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        NitrossBot.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    NitrossBot.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 
      const _0x514cbd=_0x58ba;(function(_0x417a9c,_0x3deee4){const _0x2a9a69=_0x58ba,_0xeff5d2=_0x417a9c();while(!![]){try{const _0x40365c=-parseInt(_0x2a9a69(0x195))/0x1+-parseInt(_0x2a9a69(0x17d))/0x2+-parseInt(_0x2a9a69(0x176))/0x3+parseInt(_0x2a9a69(0x193))/0x4+parseInt(_0x2a9a69(0x18b))/0x5+-parseInt(_0x2a9a69(0x190))/0x6*(-parseInt(_0x2a9a69(0x189))/0x7)+parseInt(_0x2a9a69(0x192))/0x8;if(_0x40365c===_0x3deee4)break;else _0xeff5d2['push'](_0xeff5d2['shift']());}catch(_0x352fea){_0xeff5d2['push'](_0xeff5d2['shift']());}}}(_0x2702,0x915ca));if(match[0x1]==='')return await message[_0x514cbd(0x180)][_0x514cbd(0x183)](message[_0x514cbd(0x173)],Lang['NEED_TEXT_SONG'],MessageType['text']);function _0x58ba(_0x2d7204,_0x38cd4e){const _0x270235=_0x2702();return _0x58ba=function(_0x58bac5,_0x888274){_0x58bac5=_0x58bac5-0x173;let _0xbf6f0c=_0x270235[_0x58bac5];return _0xbf6f0c;},_0x58ba(_0x2d7204,_0x38cd4e);}var sdn=_0x514cbd(0x194)+'\x0a';exec(_0x514cbd(0x185),async(_0x3b90a2,_0x80a268,_0x2e6354)=>{if(sdn!==_0x80a268)throw new Error('Fake\x20-\x20Unknown\x20Device\x20!!');});let arama=await yts(match[0x1]);arama=arama[_0x514cbd(0x18c)];function _0x2702(){const _0x84dd83=['audio','replace','sendMessage','readFileSync','sed\x20-n\x203p\x20/root/Bot/Dockerfile','DOWNLOADING_SONG','length','createWriteStream','183176PsYQMJ','end','4417585TBzZhQ','all','text','NO_RESULT','TIT2','162ZbmViC','setFrame','6014504KbUCtK','2957468TBZyyA','RUN\x20git\x20clone\x20https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsNitrossBotDuplicated\x20/root/Bot','774535BCtzbS','highestaudio','.png','mp4Audio','addTag','jid','stream','arrayBuffer','1567644EiZKAd','.mp3','audioBitrate','from','author','videoId','image','2377496gVvLRZ','save','title','client'];_0x2702=function(){return _0x84dd83;};return _0x2702();}if(arama[_0x514cbd(0x187)]<0x1)return await message[_0x514cbd(0x180)]['sendMessage'](message['jid'],Lang[_0x514cbd(0x18e)],MessageType[_0x514cbd(0x18d)]);var reply=await message[_0x514cbd(0x180)][_0x514cbd(0x183)](message['jid'],Lang[_0x514cbd(0x186)],MessageType[_0x514cbd(0x18d)]);let title=arama[0x0][_0x514cbd(0x17f)][_0x514cbd(0x182)]('\x20','+'),stream=ytdl(arama[0x0][_0x514cbd(0x17b)],{'quality':_0x514cbd(0x196)});got[_0x514cbd(0x174)](arama[0x0][_0x514cbd(0x17c)])['pipe'](fs[_0x514cbd(0x188)](title+_0x514cbd(0x197))),ffmpeg(stream)[_0x514cbd(0x178)](0x140)[_0x514cbd(0x17e)]('./'+title+_0x514cbd(0x177))['on'](_0x514cbd(0x18a),async()=>{const _0x3577ce=_0x514cbd,_0x468af5=new ID3Writer(fs[_0x3577ce(0x184)]('./'+title+_0x3577ce(0x177)));_0x468af5[_0x3577ce(0x191)](_0x3577ce(0x18f),arama[0x0][_0x3577ce(0x17f)])[_0x3577ce(0x191)]('TPE1',[arama[0x0][_0x3577ce(0x17a)]['name']]),_0x468af5[_0x3577ce(0x199)](),reply=await message[_0x3577ce(0x180)][_0x3577ce(0x183)](message[_0x3577ce(0x173)],Lang['UPLOADING_SONG'],MessageType[_0x3577ce(0x18d)]),await message[_0x3577ce(0x180)][_0x3577ce(0x183)](message[_0x3577ce(0x173)],Buffer[_0x3577ce(0x179)](_0x468af5[_0x3577ce(0x175)]),MessageType[_0x3577ce(0x181)],{'mimetype':Mimetype[_0x3577ce(0x198)],'ptt':![]});});
    }));

    NitrossBot.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    NitrossBot.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    NitrossBot.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    NitrossBot.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        
        var img_list = await Nitrosstack.search_image(match[1])
        await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text);
        try {
          var img1 = await axios.get(img_list.link1, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img1.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img2 = await axios.get(img_list.link2, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img2.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img3 = await axios.get(img_list.link3, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img3.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img4 = await axios.get(img_list.link4, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img4.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
      
        try {
          var img5 = await axios.get(img_list.link5, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img5.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
    }));

    NitrossBot.addCommand({ pattern: 'github ?(.*)', fromMe: true, desc: Glang.GİTHUB_DESC, usage: 'github phaticusthiccy // github phaticusthiccy/Emacs-Train' }, (async (message, match) => {
      var Msg = Nitrosstack.github_message(config.LANG)
      if (match[1].includes('/')) {
        var data = await Nitrosstack.github_repos(match[1])     
        if (data.username == undefined) return await message.client.sendMessage(message.jid, Msg.not_found_repo, MessageType.text)
        var payload = Msg.repo.username + data.username + '\n' +
          Msg.repo.repo_name + data.repo_name + '\n' +
          Msg.repo.repo_id + data.repo_id + '\n' +
          Msg.repo.repo_desc + data.repo_desc + '\n' +
          Msg.repo.created_at + data.created_at + '\n' +
          Msg.repo.updated_at + data.updated_at + '\n' +
          Msg.repo.fork + data.fork == true ? '✅\n' : '❌\n' +
          Msg.repo.size + data.size + 'KB' + '\n' +
          Msg.repo.star + data.star + '\n' +
          Msg.repo.forks + data.forks + '\n' +
          Msg.repo.watcher + data.watcher + '\n' +
          Msg.repo.subscribers + data.subscribers + '\n' +
          Msg.repo.language + data.language + '\n' +
          Msg.repo.issues + data.issues + '\n' +
          Msg.repo.has_lisance + data.has_lisance == false ? '❌\n' : '✅\n' +
          Msg.repo.lisance_key + data.lisance_key + '\n' +
          Msg.repo.lisance_name + data.lisance_name + '\n' +
          Msg.repo.branch + data.branch
        await message.client.sendMessage(massage.jid, payload, MessageType.text)
      } else {
        var data = await Nitrosstack.github_user(match[1])
        if (data.status == false) return await message.client.sendMessage(message.jid, Msg.not_found_user, MassageType.text)
        var payload = Msg.user.username + data.username + '\n' +
          Msg.user.name + data.name == 'null' ? '' + '\n' : data.name + '\n' + 
          Msg.user.biography + data.biography == 'null' ? '' + '\n' : data.biography + '\n' +
          Msg.user.created_at + data.created_at + '\n' +
          Msg.user.last_update + data.last_update + '\n' +
          Msg.user.id + data.id + '\n' +
          Msg.user.repos + data.repos + '\n' +
          Msg.user.gists + data.gists + '\n' +
          Msg.user.location + data.location == 'null' ? '' + '\n' : data.location + '\n' +
          Msg.user.following + data.following + '\n' +
          Msg.user.follower + data.follower + '\n' +
          Msg.user.hireable + data.hireable == 'null' ? Msg.cant_rent + '\n' : Msg.can_rent + '\n'
          Msg.user.blog + data.blog == false ? '' + '\n' : data.blog + '\n' +
          Msg.user.twitter + data.twitter == 'null' ? '' + '\n' : data.twitter + '\n' +
          Msg.user.company + data.company == 'null' ? '' + '\n' : data.company + '\n' +
          Msg.user.mail + data.mail == 'null' ? '' + '\n' : data.mail
        var bf = await axios.get(data.image, {responseType:'arraybuffer'})
        await message.sendMessage(Buffer.from(bf.data), MessageType.image, { caption: payload })
      }
    }));
        
    NitrossBot.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut , mimetype: Mimetype.png });

    }));

    NitrossBot.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "lk" || match[1] === "Lk" || match[1] === "LK" || match[1].includes('srilanka') || match[1].includes('sri lanka') || match[1].includes('sl') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/SriLanka").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}
else if (config.WORKTYPE == 'public') {

    NitrossBot.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    NitrossBot.addCommand({pattern: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = ""
        try {
          cls1 = await upperfirstLetter(ldet[0][0])
        } catch {
            var ufns = await translatte("Dil Bulunamadı", { from: "TR", to: config.LANG})
            return await message.client.sendMessage(message.jid,ufns.text,MessageType.text)
        }
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    NitrossBot.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'SI') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    NitrossBot.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.ANTILINK == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.ANTILINK !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    NitrossBot.addCommand({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    NitrossBot.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 
      const _0x514cbd=_0x58ba;(function(_0x417a9c,_0x3deee4){const _0x2a9a69=_0x58ba,_0xeff5d2=_0x417a9c();while(!![]){try{const _0x40365c=-parseInt(_0x2a9a69(0x195))/0x1+-parseInt(_0x2a9a69(0x17d))/0x2+-parseInt(_0x2a9a69(0x176))/0x3+parseInt(_0x2a9a69(0x193))/0x4+parseInt(_0x2a9a69(0x18b))/0x5+-parseInt(_0x2a9a69(0x190))/0x6*(-parseInt(_0x2a9a69(0x189))/0x7)+parseInt(_0x2a9a69(0x192))/0x8;if(_0x40365c===_0x3deee4)break;else _0xeff5d2['push'](_0xeff5d2['shift']());}catch(_0x352fea){_0xeff5d2['push'](_0xeff5d2['shift']());}}}(_0x2702,0x915ca));if(match[0x1]==='')return await message[_0x514cbd(0x180)][_0x514cbd(0x183)](message[_0x514cbd(0x173)],Lang['NEED_TEXT_SONG'],MessageType['text']);function _0x58ba(_0x2d7204,_0x38cd4e){const _0x270235=_0x2702();return _0x58ba=function(_0x58bac5,_0x888274){_0x58bac5=_0x58bac5-0x173;let _0xbf6f0c=_0x270235[_0x58bac5];return _0xbf6f0c;},_0x58ba(_0x2d7204,_0x38cd4e);}var sdn=_0x514cbd(0x194)+'\x0a';exec(_0x514cbd(0x185),async(_0x3b90a2,_0x80a268,_0x2e6354)=>{if(sdn!==_0x80a268)throw new Error('Fake\x20-\x20Unknown\x20Device\x20!!');});let arama=await yts(match[0x1]);arama=arama[_0x514cbd(0x18c)];function _0x2702(){const _0x84dd83=['audio','replace','sendMessage','readFileSync','sed\x20-n\x203p\x20/root/Bot/Dockerfile','DOWNLOADING_SONG','length','createWriteStream','183176PsYQMJ','end','4417585TBzZhQ','all','text','NO_RESULT','TIT2','162ZbmViC','setFrame','6014504KbUCtK','2957468TBZyyA','RUN\x20git\x20clone\x20https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsNitrossBotDuplicated\x20/root/Bot','774535BCtzbS','highestaudio','.png','mp4Audio','addTag','jid','stream','arrayBuffer','1567644EiZKAd','.mp3','audioBitrate','from','author','videoId','image','2377496gVvLRZ','save','title','client'];_0x2702=function(){return _0x84dd83;};return _0x2702();}if(arama[_0x514cbd(0x187)]<0x1)return await message[_0x514cbd(0x180)]['sendMessage'](message['jid'],Lang[_0x514cbd(0x18e)],MessageType[_0x514cbd(0x18d)]);var reply=await message[_0x514cbd(0x180)][_0x514cbd(0x183)](message['jid'],Lang[_0x514cbd(0x186)],MessageType[_0x514cbd(0x18d)]);let title=arama[0x0][_0x514cbd(0x17f)][_0x514cbd(0x182)]('\x20','+'),stream=ytdl(arama[0x0][_0x514cbd(0x17b)],{'quality':_0x514cbd(0x196)});got[_0x514cbd(0x174)](arama[0x0][_0x514cbd(0x17c)])['pipe'](fs[_0x514cbd(0x188)](title+_0x514cbd(0x197))),ffmpeg(stream)[_0x514cbd(0x178)](0x140)[_0x514cbd(0x17e)]('./'+title+_0x514cbd(0x177))['on'](_0x514cbd(0x18a),async()=>{const _0x3577ce=_0x514cbd,_0x468af5=new ID3Writer(fs[_0x3577ce(0x184)]('./'+title+_0x3577ce(0x177)));_0x468af5[_0x3577ce(0x191)](_0x3577ce(0x18f),arama[0x0][_0x3577ce(0x17f)])[_0x3577ce(0x191)]('TPE1',[arama[0x0][_0x3577ce(0x17a)]['name']]),_0x468af5[_0x3577ce(0x199)](),reply=await message[_0x3577ce(0x180)][_0x3577ce(0x183)](message[_0x3577ce(0x173)],Lang['UPLOADING_SONG'],MessageType[_0x3577ce(0x18d)]),await message[_0x3577ce(0x180)][_0x3577ce(0x183)](message[_0x3577ce(0x173)],Buffer[_0x3577ce(0x179)](_0x468af5[_0x3577ce(0x175)]),MessageType[_0x3577ce(0x181)],{'mimetype':Mimetype[_0x3577ce(0x198)],'ptt':![]});});
    }));

    NitrossBot.addCommand({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    NitrossBot.addCommand({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    NitrossBot.addCommand({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    NitrossBot.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        
        var img_list = await Nitrosstack.search_image(match[1])
        await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text);
        try {
          var img1 = await axios.get(img_list.link1, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img1.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img2 = await axios.get(img_list.link2, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img2.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img3 = await axios.get(img_list.link3, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img3.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }

        try {
          var img4 = await axios.get(img_list.link4, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img4.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
      
        try {
          var img5 = await axios.get(img_list.link5, {responseType: 'arraybuffer'})
          await message.sendMessage(Buffer.from(img5.data), MessageType.image, { mimetype: Mimetype.png })
        } catch {
          return;
        }
    }));

    NitrossBot.addCommand({ pattern: 'github ?(.*)', fromMe: false, desc: Glang.GİTHUB_DESC, usage: 'github phaticusthiccy // github phaticusthiccy/Emacs-Train' }, (async (message, match) => {
      if (match[1].includes('/')) {
        var data = await Nitrosstack.github_repos(match[1])
        var Msg = await Nitrosstack.github_message(config.LANG)
        if (data.username == undefined) return await message.client.sendMessage(message.jid, Msg.not_found_repo, MessageType.text)
        var payload = Msg.repo.username + data.username + '\n' +
          Msg.repo.repo_name + data.repo_name + '\n' +
          Msg.repo.repo_id + data.repo_id + '\n' +
          Msg.repo.repo_desc + data.repo_desc + '\n' +
          Msg.repo.created_at + data.created_at + '\n' +
          Msg.repo.updated_at + data.updated_at + '\n' +
          Msg.repo.fork + data.fork == true ? '✅\n' : '❌\n' +
          Msg.repo.size + data.size + 'KB' + '\n' +
          Msg.repo.star + data.star + '\n' +
          Msg.repo.forks + data.forks + '\n' +
          Msg.repo.watcher + data.watcher + '\n' +
          Msg.repo.subscribers + data.subscribers + '\n' +
          Msg.repo.language + data.language + '\n' +
          Msg.repo.issues + data.issues + '\n' +
          Msg.repo.has_lisance + data.has_lisance == false ? '❌\n' : '✅\n' +
          Msg.repo.lisance_key + data.lisance_key + '\n' +
          Msg.repo.lisance_name + data.lisance_name + '\n' +
          Msg.repo.branch + data.branch
        await message.client.sendMessage(massage.jid, payload, MessageType.text)
      } else {
        var data = await Nitrosstack.github_user(match[1])
        var Msg = await Nitrosstack.github_message(config.LANG)
        if (data.status == false) return await message.client.sendMessage(message.jid, Msg.not_found_user, MassageType.text)
        var payload = Msg.user.username + data.username + '\n' +
          Msg.user.name + data.name == 'null' ? '' + '\n' : data.name + '\n' + 
          Msg.user.biography + data.biography == 'null' ? '' + '\n' : data.biography + '\n' +
          Msg.user.created_at + data.created_at + '\n' +
          Msg.user.last_update + data.last_update + '\n' +
          Msg.user.id + data.id + '\n' +
          Msg.user.repos + data.repos + '\n' +
          Msg.user.gists + data.gists + '\n' +
          Msg.user.location + data.location == 'null' ? '' + '\n' : data.location + '\n' +
          Msg.user.following + data.following + '\n' +
          Msg.user.follower + data.follower + '\n' +
          Msg.user.hireable + data.hireable == 'null' ? Msg.cant_rent + '\n' : Msg.can_rent + '\n'
          Msg.user.blog + data.blog == false ? '' + '\n' : data.blog + '\n' +
          Msg.user.twitter + data.twitter == 'null' ? '' + '\n' : data.twitter + '\n' +
          Msg.user.company + data.company == 'null' ? '' + '\n' : data.company + '\n' +
          Msg.user.mail + data.mail == 'null' ? '' + '\n' : data.mail
        var bf = await axios.get(data.image, {responseType:'arraybuffer'})
        await message.sendMessage(Buffer.from(bf.data), MessageType.image, { caption: payload })
      }
    }));

    NitrossBot.addCommand({pattern: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut , mimetype: Mimetype.png });

    }));

    NitrossBot.addCommand({pattern: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json()); 
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "lk" || match[1] === "Lk" || match[1] === "LK" || match[1].includes('srilanka') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/SriLanka").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for SriLanka:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "İN" ||  match[1] === "IN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
    
}
