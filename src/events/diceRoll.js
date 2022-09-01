const roll = require('../commands/roll')
const randchar = require('../commands/randchar')

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) { return }

        if (message.content.substring(0, 5) == ".roll") {
            roll(message);
        } else if (message.content == ".randchar") {
            randchar(message);
        }
    }
};