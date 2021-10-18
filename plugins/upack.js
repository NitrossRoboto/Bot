const jessisapi = require('api-jessi'); // Import NPM Package

const RAVANA = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'SI') desc_msg = 'Unlimited logo pack එක.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

RAVANA.addCommand({pattern: 'upack$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    if (Config.LANG == 'TR' || Config.LANG == 'SI') {
        t1 = 'Makes  Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes  Logo.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes  Logo.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes  Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes  Logo' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes  Logo.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes  Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes  Logo.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes  Logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes  Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes  Logo' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes  Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes  Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes  Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes  Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes  Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes  Logo.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes  Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes  Logo.'
        t28 = 'Makes  Logo.' 
        t29 = 'Makes  Logo.' 
        t30 = 'Makes  Logo.'
        t31 = 'Makes  Logo.'
        t32 = 'Makes  Logo'
        t33 = 'Makes  Logo.' 
        t34 = 'Makes  Logo'
    }
    else {
        t1 = 'Makes  Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes  Logo.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes  Logo.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes  Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes  Logo' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes  Logo.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes  Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes  Logo.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes  Logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes  Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes  Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes  Logo' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes  Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes  Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes  Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes  Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes  Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes  Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes  Logo.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes  Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes  Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes  Logo.'
        t28 = 'Makes  Logo.' 
        t29 = 'Makes  Logo.' 
        t30 = 'Makes  Logo.'
        t31 = 'Makes  Logo.'
        t32 = 'Makes  Logo'
        t33 = 'Makes  Logo.' 
        t34 = 'Makes  Logo'
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'SI') {
  usage_cmd = '🔖 උදාහරණ: *'
        command_cmd = '💠 විදානය : '
        desc_cmd = '💢 Description : '
    } else { 
        usage_cmd = '🔖 Example : *'
        command_cmd = '💠 Command : '
        desc_cmd = '💢 Description : '
    }
    const msg = command_cmd + '```.devil``` \n' + t1 + '_\n' + usage_cmd + '*.devil Ravana*\n\n' +
        command_cmd + '```.bear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.bear Ravana*\n\n' +
        command_cmd + '```.thunder``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.thunder Ra;One*\n\n' +
        command_cmd + '```.123glitch```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.123glitch Ravana*\n\n' +
        command_cmd + '```.berry``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.berry Ravana*\n\n' +
        command_cmd + '```.peridot``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '*.light Ravana*\n\n' +
        command_cmd + '```.joker``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '*.joker Ravana*\n\n' +
        command_cmd + '```.honey``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.ninja Ravana*\n\n' +
        command_cmd + '```.glitter``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.glitter Ravana*\n\n' +
        command_cmd + '```.bokeh``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.bokeh Ra;One*\n\n' +
        command_cmd + '```.greenhorror``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.greenhorror Ravana*\n\n' +
        command_cmd + '```.2marvel``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.2marvel Ravana*\n\n' +
        command_cmd + '```.d3neon``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.3dneon Ra;One*\n\n' +
        command_cmd + '```.metalgalaxy``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '*.metalgalaxy Ra;One*\n\n' +
        command_cmd + '```.metalsilver``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '*.metalsilver Ra;One*\n\n' +
        command_cmd + '```.2graf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '*.2graf Ravana*\n\n' +
        command_cmd + '```.rosegold``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '*.rosegold sl;Ravana*\n\n' +       
        command_cmd + '```.transformer``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '*.transformer Ravana*\n\n' +
        command_cmd + '```.ice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '*.ice Ravana*\n\n' +
        command_cmd + '```.luxurymetel``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '*.luxurymetel Ra;One*\n\n' +
        command_cmd + '```.mtg``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '*..mtg Ravana*\n\n' +
        command_cmd + '```.camarica``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '*.camarica Ravana*\n\n' +
        command_cmd + '```.magma``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '*.magma Ravana*\n\n' +
        command_cmd + '```.layered``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '*.layered Ravana*\n\n' +
        command_cmd + '```.embossed``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '*.embossed Ravana*\n\n' +
        command_cmd + '```.papercut``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '*.papercut Ravana*\n\n' +
        command_cmd + '```.wonderfullgraf``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '*.wonderfullgraf Ra;One*\n\n'+
        command_cmd + '```.criholy``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '*.criholy Ravana*\n\n'+
        command_cmd + '```.reacloud``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '*.reacloud Ravanan\n'+
        command_cmd + '```.catwindow``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '*.catwindow Ravana*\n\n'+
        command_cmd + '```.sci``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.scc Ravana*\n\n'+
        command_cmd + '```.halloween``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.scc Ravana*\n\n'+
        command_cmd + '```.glue``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '*.scc Ravana*\n\n'+
        command_cmd + '```.cup``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '*.cup Ravana*\n\n'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
RAVANA.addCommand({pattern: 'devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/devil.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/bear.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'thunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/thunder.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/thunder.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: '123glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/123g.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/123g.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'berry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/berry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/berry.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'peridot ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/peridot-stone-text-effect-916.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/peridot.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'joker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/joker.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'honey ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/honey-text-effect-868.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/honey.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/honey.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'glitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/tt.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'bokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/bkh.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'greenhorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/greenhorror.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/greenhorror.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: '2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/mar2.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'd3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/3dneon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/3dneon.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'metalgalaxy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/metalgalaxy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/metalgalaxy.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'metalsilver ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-silver-946.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/metalsilver.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/metalsilver.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: '2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/t2gra.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'rosegold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/text-logo-3d-metal-rose-gold-945.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/rosegold.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/rosegold.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'transformer ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",
        [`${match[1]}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/transformer.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/transformer.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'ice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/ice.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'luxurymetel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/color-full-luxury-metal-text-effect-969.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/luxurymetel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/luxurymetel.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'mtg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/mtg.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/mtg.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'camarica ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/captain-america-text-effect-905.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/capamarica.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/capamarica.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'magma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/magma.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'layered ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    jessisapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/layered.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/layered.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'embossed ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/embossed.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/embossed.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'papercut ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/papercut.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/papercut.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'wonderfullgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/wonderfullgraf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/wonderfullgraf.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'criholy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/criholy.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/criholy.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'reacloud ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html",
              `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/reacloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/reacloud.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'catwindow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",
             `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/catwindow.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/catwindow.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'scc ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/scc.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/scc.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'halloween ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/halloween.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/halloween.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'glue ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/glue.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/glue.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'sci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    jessisapi.textpro("https://textpro.me/sci-fi-text-effect-855.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/sci.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/sci.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
RAVANA.addCommand({pattern: 'cup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    jessisapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/Bot/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/Bot/cup.jpg'), MessageType.image, { caption: Config.CP_TEXT})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
