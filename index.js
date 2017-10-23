const TelegramBot = require("node-telegram-bot-api");
const token = "435743910:AAHD6Vqq-y0Zb5B6615Jog5mw0xmyFKtDYs";
const bot = new TelegramBot(token, {polling: true});
const myChannel = '@biruk_newyorktimes_bot';
bot.sendMessage(myChannel, "Hello every one this is the Bot");



console.log(bot);
/*
bot.on('message', (msg) => {

    // anything
    var Hi = "w";
    if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"hello this is me!");
    // bot.sendMessage(myChannel, "Hello every one this is from in the Bot");

    }
    
 }
)
*/
