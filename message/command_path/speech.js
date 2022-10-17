const SETTING = require('../../lib/validator/config.js')

module.exports = {
    order: ['speech', 'tts'],
    exec: async (msg, client, from, { q, args, order }) => {
    if (args[0] === "list" || args[0] === "daftar") { 
      msg.reply('*List Languages text to speech*\n' + SETTING.languages)
    } else {     
      let text1 = q.split("|")[0]
      let text2 = q.split("|")[1]
      if (!text1) return msg.reply(`Contoh! : ${order + ' ' + 'id|halo tes'}`)    
      if (!text2) return msg.reply(`Contoh! : ${order + ' ' + 'id|halo tes'}`)
    await msg.speech(from, text1, text2)
   }
  }
}