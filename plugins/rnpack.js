const Nitross = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "make txt into photo."
const NEED_WORD = "*type somr word*"

if (Config.WORKTYPE == 'private') {

    Nitross.addCommand({pattern: 'rnpack', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

         var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/d34f1216d80604adb4f43.jpg";
        r_text[2] ="https://telegra.ph/file/000e36957e64bf5631335.jpg";
        r_text[3] ="https://telegra.ph/file/0199efbc45fa53c42b610.jpg";
        r_text[4] ="https://telegra.ph/file/2051703355acecb2ce5c9.jpg";
        r_text[5] ="https://telegra.ph/file/d2d9e494d6938b6b81a3c.jpg";
        
var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════⦁⦁⦁⦁Nitross⦁⦁⦁⦁═════╗*\n*⫘⫘```Nitross LOGO PACK```⫘⫘*\n     *Nitross LOGOS💥*\n\n🎯 Command: *.rnskalt*\n*🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnug*\n*🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnwicker*\n*🧿Description: *It Converts Text to Logo*\n\n*🎯 Command: *.rnhwf*\n*🧿Description: *It Converts Text to  logo\n\n🎯 Command: *.rnneon*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnnt*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rngc*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rndg*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnchocolotcake*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnrock*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnlava*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnyg*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnrobot*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rngs*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnriv*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rncloud*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnmarvals*\n🧿Description: *It Converts Text to Marval Studio logo*\n\n🎯 Command: *.rnwolfblack*\n🧿Description: *It Converts Text to black wolf logo*\n\n🎯 Command: *.rnsteel*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncfnr*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnsandwriting*\n🧿Description: *It  Text to Logo *\n\n🎯 Command: *.rnsandsb*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncsgo*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnlp*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnm7l*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnaov*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnpokemon*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnbevel*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnsmoketypography*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnrainbowbg*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnkueultah*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnfur*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rncrispchrome*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnstars*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnunderwebmatrix*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnunderwebmatrix*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnlolcover2*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncoveroverwatch*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnwarfacecover*\n🧿Description: *It Converts Text to logo*\n\n*Nitross LOGO PACK*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.'})
        
    }));

    Nitross.addCommand({pattern: 'rnskalt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

var webimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnug ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));


    Nitross.addCommand({pattern: 'rnwicker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnhwf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnnt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rngc ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rndg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/deluxegold?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnchocolotcake ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnrock ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnlava ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnyg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnrobot ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/robotr2d2?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rngs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnriv ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rncloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnmarvals ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvelstudios?text=STUDIO&text2=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnwolfblack ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=Nitross&text2=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnsteel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rncfn ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnsandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnsandsb ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rncsgo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/csgo?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnlp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

    Nitross.addCommand({pattern: 'rnm7l ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/mastery7lol?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));
    Nitross.addCommand({pattern: 'rnaov ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
    }));
    Nitross.addCommand({pattern: 'rnpokemon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pokemon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
        
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
        
    }));
    Nitross.addCommand({pattern: 'rnbevel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
            
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
            
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
            
    }));
    Nitross.addCommand({pattern: 'rnsmoketypography ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                
    }));
    Nitross.addCommand({pattern: 'rnrainbowbg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                    
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                    
    }));
    Nitross.addCommand({pattern: 'rnkueultah ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                        
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                        
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                        
    }));
    Nitross.addCommand({pattern: 'rnfur ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                            
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                            
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                            
    }));
    Nitross.addCommand({pattern: 'rncrispchrome ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                
    }));
    Nitross.addCommand({pattern: 'rnstars ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                    
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                    
    }));
    Nitross.addCommand({pattern: 'rnunderwebmatrix ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                        
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                        
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                        
    }));
    Nitross.addCommand({pattern: 'rnlolcover2 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                            
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                            
    }));
    Nitross.addCommand({pattern: 'rncoveroverwatch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                                
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                               
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                                
    }));
    Nitross.addCommand({pattern: 'rnwarfacecover ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                                    
    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}5bd33b276d41d6b4`, { responseType: 'arraybuffer' })
                                                    
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                                    
    }));
    
}
if (Config.WORKTYPE == 'public') {

    Nitross.addCommand({pattern: 'rnpack', fromMe: false, desc: EFFECT_DESC}, (async (message, match) => {    

    var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/d34f1216d80604adb4f43.jpg";
        r_text[2] ="https://telegra.ph/file/000e36957e64bf5631335.jpg";
        r_text[3] ="https://telegra.ph/file/0199efbc45fa53c42b610.jpg";
        r_text[4] ="https://telegra.ph/file/2051703355acecb2ce5c9.jpg";
        r_text[5] ="https://telegra.ph/file/d2d9e494d6938b6b81a3c.jpg";
        
var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '╔═════⦁⦁⦁⦁Nitross⦁⦁⦁⦁═════╗*\n*⫘⫘```Nitross LOGO PACK```⫘⫘*\n     *Nitross LOGOS💥*\n\n🎯 Command: *.rnskalt*\n*🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnug*\n*🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnwicker*\n*🧿Description: *It Converts Text to Logo*\n\n*🎯 Command: *.rnhwf*\n*🧿Description: *It Converts Text to  logo\n\n🎯 Command: *.rnneon*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnnt*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rngc*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rndg*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnchocolotcake*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnrock*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnlava*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnyg*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnrobot*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rngs*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnriv*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rncloud*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnmarvals*\n🧿Description: *It Converts Text to Marval Studio logo*\n\n🎯 Command: *.rnwolfblack*\n🧿Description: *It Converts Text to black wolf logo*\n\n🎯 Command: *.rnsteel*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncfnr*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnsandwriting*\n🧿Description: *It  Text to Logo *\n\n🎯 Command: *.rnsandsb*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncsgo*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnlp*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnm7l*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnaov*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnpokemon*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnbevel*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnsmoketypography*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rnrainbowbg*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnkueultah*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnfur*\n🧿Description: *It Converts Text to Logo*\n\n🎯 Command: *.rncrispchrome*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnstars*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnunderwebmatrix*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnunderwebmatrix*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnlolcover2*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rncoveroverwatch*\n🧿Description: *It Converts Text to logo*\n\n🎯 Command: *.rnwarfacecover*\n🧿Description: *It Converts Text to logo*\n\n*Nitross LOGO PACK*\n\n\n*සමහර ලොගෝ වැඩ නෑ.ඒ වරද අපේ බොට්ගේ නොවේ ලොගෝ දෙන සයිට් වල limit එක බැවින් අපිට එයට කරන්න දෙයක් නැත.'})
        
    }));

    Nitross.addCommand({pattern: 'rnskalt ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
    var webimage = await axios.get(`https://api.xteam.xyz/textpro/skeleton?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnug ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/ultragloss?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
    
        Nitross.addCommand({pattern: 'rnwicker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/wicker?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnhwf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/helloweenfire?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnnt ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/neontext?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rngc ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/glossycarbon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rndg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/deluxegold?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnchocolotcake ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/chocolatecake?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnrock ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/rock?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnlava ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/lava?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnyg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/yellowglass?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnrobot ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/robotr2d2?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rngs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/goldsparklingjewelry?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnriv ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/realisticvintage?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rncloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnmarvals ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/marvelstudios?text=STUDIO&text2=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnwolfblack ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=Nitross&text2=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnsteel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
       var topText, bottomText;
        if (match[1].includes('/')) {
            var split = match[1].split('/');
            bottomText = split[1];
            topText = split[0];
    }
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/steel?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rncfn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnsandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnsandsb ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rncsgo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/csgo?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnlp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolpentakill?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
    
        Nitross.addCommand({pattern: 'rnm7l ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/mastery7lol?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
    
        }));
        Nitross.addCommand({pattern: 'rnaov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
        
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
        
        }));
        Nitross.addCommand({pattern: 'rnpokemon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
            
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/pokemon?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
            
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
            
        }));
        Nitross.addCommand({pattern: 'rnbevel ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/bevel?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                
        }));
        Nitross.addCommand({pattern: 'rnsmoketypography ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/smoketypography?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                    
        }));
        Nitross.addCommand({pattern: 'rnrainbowbg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                        
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/rainbowbg?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                        
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                        
        }));
        Nitross.addCommand({pattern: 'rnkueultah ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                            
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                            
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                            
        }));
        Nitross.addCommand({pattern: 'rnfur ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/fur?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                
        }));
        Nitross.addCommand({pattern: 'rncrispchrome ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/crispchrome?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                    
        }));
        Nitross.addCommand({pattern: 'rnstars ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                        
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/stars?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                        
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                        
        }));
        Nitross.addCommand({pattern: 'rnunderwebmatrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                            
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                            
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                            
        }));
        Nitross.addCommand({pattern: 'rnlolcover2 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                                
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                                
        }));
        Nitross.addCommand({pattern: 'rncoveroverwatch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                                    
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                                    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                                    
        }));
        Nitross.addCommand({pattern: 'rnwarfacecover ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
                                                        
        var webimage = await axios.get(`https://api.xteam.xyz/photooxy/warfacecover?text=${encodeURIComponent(match[1])}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })
                                                        
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CP_TEXT})
                                                        
        }));
        
    }
