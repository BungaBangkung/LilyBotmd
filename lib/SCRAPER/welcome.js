/*/
  * © Creator : @rifza.p.p
  * https://github.com/Rifza123
  * https://youtube.com/channel/UCEyVimXfcw-vL3TLSNxlyRQ
  * https://wa.me/6287708357324
/*/

const { exec } = require('child_process')
const fs = require('fs')
const Jimp = require('jimp')

/*/
  * {welcome} Lokasinya sesuaikan aja sama lokasi gambar template nya
  * {leave} Lokasinya sesuaikan aja sama lokasi gambar template nya
  * {beam} Lokasinya sesuaikan aja sama lokasi gambar template nya  
/*/
let welcome = './storage_cabinets/image/welcome.jpg'
let leave = './storage_cabinets/image/leave.jpg'
let beam = './storage_cabinets/font/Beam.ttf'
const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var bu = await Jimp.read(buffer);
        var ab = await bu.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
} 
const sleep = async (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms))
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
         
 //bantu rapiin lagi bg, masih kurang maksimal
//kadang delay, sekalian fix in bg
        
exports.makeWelcome = async(client, num, groupName) => {
         try {//mencoba
           ppuser = await client.profilePictureUrl(num, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }          
          let resz = await reSize(ppuser, 500, 500)//mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         var rand7 = 'pp.jpg'
         let sen = num
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         let resImage = `./storage_cabinets/image/${randh}`
         let numbr = sen.replace('@s.whatsapp.net', '')//menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `./storage_cabinets/image/${randp}`//get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz)//membuat file jpg yang telah disempurnakan oleh resz  
         exec(`magick '${locate_pp}' -frame 15x15+15+0 -frame 17x17 -frame 17x17+0+17 '${locate_pp}'`)//add border pada profile whatsap
          .on('exit', () => { 
             exec(`magick '${welcome}' -size 3264x1370 -fill 'white' -font '${beam}' -pointsize 92 -interline-spacing 1 -annotate +19+1320 '${numbr}' -fill 'white' -undercolor '#263238' -font '${beam}' -pointsize 90 -interline-spacing 1 -annotate +1700+1320 '${groupName}' '${locate_pp}' -gravity center -geometry -1120+20  -composite '${resImage}'`)//menyusun dan membuat hasil akhir
        }) 
         setTimeout(() => { fs.unlinkSync(resImage)}, 10000)
         setTimeout(() => { fs.unlinkSync(locate_pp)}, 10000)
         await sleep(3000)//turu
        return fs.readFileSync(resImage)//maka pada hasil akan terlihat sebagai buffer         
}

exports.makeGodbyee = async(client, num, groupName) => {
         try {//mencoba
           ppuser = await client.profilePictureUrl(num, 'image')
         } catch {//jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }       
          
         let resz = await reSize(ppuser, 500, 500)//mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         let sen = num
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         let resImage = `./storage_cabinets/image/${randh}`
         let numbr = sen.replace('@s.whatsapp.net', '')//menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `./storage_cabinets/image/${randp}`//get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz)//membuat file jpg yang telah disempurnakan oleh resz  
         exec(`magick '${locate_pp}' -frame 15x15+15+0 -frame 17x17 -frame 17x17+0+17 '${locate_pp}'`)//add border pada profile whatsap
         .on('exit', () => { 
            exec(`magick '${leave}' -size 3264x1370 -fill 'white' -font '${beam}' -pointsize 92 -interline-spacing 1 -annotate +19+1320 '${numbr}' -fill 'white' -undercolor '#263238' -font '${beam}' -pointsize 90 -interline-spacing 1 -annotate +1700+1320 '${groupName}' '${locate_pp}' -gravity center -geometry -1120+20  -composite '${resImage}'`)//menyusun dan membuat hasil akhir
        })
        setTimeout(() => { fs.unlinkSync(resImage)}, 10000)
        setTimeout(() => { fs.unlinkSync(locate_pp)}, 10000)
        await sleep(3000)//turu
        return fs.readFileSync(resImage)//maka pada hasil akan terlihat sebagai buffer      
}