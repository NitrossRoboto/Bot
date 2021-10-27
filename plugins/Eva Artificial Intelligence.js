const Nitrossbot = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const NitrossStack = require('nitrossbot-npm-pkg');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true
var vtalk_dsc = ''
var reply_eva = ''
if (conf.LANG == 'EN') vtalk_dsc = 'Starts to Eva voice chat.', reply_eva = '*Reply to Any Voice Message!*'
if (conf.LANG == 'SI') vtalk_dsc = 'Starts to Eva voice chat.', reply_eva = '*Reply to Any Voice Message!*'

const recognizeAudio = () => {
    const headers = new Headers({
        'Content-Type': 'audio/wav',
        "Authorization": `Bearer ${conf.WITAI_API}`,
        'Cache-Control': 'no-cache',
        'Transfer-Encoding': 'chunked'
    })
    const requestBody = {
        method: "POST",
        body: fs.readFileSync('output.wav'),
        headers: headers
    }
    return fetch("https://api.wit.ai/speech?v=20200219", requestBody)
        .then(response => response.json())
        .then(json => json._text)
}
const convertToWav = file => {
    return ffmpeg(file)
        .audioCodec('pcm_s16le')
        .format('wav')
        .save('output.wav')
}
var eva_functionality = ''
async function eva_functionality_f() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        eva_functionality = vars.FULL_EVA
    });
}
eva_functionality_f()

