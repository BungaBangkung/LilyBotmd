//@rifza.p.p
/**
         [ CREDITS ]
         * Coding by @rifza.p.p
         * @ YT : https://youtube.com/channel/UCEyVimXfcw-vL3TLSNxlyRQ
         * @ YT CHANNEL : ꪶꫂꬅ꤃ϝᎥґꪜꫂ 🅥 
         * @ WhatsAp
*/
const { exec } = require('child_process')
const { chalk, color, bgcolor, ConsoleLog, biocolor } = require('../lib/color')
const { waiting } = require('../lib/waiting')
const term = require('terminal-kit').terminal 
const loading = async () => {
var progressBar , progress = 0 ;
function doProgress()
{
    progress += Math.random() / 10 ;
	progressBar.update( progress ) ;	
	if ( progress >= 1 )
	{
     setTimeout( function() { console.clear(),
     exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
     console.log(stdout), console.log(bgcolor('New base whatsapp bot by @Rifza', 'gray'))})}, 200 ) ;
	} else {
      setTimeout( doProgress , 90 + Math.random() * 200 ) ;
    }     
}

 progressBar = term.progressBar( { width: 80, title: '\n\nLoad this script....', eta: true, percent: true } );

doProgress ()

  setTimeout(() => {
    waiting('2', 'Waiting for new message..')
  }, 10000)
}
module.exports = { loading }