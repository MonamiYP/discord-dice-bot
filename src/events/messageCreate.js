const roll = require('../commands/roll');
const randchar = require('../commands/randchar');
const help = require('../commands/help');

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) { return }

        if (message.content.substring(0, 5) == "!roll") {
            roll(message);
        } else if (message.content == "!randchar") {
            randchar(message);
        } else if (message.content == "!help") {
            help(message);
        }
    }
};