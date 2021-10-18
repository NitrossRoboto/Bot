const RAVANA = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

RAVANA.addCommand({pattern: 'remegancy', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    r_text[1] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    r_text[2] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    r_text[3] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    r_text[4] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    r_text[5] = "https://telegra.ph/file/5951eb9cb40a81953a0aa.png";
    
    var i = Math.floor(5*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `✅══════EMEGANCY══════✅
      *RAVANA  EMEGANCY NUMBER*

✅Ambulance     =     1990

✅Police Emergency Hotline     =    118/119

✅Tuorist Police    =   011-2421052

✅Emergency Police Mobile Squad   =   011-5717171

✅Fire and Rescue   =   111

✅Goverment Information Centre   =    1919

✅SriLanka Tourism   =   1912

✅Department of Immigration and Emigration   =   1962

✅Child & Women Bureau   =   0112444444

✅Bomb Diposal Unit    =    011243451

   
`}) 

}));
