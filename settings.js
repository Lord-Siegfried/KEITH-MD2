/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBaSFVkYXNOQ1M2Ykt2VkF6ODRldkR2dHlIQjdLQW5nQkRqT1ltdXhuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hpQVpQOW9LV2Z5SUZUcmIzbkpCRlU0Z2c3cnVhQU5nZUFpcWJNYWd3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTGJhQjN0SHRMZGZHcXMyayt2bXEwalBTNzVyR3NONGltU3VMUis3UDBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSFR5U1I1YzMvUjNBOFBQdElEVTd0alo1TFZFbmNJODJjclI5VDdMTXpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKZ0gyQUREbUE2alo0Q0k0eXZtRUVwczFHUm85TnhFaXdsTUZlSXFmWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI3ekVCL2NpUk1vNUJ1UGxRY1dFZnV4QlcrVkdDV0djUUdLZHRwWFBQbUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5sS240RXo1QW4zODA1Z3FkQ2I2Zk5wMkl2U093Z0NzdmpPUkNsQ01sOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkxLM1U2OEpkVXNWdHBDTzVpeWlyOUJqb2R5bG5MQWxQcTBydnBTeVNuYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpIWmFUa1F1eEhyZ3JnRWhXV3RZcUxyN1Y0OTNLN1plS2ZXTll3TjdHZnVnMlcrL2tXRWZuSnJBTWdPbnFMRlFPenNRb3BWWFMvZ1FjZ0ZJdnpSK2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJDa04zZmFmSVhqaWxlVGJtM2p5ZWhKUERBZ2NzSW14UnVDVnk1MGdncHFvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4akhYTHd5LVFKS0pIWW1NN3pUZ2VRIiwicGhvbmVJZCI6ImRmNDg5MjllLTUwOTctNDBjNy05NDZlLWE0MjEzN2U1MGRhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqbEdwNkxISW4yd01Fd3I5K1VxZ3VoWWVoSFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSit4RjBqejN4R3RDcEhFQVBhWndtUll3bzl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFZTVpQRzI5IiwibWUiOnsiaWQiOiIyMzc2ODE2NDA3NzM6ODdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Buc2lxY0NFS25qNXJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlArMkFZeGhaRmQxcGo0eGIxWEpYVklmTGlITEtVSXRKRC9Jc0FmZGR5UXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldueFlMZCt1MC94SWdKY1VyMndMTUhZVnpzL0ROZm1jeVZLMmZXRmRRYnFvWHJ5THluUUgvYjRralVBb2F1VlkvSU15WjVKMWliTmZra21NWmV4a0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsQ252b25tbzdWejVvR0pmbll3V1VBa0tkYjAzWVdIWnVadzNUemtXYTBreUNya3dyOXFMVWJSV0VacFFUOTVNWHNnUTJYaE92eUFRT0JldWJxbDBoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY4MTY0MDc3Mzo4N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUL3RnR01ZV1JYZGFZK01XOVZ5VjFTSHk0aHl5bENMU1EveUxBSDNYY2tMIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NzM3MTQyfQ==';

const prefix = process.env.PREFIX || '+';
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
