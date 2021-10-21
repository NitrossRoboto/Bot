const NitrossBot  = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const HELP = "Bot help Center"


    NitrossBot.addCommand({pattern: 'rhelp', fromMe: true, deleteCommand: true, desc: HELP,}, (async (message, match) => {

        await message.sendMessage("*🇱🇰HELLOW THIS IS NitrossBot HELP CENTER🇱🇰* \n\n✨මොකක්ද ඔයාගෙ ප්‍රශ්නේ \n\n\n▶මොකක්ද මේ NitrossBot BOT කියන්නේ(.1) \n\n▶සිංදු වීඩියෝ එන්නේ නෑ(.2)\n\n▶ලොගෝ වැඩ නෑ(.3)\n\n▶Alive එක වැඩ කරන්නේ නෑ(.4)\n\n▶Shutdown කරාම on කරන්නේ කොහොමද(.5) \n\n▶බොට් එක පාරම වැඩ නැතුව ගියොත් මොකද කරන්නේ(.6)\n\n▶කොහොමද බොට්ගේ කමාන්ඩ් ටික ගන්නේ(.7) \n\n▶බොට් ගේ කමාන්ඩ් අපිට වැඩ නැත්තේ ඇයි(.8) \n\n▶Update කරන්නද(.9)\n\n▶කොහොමද language වෙනස් කරන්නේ(.10)\n\n▶වෙනත්(.11) \n\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*NitrossBot BOT කියන්නේ Whatsapp Bot ජාතියක්.\n\n*මෙකෙන් මොකක්ද කරන්න පුලුවන්?*\n⭕Whatsapp හරහා song,video ගත හැක.ඔබ බොට් කෙනෙක් නිසා ඔබ කරන්නේ එක වෙන කට්ටියට යවන එක හැබැයි ඔයාටත් ගත හැක.\n⭕100 logos මෙහි ලොගෝ පැක් දෙකක් තිබේ එකක් rpack(.rpack) අනෙක් එක rnpack(.rnpack)\n⭕sticker එකක් පොටෝ එකක් කිරීම ස්ටිකර් සෑදීම පොටෝ ස්ටිකර් කිරීම\n⭕තවත් බොහෝ දේ තිබේ ඒවා දැන ගැනීමට .NitrossBot කියලා ගැහුවම එනවා(ඒක ඔයා ගැහුවොත් එන්නේ නෑ ඔයාගේ බොට් public නම් ඒක වෙන කෙනෙක්ට කියලා ගහගන්න)\n\n*මතක තබා ගන්න මෙය සදහා ඔබගේ ඩේටා කැපෙන්නේ නෑ කැපෙනවනම් ඒ ඔයා auto download on කරලා නිසා පමණි*\n\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*කරුණාකර ඔබගේ බොට්ව restart කරන්න.* \n\n .restart \n\n🥰Thank you for using NitrossBot HELP CENTER🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*එය අපගේ ප්‍රශ්නයක් නොවේ එය ලොගෝ සයිට් එකේ ලිමිට් එක නිසා* \n\nදැන් එයට විසදුමක් ඇත .\n\n```ඔයාලට පුලුවන් ඒ ලොගෝ api වෙනස් කිරීමට ```\n\n.setvar XTEAM_API:ඔයාල ගත්ත api එක \n\n .setvar LOLUHUMAN_API:ඔයාල ගත්ත api එක \n\n\nඔය api ගන්න ක්‍රමේ මෙම වීඩියෝ එකේ ඇත.\n https://youtu.be/vGHpome5e3k\n\n\n 🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබේ alive එක වැඩ නොකර නේ ඔබ alive logo එක වෙනස් කර ඒ ලින්ක් එක වැරදි*\n\nහරියට ලින්ක් එක ගන්න\nසයිට් එක telegra.ph\n\n 🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබ බොට්ව shutdown කරවිට ඔබ heroku එකට ගොස් නැවතත් Resources key එක on කර යුතුයි.*\n\n🥰Thank you for using NitrossBot HELP CENTER🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඒකට කරන්න තියෙන්නේ ඔයා ආයේ heroku එකට ගිහින් more එක ඔබලා restart all dyno ඔබන්න.වෙනත් ප්‍රශ්නයක්නම් හෙරොකු එකේ log එකේ ss එකක් අපේ suppoted group එකට දාන්න.*\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*බොට් හට .NitrossBot හෝ .help ගසන්න.*\n\n🥰Thank you for using NitrossBot HELP CENTER🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබගේ බොට් public නම් එය ඔබට වැඩ නෑ අනිත් අයට වැඩ* \n\nඑය private කිරීමටනම්\n.setvar WORK_TYPE:private\n\nනැවත public කිරීමට\n .setvar WORK_TYPE:public\n\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*Update කරන්න ද?*\n```ඔයාලට ලොකුම ප්‍රශ්නේ ඕකනේ අපේ suppoted group එකෙන් update කරන්න කිව්වම කරාට කමක් නෑ.ඒත් ඊට වඩා හොද ක්‍රමයක් තියනවා ඔයාලා රෑට නිදාගන්න කලින් update වෙන්න දාලා නිදාගන්න``` \n*ඇයි එහෙම කියන්නේ*\n★මොකෝ දවසට update එක දිගට එනවා ඔයාලට ඒම එක දිගට කරද්දි බොට්ව එපා වෙයි😒\n★තව වෙලාවකට error එන update එනවා ඒක නිසා හොදම විසදුම තමා නිදාගන්න කලින් update වෙන්න දාලා නිදාගන්න එක\n\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    NitrossBot.addCommand({pattern: '10', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ඔබ දැනටමත් බොට්ව හදලනම් Language වෙනස් කරන්නෙ කොහොමද?*\n.setvar LANGUAGE:en හරි si හරි.|||en කියන්නේ english / si කියන්නේ සිංහල\n\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි");
    
    }));
    NitrossBot.addCommand({pattern: '11', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*ප්‍රශ්නය අපගේ whatsapp suppoted group https://chat.whatsapp.com/BZxwFPt5pUe19Y4EW9DjDP එක තුලට හෝ මෙම නම්බර් එකට දාන්න wa.me/94756872976*\n\n🥰NitrossBot HELP CENTER  භාවිතා කිරීම ගැන ඔබට ස්තුතියි🇱🇰");
    
    }));
    
