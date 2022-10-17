  const fs = require('fs')
  const { makeWelcome, makeGodbyee } = require('../../lib/SCRAPER/welcome.js')
  exports.groupResponse = async (client, update) => {  
   const metadata = await client.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await client.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
          if (update.action == 'add') {       
         await makeWelcome(client, num, metadata.subject).then(async(res) => {   
         if(res){
         var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcome👋` 
               }, type: 1 
              }
             ]             
         await client.sendMessage(
         update.id, 
         { 
         caption: `*Hello @${num.split("@")[0]} Welcome to ${metadata.subject}*`, 
         image: res,
         buttons: button, 
         footer: 'LilyBoy', mentions: [num] })        
         }
         })
         
         } 
        else 
        if (update.action == 'remove') {
        await makeGodbyee(client, num, metadata.subject).then(async(res) => {   
          if(res){
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Sayonara👋` 
               }, type: 1 
              }
             ]
        await client.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} leave the group ${metadata.subject}*\nWhy did he come out huh?, ummm...`, 
           image: res,
           buttons: button, 
           footer: 'LilyBoy', 
           mentions: [num] 
             }
             )
             }
             })
             
            }
           }
        } catch (err) {
        console.log(err)
      }
    }   
  }

