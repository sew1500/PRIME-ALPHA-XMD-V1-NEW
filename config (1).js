const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/s44p1hN/8psu-Pn-Jo-Zr.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "𝐇𝐄𝐋𝐋𝐎𝐖,𝐈 𝐀𝐌 𝐏𝐑𝐈𝐌𝐄 𝐀𝐋𝐏𝐇𝐀 𝐗𝐌𝐃 𝐯1🤖 𝐈 𝐀𝐌 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 👋"'  
};
