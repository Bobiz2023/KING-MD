const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhTRk9JeEhHNC9OL0VSd2N5Ulc3SXoraWNPeXdqS1gzMDE5QnM1UzRGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFQvdGlEeUxxS1VPMG5uRCtmRE82Ry8yYUg5eUhjVnp2Qy9xSm1HMzlCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q0FYRGxpQVlkb0xDTmhBRFJsclQ1bng2ZzBkUFZtTXBiUU40Q2tJSzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aC9pWUdSeHJlZUl1T3Jtd0tKS2k1T1dDYnNPMll1a2daZzhXVHZPazM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDOFFHZnpCTUcyalZrYUdaUnlORW9ENk15N3RFZmtzOUc5MkNrNC9oRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhFaFJ2S3pialV6YzZpNUJPTTZxMHpFeEJTMDVTdDhOK0JGOW1CVE10SGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NaUEUrbTN1Mnprc2xBbW96M1AvZ3R1WnBhRDZOaEp4V3YydWdSakZIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3ZXNWg1NjM5WmVaWnBqQm5jNE9kYlNpTjlIYUg1NnBmVVpZQ2NOQm9HOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpIMFYzOHN6U2JEZlNJYUd0MFBEZStJYTZKZ0FaT3hwbVlyVTVETjdWRjBabjF3SklKMGhrQm85NC9XTWxxeDRRZitOeXBIZlRvTmxYU0tLWG40RGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJrLzdybWZSUi8yMzFOcjFNTTFvZDUwd2Ezakh3V01OZE5PNFdaalpMUUhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjY0NDUyMzgxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRDJFM0MyRTdBMEI5MEVGODdGRURCRjhFNDA2OUIzQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3NjE2ODMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI2NDQ1MjM4MTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUJFNkNDQ0I2MUM5REI1NDMxQTkzRjVGRjRBNERBOUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzYxNjgzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNjQ0NTIzODE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc5Njk2NjI5RkI5Rjk0QUNFQTg3NzYxMDc3Njk1QzdGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTc2MTY4MzR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjY0NDUyMzgxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MTFGQjhGMURDMDcwMTNDRDNCNDRDREMxNUI1MkE2MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3NjE2ODM0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXdVBCLWl5cVQxV0JuWldKVHMxS2RBIiwicGhvbmVJZCI6IjI5YTU0ZDExLTNjYWMtNDY3Ni1iMGNmLWVjNzgxY2E3ZWM4NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWGNmcXJ3dHIvN1RVMXVuQ3RLSXVyVnNjcms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09oMkFEaUR5cHRTQVBJd1hOWUpVMUl3eFQ4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZNWTlZSjRQIiwibWUiOnsiaWQiOiIyMTI2NDQ1MjM4MTQ6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYS4wYjAuYyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2pUbEpZQ0VLZUJnN01HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSDV0RnFvYTJPSnppWStBNXh5akhZTm9iMmprclhqY2ZUcnZvZmtlU2VpMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYTFwSFkvYVFoSmpVWmdWdmswd0xBYnhDcGN5aDhCNnhCc2t6TVN5K25FWTArT29ySllZQ2d6NzZ2d2h6Y1Z0QlhqN2dsZFdGSE5pMXdVREtiWXJBQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFPd2ZQQTJSWk9jVHZrdEFwN0JudFNLeHpIMnpIN041NGZ2TDUvZFR5NzhpV2NoZ2o5UUVKMmRMczFScW9DejVkcW9pRFJKTnl6VTJqbno2VVZyN2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjQ0NTIzODE0OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIrYlJhcUd0amljNG1QZ09jY294MkRhRzlvNUsxNDNIMDY3Nkg1SGtub3QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTc2MTY4MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHhlIn0="
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '212644523814'
global.devs = '212644523814';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ABDERRAHMANE': process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '91' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
