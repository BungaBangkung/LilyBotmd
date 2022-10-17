  /**
         [ CREDITS ]
         * Coding by @rifza.p.p
         * @ YT : https://youtube.com/channel/UCEyVimXfcw-vL3TLSNxlyRQ
         * @ YT CHANNEL : Rifza123
         * @ WhatsApp : wa.me/6287708357324
  */
  //Script case & plugins ✓
  /**
         [ CREDITS ] || [ THANKS TO ]
         * @rifza.p.p
         * @Deff
         * @adiwajshing/baileys
         
  */
  console.log('Starting...');
  const SETTING = require('./lib/validator/config')
  const pino = SETTING.modul.pino
  const chalk = SETTING.modul.chalk
  const fs = SETTING.modul.fs
  const jimp = SETTING.modul.jimp  
  const path = SETTING.modul.path
  let { Boom } = SETTING.modul.boom  
  const { move } = require(SETTING.file.move)
  let { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, proto } = SETTING.modul.baileys
  const { color, bgcolor, ConsoleLog, biocolor } = require(SETTING.file.color)
  const { groupResponse } = require('./message/group/groupResponse.js')

  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  const { welcomeJSON } = require('./storage_cabinets/D-B/fetchLocationJson.js')
   //detect
      require('./lib/PRECISAR/precisar')
      require('./lib/function')
      require('./lib/SCRAPER/ephoto')
      require('./lib/SCRAPER/removebg')
               //=======================================================//
                                        /* { function } */
               //=======================================================//
             const sleep = async (ms) => {
                return new Promise(resolve => setTimeout(resolve, ms))
             }   
             
         try{      
         async function operate () {         
              const { state, saveState } = useSingleFileAuthState(SETTING.sesionName + '.json');    
              let { version } = fetchLatestBaileysVersion()
              const client = makeWASocket({ logger: pino({ level: 'silent' }), printQRInTerminal: true, browser: ['Thunder-XM Multidevice','Safari','1.0.0'], auth: state })
              
              
                /** plugins **/
             let pluginFolder = path.join(__dirname, './message/command_path')
              let pluginFilter = filename => /\.js$/.test(filename)
              global.plugins = {}
              for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
               try {
                     global.plugins[filename] = require(path.join(pluginFolder, filename))
                } catch (e) {
                     console.log(e)
                     delete global.plugins[filename]
               }
             }
             console.log(Object.keys(global.plugins))
     
               //=======================================================//
                                        /* { client.ev.on } */
               //=======================================================//
               
               client.ev.on('connection.update', async (update) => {
                   let { Connecting } = require("./connection/systemConnext.js")        
                         Connecting({update, client, Boom, DisconnectReason, sleep, operate}) 
                })      

               //save session 
                 client.ev.on('creds.update', saveState);   
                 store.bind(client.ev) 
               
                 client.ev.on('messages.upsert', async ({ messages }) => {
                      const msg = messages[0]; 
                       if (!msg.message) return
                           const from = msg.key.remoteJid  
                           const type = getContentType(msg.message)
                           const textMessage = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
                          move(client, msg, store) 
                     require('./message/msg.js')(msg, client, from, store) //client.sendPresenceUpdate('recording', from) 
                  })
                
                  client.ev.on('group-participants.update', async (update) =>{
                      const welcomeJson = welcomeJSON
                          if(!welcomeJson.includes(update.id)) return
                           groupResponse(client, update)
                      console.log(update)
                   })         
                  
  
         }
       //=======================================================//
                                 /* { starting } */
       //=======================================================//
        operate ()
      } catch (e) { console.log(chalk.red(e)) }
  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
process.on('uncaughtException', console.error)
