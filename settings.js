/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '$';
const mycode = process.env.CODE || "237";
const author = process.env.STICKER_AUTHOR || '_*🩸𝗗𝗜𝗔𝗠𝗢𝗡𝗗💎𝗞𝗠𝗚🩸*_';
const packname = process.env.PACKNAME || '_*🩸𝗗𝗜𝗔𝗠𝗢𝗡𝗗💎𝗞𝗠𝗚🩸*_';
const dev = process.env.DEV || '237681640773';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DIAMOND-MD-BOT';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
