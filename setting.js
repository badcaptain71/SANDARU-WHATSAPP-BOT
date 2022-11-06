const fs = require('fs')
const chalk = require('chalk')

// WEB APIKEY
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// APIKEY WEBSITE
global.ApiKey = 'coderevolution' 

global.smm = {
  nomor : '919037858501',
  atasnama : 'XCoco'
}

// Other
global.owner = ['919037858501']
global.premium = ['919037858501']
global.sponsor = 'Tidak Ada Sponsor :)'
global.packname = 'Sandaru'
global.footer = 'SANDARU Multi Device'
global.author = 'WhatsApp'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: '*Please Wait. Processing Data* 🔥',
		den:'Sorry You Not Register',
		proc:'*Loading Please Wait*..',
		error:'*Error* ❌',
		success:'Success band!',
		repiar:'This Feature Maintace!',
		botadm:'BOT MUST Be Admin First!',
		admin:'I am Not Admin!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
