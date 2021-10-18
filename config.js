//https://github.com/NitrossRoboto/Bot

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Nitross.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.0 stable',
    CHANNEL: 'https://github.com/NitrossRoboto/Bot',
    SESSION: process.env.NITROSS_SESSION === undefined ? '' : process.env.Nitross_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    BIOTEXT: process.env.BIOTEXT === undefined ? 'Nitrossbot@whatsapp.net' : process.env.BIOTEXT,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'SI' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? '♧😂 *Hi! I am Live Now  ♨♞*\n\n*Version:* _v1.0 Stable_\n\n*Developer:* ```NITROSS ROBOTO```\n\n*GitHub :* https://github.com/NitrossRoboto/Bot\n\n*Nitross Bot භාවිතා කිරීම ගැන ස්තූතියි...*' : process.env.ALIVE_MESSAGE,
    ALIVE_IMG_TYPE: process.env.ALIVE_IMG_TYPE === undefined ? 'pp' : process.env.ALIVE_IMG_TYPE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/cc76f880d8583b8d2bfe0.jpg' : process.env.ALIVE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    OWNER: process.env.OWNER_NAME === undefined ? 'NitrossBot™' : process.env.OWNER_NAME,
    CP_TEXT: process.env.CP_TEXT === undefined ? '*_Provide By NitrossRoboto (C) 2021*_' : process.env.CP_TEXT,
    SONG_UP: process.env.SONG_UP === undefined ? '_⏳ Plz Wait...\n Nitross Bot Is Fighting 🥊 With Songs 🎶 Library_' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? '_*⏬ Downloading Your Requested Video...*_' : process.env.VIDEO_DOWN,
    VID_CP: process.env.VID_CP === undefined ? '_*👾 Provided By Nitross*_' : process.env.VID_CP,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? '*_🤩 Uploading your video to 🗨️ WhatsApp..._*' : process.env.VIDEO_UP,
    MENTION: process.env.TAG_REPLY === undefined ? '9471489843@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BOT: process.env.BOT_NAME === undefined ? '☮ 🇱🇰 NitrossBot™ Sinhala' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONG_D: process.env.SONG_D === undefined ? '*_⏳ Plz Wait...\n Nitross Bot Is Uploading Your 🎶 Song_*' : process.env.SONG_D,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[./]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    OWNER: process.env.OWNER === undefined ? '94714898434,0' : process.env.OWNER,
    XTEAM_API: process.env.XTEAM_API === undefined ? '5bd33b276d41d6b4' : process.env.XTEAM_API,
    ZEKS_API: process.env.ZEKS_API === undefined ? 'cjxJIn9eDletRHac3CG6CdvGxFH' : process.env.ZEKS_API,
    LOLUHUMAN_API: process.env.LOLUHUMAN_API === undefined ? '990580a2e31add15990665b0' : process.env.LOLUHUMAN_API,
    OWNERNUM: process.env.OWNERNUM === undefined ? '94714898434' : process.env.OWNERNUM,
    MENU_H: process.env.MENU_HELP_EMOJI === undefined ? '💮' : process.env.MENU_HELP_EMOJI,
    MENU_E: process.env.MENU_EXAMPLE_EMOJI === undefined ? '💠' : process.env.MENU_EXAMPLE_EMOJI,
    MENUTEXT: process.env.MENUTEXT === undefined ? '*📜 NitrossBot Menu*' : process.env.MENUTEXT,
    MENU_LOGO: process.env.MENU_LOGO === undefined ? 'https://telegra.ph/file/196687b452f1a1a49079c.jpg' : process.env.MENU_LOGO,
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Nitross.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "94714898434-1622727009",
    SUPPORT2: "94714898434-1626232632"
};
