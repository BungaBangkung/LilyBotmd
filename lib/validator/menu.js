const fs = require('fs')
const chalk = require('chalk')

exports.menu = (AMOUNT, msg, prefix, runTime, botName, SETTING) => {
  return `*• USER-INFORMATION*
username: _@${msg.pushName}_
link: _https://wa.me/${msg.sender}_
prefix_you_use: _${prefix}_

ORIGINAL BASE BY RIFZA
 *• BOT-INFORMATION*
botname: _${SETTING.botname}_
ownername: _${SETTING.ownername}_
type: _WhatsApp-Bot • Multi - Device_
module: _@adiwajshing/baileys_
runtime: _${runTime}_
Ig ngabs🗿: https://instagram.com/aditeigth
 *• INSTRUCTION*
 ■ = Work
 ▢ = Eror
 ■ = Work/Maintenance/Error


 *• ALL-MENU/FITUR/CASE - This Bot*

 -> Information
${AMOUNT++}. ⇨ ${prefix + 'tes'} ■
${AMOUNT++}. ⇨ ${prefix + 'ping'} ■ 
${AMOUNT++}. ⇨ ${prefix + 'runtime'} ■

 -> Owner Only
${AMOUNT++}. ⇨ ${prefix + 'public'} ■
${AMOUNT++}. ⇨ ${prefix + 'self'} ■
${AMOUNT++}. ⇨ ${prefix + 'setppbot'} ■
${AMOUNT++}. ⇨ ${prefix + 'setthumb'} ■
${AMOUNT++}. ⇨ ${prefix + 'ohidetag'} ■
${AMOUNT++}. ⇨ ${prefix + 'culik'} ■
${AMOUNT++}. ⇨ ${prefix + 'getcase'} ■

 -> Group Only
${AMOUNT++}. ⇨ ${prefix + 'add'} ■
${AMOUNT++}. ⇨ ${prefix + 'kick'} ■
${AMOUNT++}. ⇨ ${prefix + 'promote'} ■
${AMOUNT++}. ⇨ ${prefix + 'demote'} ■
${AMOUNT++}. ⇨ ${prefix + 'hidetag'} ■
${AMOUNT++}. ⇨ ${prefix + 'ohidetag'} ■
${AMOUNT++}. ⇨ ${prefix + 'group'} ■
${AMOUNT++}. ⇨ ${prefix + 'setnamegc'} ■
${AMOUNT++}. ⇨ ${prefix + 'setdesc'} ■
${AMOUNT++}. ⇨ ${prefix + 'hidetag'} ■
${AMOUNT++}. ⇨ ${prefix + 'tagall'} ■
${AMOUNT++}. ⇨ ${prefix + 'welcome'} ■

 -> Maker
${AMOUNT++}. ⇨ ${prefix + 'sticker'} ■

 -> Shorter link
${AMOUNT++}. ⇨ ${prefix + 'tinyurl'} ■

 -> Tools
${AMOUNT++}. ⇨ ${prefix + 'take'} ■
${AMOUNT++}. ⇨ ${prefix + 'repeat'} ■
${AMOUNT++}. ⇨ ${prefix + 'toqr'} ■

 -> Searching
${AMOUNT++}. ⇨ ${prefix + 'pinterest'} ■
${AMOUNT++}. ⇨ ${prefix + 'pinstick'} ■ 
${AMOUNT++}. ⇨ ${prefix + 'play'} ■
${AMOUNT++}. ⇨ ${prefix + 'music'} ■

 -> Downloader
${AMOUNT++}. ⇨ ${prefix + 'youtubemp3'} ■
${AMOUNT++}. ⇨ ${prefix + 'youtubemp4'} ■
${AMOUNT++}. ⇨ ${prefix + 'tiktoknowm'} ■
${AMOUNT++}. ⇨ ${prefix + 'tiktokdl'} ■

 -> Random Image
${AMOUNT++}. ⇨ ${prefix + 'waifu'} ■
${AMOUNT++}. ⇨ ${prefix + 'neko'} ■
${AMOUNT++}. ⇨ ${prefix + 'awoo'} ■
${AMOUNT++}. ⇨ ${prefix + 'megumin'} ■
${AMOUNT++}. ⇨ ${prefix + 'shinobu'} ■

 
 -> Game 🎮
${AMOUNT++}. ⇨ ${prefix + 'ulartangga'} ■

 -> Inspector
${AMOUNT++}. ⇨ ${prefix + 'inviteinfo'} ■
${AMOUNT++}. ⇨ ${prefix + 'inspect'} ■

 -> 🔥MODE HARD!!!!
${AMOUNT++}. ⇨ ${prefix + 'sendbug'} ■
${AMOUNT++}. ⇨ ${prefix + 'sendbugkontak'} ■
${AMOUNT++}. ⇨ ${prefix + 'sendbugrows'} ■
${AMOUNT++}. ⇨ ${prefix + 'bugpayement'} ■
${AMOUNT++}. ⇨ ${prefix + 'bugdelete'} ■

${"```THANKS TO :````"}
- @ꪶꫂꬅ꤃ϝᎥґꪜꫂ🅥 (creator)
- @adiwajshing/baileys (module)
- @DEFF
- @FEBZABOTZ 
`
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})