Nitrossbot.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('Eva') && eva_functionality !== 'true') {        
        var unique_ident = ''
        if (conf.WORKTYPE == 'private') {
            unique_ident = message.client.user.jid.split('@')[0]
        } else if (conf.WORKTYPE == 'public') {
            unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
        }
        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Nitrossbot' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
        let aitalk_mode = ''
        if (message.message.includes('{normal}')) {
            aitalk_mode = 'raw'
        } else if (message.message.includes('{humanoid}')) {
            aitalk_mode = 'human'
        } else if (message.message.includes('{anime}')) {
            aitalk_mode = 'waifu'
        } else if (message.message.includes('{robot}')) {
            aitalk_mode = 'robo'
        } else if (message.message.includes('{private}')) {
            aitalk_mode = 'secret'
        }
        var finm = ''
        if (conf.WORKTYPE == 'private') {
            finm = message.message.replace('Eva', '').replace(' ', '')
        } else if (conf.WORKTYPE == 'public') {
            finm = message.message.replace('Eva', '').replace(' ', '').replace('@' + message.client.user.jid.split('@')[0], '')
        }
        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
        if (ainame !== 'Nitrossbot') return;
        var ldet = lngDetector.detect(finm)
        var trmsg = ''
        if (ldet[0][0] !== undefined) {
            if (ldet[0][0] !== 'english') {
                ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                if ('text' in ceviri) {
                    trmsg = ceviri.text
                }
            } else { trmsg = finm }
        } else {
            ceviri = await translatte(finm, {
                from: 'auto', 
                to: 'EN'
            });
            if ('text' in ceviri) {
                trmsg = ceviri.text
            }
        }
        var payload_client = await NitrossStack.get_eva_ai(encodeURIComponent(trmsg), 'Eva', 'Phaticusthiccy', 'WhatsNitrossbot', unique_ident)
        var fins = ''                           
        if (conf.LANG !== 'EN') {
            ceviri = await translatte(payload_client.result, {from: 'auto', to: conf.LANG});
            if ('text' in ceviri) {
                fins = ceviri.text
            }
        } else { 
            fins = payload_client.result 
        }
        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
    }
}));
Nitrossbot.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (eva_functionality == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = ''
                        unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                        let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Nitrossbot' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                        let aitalk_mode = message.message.includes('{normal}') ? 'raw' : 'waifu'                       
                        var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                        if (ainame !== 'Nitrossbot') return;
                        var finm = message.message.replace('Eva', '').replace(' ', '').replace('@' + message.client.user.jid.split('@')[0], '')
                        var ldet = lngDetector.detect(finm)
                        var trmsg = ''
                        if (ldet[0][0] !== undefined) {
                            if (ldet[0][0] !== 'english') {
                                ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                                if ('text' in ceviri) {
                                    trmsg = ceviri.text
                                }
                            } else { trmsg = finm }
                        } else {
                            ceviri = await translatte(finm, {
                                from: 'auto', 
                                to: 'EN'
                            });
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        }
                        var payload_client = await NitrossStack.get_eva_ai(encodeURIComponent(trmsg), 'Eva', 'Phaticusthiccy', 'WhatsNitrossbot', unique_ident)
                        var fins = ''                           
                        if (conf.LANG !== 'EN') {
                            ceviri = await translatte(payload_client.result, {from: 'auto', to: conf.LANG});
                            if ('text' in ceviri) {
                                fins = ceviri.text
                            }
                        } else { 
                            fins = payload_client.result 
                        }
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = ''
                    unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                    let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Nitrossbot' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                    var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                    if (ainame !== 'Nitrossbot') return;
                    var finm = message.message.replace('Eva', '').replace(' ', '').replace('@' + message.client.user.jid.split('@')[0], '')
                    var ldet = lngDetector.detect(finm)
                    var trmsg = ''
                    if (ldet[0][0] !== undefined) {
                        if (ldet[0][0] !== 'english') {
                            ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                            if ('text' in ceviri) {
                                trmsg = ceviri.text
                            }
                        } else { trmsg = finm }
                    } else {
                        ceviri = await translatte(finm, {
                            from: 'auto', 
                            to: 'EN'
                        });
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    }
                    var payload_client = await NitrossStack.get_eva_ai(encodeURIComponent(trmsg), 'Eva', 'Phaticusthiccy', 'WhatsNitrossbot', unique_ident)
                    var fins = ''                           
                    if (conf.LANG !== 'EN') {
                        ceviri = await translatte(payload_client.result, {from: 'auto', to: conf.LANG});
                        if ('text' in ceviri) {
                            fins = ceviri.text
                        }
                    } else { 
                        fins = payload_client.result 
                    }
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                }
            } else {
                var unique_ident = ''
                unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Nitrossbot' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Nitrossbot') return;
                var finm = message.message.replace('Eva', '').replace(' ', '').replace('@' + message.client.user.jid.split('@')[0], '')
                var ldet = lngDetector.detect(finm)
                var trmsg = ''
                if (ldet[0][0] !== undefined) {
                    if (ldet[0][0] !== 'english') {
                        ceviri = await translatte(finm, {from: 'auto', to: 'EN'});
                        if ('text' in ceviri) {
                            trmsg = ceviri.text
                        }
                    } else { trmsg = finm }
                } else {
                    ceviri = await translatte(finm, {
                        from: 'auto', 
                        to: 'EN'
                    });
                    if ('text' in ceviri) {
                        trmsg = ceviri.text
                    }
                }
                var payload_client = await NitrossStack.get_eva_ai(encodeURIComponent(trmsg), 'Eva', 'Phaticusthiccy', 'WhatsNitrossbot', unique_ident)
                var fins = ''                           
                if (conf.LANG !== 'EN') {
                    ceviri = await translatte(payload_client.result, {from: 'auto', to: conf.LANG});
                    if ('text' in ceviri) {
                        fins = ceviri.text
                    }
                } else { 
                    fins = payload_client.result 
                }
                await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
            }
        }
}));
Nitrossbot.addCommand({ pattern: 'vtalk$', desc: vtalk_dsc, fromMe: wk }, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,reply_eva, MessageType.text, { quoted: message.data }) 
    try {
        const file = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        })
        
        convertToWav(file)
            .on('end', async () => {
                const recognizedText = await recognizeAudio()           
                var ssc = ''
                ceviri = await translatte(recognizedText, {from: 'auto', to: 'EN' });
                if ('text' in ceviri) {
                    ssc = ceviri.text
                }
                var unique_ident = ''
                if (conf.WORKTYPE == 'private') {
                    unique_ident = message.client.user.jid.split('@')[0]
                } else if (conf.WORKTYPE == 'public') {
                    unique_ident = message.client.user.jid.split('@')[0] + 'PUBLIC' + message.data.participant.split('@')[0]
                }
                let acc = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0] == 'Nitrossbot' ? '7d57838203msh0c5cf65c90a7231p13b461jsn77c8cfa55871' : '7d57838203msh0c582jak19865261js1229n77c8cfa55871'       
                var ainame = os.userInfo().homedir.split('Whats')[1].split('Duplicated/')[0]
                if (ainame !== 'Nitrossbot') return;
                var payload_client = await NitrossStack.get_eva_ai(encodeURIComponent(ssc), 'Eva', 'Phaticusthiccy', 'WhatsNitrossbot', unique_ident)
                var fins = ''                           
                if (conf.LANG !== 'EN') {
                    ceviri = await translatte(payload_client.result, {from: 'auto', to: conf.LANG});
                    if ('text' in ceviri) {
                        fins = ceviri.text
                    }
                } else { 
                    fins = payload_client.result 
                }
                let 
                    LANG = conf.LANG.toLowerCase(),
                    ttsMessage = fins,
                    SPEED = 1.0
                    var buffer = await googleTTS.synthesize({
                        text: ttsMessage,
                        voice: LANG
                    });
            
                    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data})
        
        });
    } catch (err) { console.log(err) }
}));
var fulleva_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
var wr_cmd = ''
if (conf.LANG == 'TR') {
    fulleva_dsc = 'Tam fonksiyonel Eva özelliklerini aktif eder. Hesabınızı bir chatbota dönüştürün!'
    already_on = 'Eva yapay zekası halihazırda tüm fonksiyonları etkin.'
    already_off = 'Eva yapay zekası halihazırda yarı fonksiyonel çalışıyor.'
    succ_on = 'Eva, Tam Fonksiyonel Olarak Açıldı! Lütfen Biraz Bekleyin! ✅'
    succ_off = 'Eva, Yarı Fonksiyonel Olarak Ayarlandı! Lütfen Biraz Bekleyin! ☑️'
    wr_cmd = 'Lütfen sadece *off* veya *on* komutunu kullanın.'
}
if (conf.LANG == 'EN') {
    fulleva_dsc = 'Activates full functional Eva features. Turn your account into a ai chatbot!'
    already_on = 'Eva artificial intelligence is already fully functional.'
    already_off = 'Eva artificial intelligence is currently running semi-functional.'
    succ_on = 'Eva Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Eva Set to Semi-Functional! Please wait a bit! ☑️'
    wr_cmd = 'Please just use the *off* or *on* command.'
}
if (conf.LANG == 'AZ') {
    fulleva_dsc = 'Tam funksional Eva xüsusiyyətlərini aktivləşdirir. Hesabınızı bir chatbot halına gətirin!'
    already_on = 'Eva süni intellekt onsuz da tam işlək vəziyyətdədir.'
    already_off = 'Eva AI hazırda yarı funksionaldır.'
    succ_on = 'Eva Tamamilə İşlədi! Xahiş edirəm bir az gözləyin! ✅'
    succ_off = 'Eva Yarı İşləkdir! Xahiş edirəm bir az gözləyin! ☑️'
    wr_cmd = 'Zəhmət olmasa *off* və ya *on* əmrindən istifadə edin.'
}
if (conf.LANG == 'RU') {
    fulleva_dsc = 'Активирует полнофункциональные функции Eva. Превратите свой аккаунт в чат-бота!'
    already_on = 'Искусственный интеллект Eva уже полностью функционален.'
    already_off = 'Eva AI в настоящее время частично функционирует'
    succ_on = 'Eva открылась полностью функционально! Подождите немного! ✅'
    succ_off = 'Eva настроена на полуфункциональность! Подождите немного! ☑️'
    wr_cmd = 'Пожалуйста, просто используйте команду *off* или *on*.'
}
if (conf.LANG == 'ES') {
    fulleva_dsc = 'Activa todas las funciones funcionales de Eva. ¡Convierta su cuenta en un chatbot!'
    already_on = 'La inteligencia artificial de Eva ya es completamente funcional.'
    already_off = 'Eva AI es actualmente semi-funcional.'
    succ_on = '¡Eva abrió completamente funcionalmente! ¡Por favor espere un poco! ✅'
    succ_off = '¡Eva se pone semifuncional! ¡Por favor espere un poco! ☑️'
    wr_cmd = 'Utilice el comando *off* o *on*.'
}
if (conf.LANG == 'HI') {
    fulleva_dsc = 'पूरी तरह कार्यात्मक Eva सुविधाओं को सक्रिय करता है। अपने खाते को चैटबॉट में बदलें!'
    already_on = 'ईवा आर्टिफिशियल इंटेलिजेंस पहले से ही पूरी तरह कार्यात्मक है'
    already_off = 'ईवा एआई वर्तमान में अर्ध-कार्यात्मक है'
    succ_on = 'ईवा पूरी तरह कार्यात्मक रूप से खुल गई! कृपया थोड़ी प्रतीक्षा करें! ✅'
    succ_off = 'अर्ध-कार्यात्मक करने के लिए ईवा सेट! कृपया थोड़ी प्रतीक्षा करें! ☑️'
    wr_cmd = 'कृपया केवल *on* या *off* कमांड का प्रयोग करें'
}
if (conf.LANG == 'ML') {
    fulleva_dsc = 'പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ Eva സവിശേഷതകൾ സജീവമാക്കുന്നു. നിങ്ങളുടെ അക്കൗണ്ട് ഒരു ചാറ്റ്ബോട്ടാക്കി മാറ്റുക!'
    already_on = 'ഇവ കൃത്രിമബുദ്ധി ഇതിനകം പൂർണ്ണമായി പ്രവർത്തിക്കുന്നു.'
    already_off = 'ഇവാ AI നിലവിൽ സെമി-ഫംഗ്ഷണൽ ആണ്.'
    succ_on = 'ഇവ പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായി തുറന്നു! കുറച്ച് കാത്തിരിക്കൂ! ✅'
    succ_off = 'സെമി-ഫങ്ഷണൽ ആയി ഇവാ സജ്ജമാക്കുക! കുറച്ച് കാത്തിരിക്കൂ! ☑️'
    wr_cmd = 'ദയവായി *on* അല്ലെങ്കിൽ *off* കമാൻഡ് ഉപയോഗിക്കുക.'
}
if (conf.LANG == 'PT') {
    fulleva_dsc = 'Ativa recursos Eva totalmente funcionais. Transforme sua conta em um chatbot!'
    already_on = 'A inteligência artificial Eva já está totalmente funcional.'
    already_off = 'Eva AI está semi-funcional.'
    succ_on = 'Eva abriu totalmente funcionalmente! Por favor espere um pouco! ✅'
    succ_off = 'Eva definida como semi-funcional! Por favor espere um pouco! ☑️'
    wr_cmd = 'Use apenas o comando *off* ou *on*'
}
if (conf.LANG == 'ID') {
    fulleva_dsc = 'Mengaktifkan fitur Eva yang berfungsi penuh. Ubah akun Anda menjadi chatbot!'
    already_on = 'Kecerdasan buatan Eva sudah berfungsi penuh.'
    already_off = 'Eva AI saat ini semi-fungsional.'
    succ_on = 'Eva Dibuka Sepenuhnya Secara Fungsional! Harap tunggu sebentar! ✅'
    succ_off = 'Eva Set ke Semi-Fungsional! Mohon tunggu sebentar! ☑️'
    wr_cmd = 'Silakan gunakan perintah *off* atau *on*.'
}

Nitrossbot.addCommand({ pattern: 'fulleva ?(.*)', desc: fulleva_dsc, fromMe: true, usage: '.fulleva on / off' }, (async (message, match) => {
    
    if (match[1] == 'on') {
        if (eva_functionality == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_EVA']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_functionality !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_EVA']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    } else {
        return await message.client.sendMessage(message.jid, wr_cmd, MessageType.text)
    }
}));
