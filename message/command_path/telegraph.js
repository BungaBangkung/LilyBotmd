const { TelegraPh } = require('../../lib/SCRAPER/telegraph')
    
 module.exports = {
    order: ['telegraph'],
    exec: async (msg, client, from) => {
      if ((msg.isQuotedImage)  && args.length == 0) {
        let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
        let tph = await TelegraPh(media)
          await msg.reply(tph)
       } else { msg.reply(`Reply gambar dengan caption ${prefix + command} \n`) }
    }
}