const mineflayer = require('mineflayer');
function startBot() {
    const bot = mineflayer.createBot({
        host: 'thundersmp10.mcsh.gg'
        username: 'ProBot247',
        version: '25.0.4.1'
    });
    bot.on('end', () => { setTimeout(startBot, 5000); });
    bot.on('error', () => {});
}
startBot();
