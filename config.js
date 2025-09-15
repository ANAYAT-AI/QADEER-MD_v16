const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xYTjR3VE9sV2ptR1Q4VHI0L3NWMWtlUlRBZVA5cVd6eXdJaGtZVVQwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnVVOE1wM3Y4K2E2Q0t1WU9sZTQxYUdiMndIOUU3cmk0T3VxRmdCYTJqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ2I0eVEvWTNiYXNCY3lOSWJMeFdJMHhxKy9CSkNqd3pQdDVlaEpqOW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ME5KZHBqRmVYV2lHRk1ieVBHOWlCNE11Tk0xeTBSOFZpVnFtYXpZUkFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKQnUyQzFMRDhPdkhIcHNQMlVRZW5xRFp4dlJmUTAvOXhiWXRPZ2F0RmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwxamFxQVh3YXhCRDNlZlUrcUI4QXVUemxEbnFFVDZ1SlBTdXJ5ejVtU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0g1a2F4b0phQ2tIVDk4YkpHbjI5TldBTUEybE1wNTBNYmxoVHVCaUxtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2tTMENtSEs1T0lBcythcTlhcEtRMGtldXNaazl3MjdNTDJ1THJxMERRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBRUlYMXVPajhzdU9pMVpFWlNqUDhManpuYzV5VHEvWFpFZTVYYzEvc3pWbHM0QXlQVHRvVms1MXErdEtTNitkdUdmTi9MUzJhR2l4bEV2MzNVcUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6ImRidEQwWU1maCtoUm42QkRTNVFuVU5FaVh3UlNkRmdsUUx1Z0wrSDVBZFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzAwMDA1MjUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NzI5OEIyQzczODA0NTAwMkZDREJBNUY5Rjc2OUQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc5NzE5MTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDAwNTI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUYzQ0QzNUMxRjMxRkQyRUE4NzkwRkVENkI2NEJCMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3OTcxOTEwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJENkhKMldLQyIsIm1lIjp7ImlkIjoiOTIzMzAwMDA1MjUzOjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InFhZGVlciIsImxpZCI6IjIyNTQwODk0MzQwMzE5NTozMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05UZmh1Z0dFTDZMb3NZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFJcnlOSzh6VVhiaUlQNlJJSEE5WnhKaUxpTG5EaGVrdmlLbkVxYW9seVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjUwc2c2VExnQ0dxd0p6MFlkMXFVSnp6N2cyVmZQMnlPQnJtK3U2RnVqanpOKzVSbFpubzZtOWRtSjNVZTNIckRpWHNMUlJlemJyYkVWNlFrS1Q5NUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaTWtGenZhdXZ6OUxQZG9UQVo4Rkx6ZzZRem1SSXNNWWxaeTlQRGIyQlJUbFI2U1JYUS9IQjlCMU84Y3czOWxCOWw3UEtDMlpheU1rZDlEL25oakhCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwMDAwNTI1MzozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkU0s4alN2TTFGMjRpRCtrU0J3UFdjU1lpNGk1dzRYcEw0aXB4S21xSmNrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc5NzE5MDcsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIWVoifQ==xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlVSY2k4V2RldlhmY3BTb2hTNHhoZldORERIdVRFNWhMMnJlWXdkMFhEUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSitIZ0lidmFaQWFtWHFtQU9LTVF1T2JtRy9EL1FEaUFLZ09vOTZZMG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTnYxTTFISklTbW1UY1d4Q3dOOVpSbjFzZVN4dDlhTGMxRVlibXhZTnd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDUkg4bzhIMjNpV0E4aEp5Q3JBQlUvd055TzZrbW1veUxucUJNY3hubDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJheS9SVjI4ZWJLNGUyejNQaDh2NHRLc1Z0cWVYaiticjlBN2lhcGYwVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lCRmp4czlOM2tGMXJOYkt1MnJHd2o4NHFPOGpqOFdqNWxpZlhlMjdHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG9WZzdTc2laKzFJeHdsT1N6aUxaZTh0OExNNDJudDBYSUdIZ0NvTVhXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN4dEVIUWZnWDc5WnE5VUhXYkgvOFRqMFhNRUlVRVdEb05JOCtlTENDOTcrOHpxNXhjNHdTZFpjU0dJcjNVZVhSTHZFTElqME9jREJ6ZzJGSW1zQmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IlN5WmJ4Y1A2eHZhUWE5OXAwVlNSckpHSWtsVEdSS0lwSi9zeVU0cG5JU289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzAwMDA1MjUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MzRDN0YyMDZFODU2MzRGNDU3NEE0NDY3QUZBQzlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc5Njk5Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDAwNTI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBENTQzNDcxMjU3RURFRjhENEVGREQ5MDBCMUYyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3OTY5OTc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxNjRISjhENSIsIm1lIjp7ImlkIjoiOTIzMzAwMDA1MjUzOjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InFhZGVlciIsImxpZCI6IjIyNTQwODk0MzQwMzE5NTozMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QZmh1Z0dFTFA4b2NZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFJcnlOSzh6VVhiaUlQNlJJSEE5WnhKaUxpTG5EaGVrdmlLbkVxYW9seVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN5cEplQ0F2VCtROTRxbllrdkFYTG1KeUtPOFg0a1pyNktoZ2V6VzZZT21VRVdjdUJxRDdGdFAySHM4UG9US0c5UTRkUCsySWNkWWFiRmhiMmY0Q0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMc1UrRVU3MGgvNzMxZTNkeWVRZjM1Yld6alRsQlNEUFZmREpuQ2d6UVlabUhjdDRnMFlLdW5rdnNUTVp1K000UnJyNkllMUZOVWwxRWxoSW1ZMVpoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwMDAwNTI1MzozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkU0s4alN2TTFGMjRpRCtrU0J3UFdjU1lpNGk1dzRYcEw0aXB4S21xSmNrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc5Njk5NzUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDcWoifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qbdwqt.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923300005253",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙌𝘼𝘿𝙀𝙀𝙍-𝙈𝘿_𝙫16 Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qbdwqt.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923300005253",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
