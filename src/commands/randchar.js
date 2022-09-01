const { rollDice } = require("../modules/dice.js");

function randchar(message) {
    let reply_message = `Generated random stats:\n`;
    for (let i = 0; i < 6; i++) {
        const sorted_roll_values = rollDice(4, 6).sort();
        const smallest_roll = sorted_roll_values.shift();
        const sum = sorted_roll_values.reduce(
            (partialSum, number) => partialSum + number, 0
        );
        reply_message = reply_message.concat(
            `[${sorted_roll_values},~~${smallest_roll}~~] = **${sum}**\n`
        );
    }
    message.reply(reply_message);
}

module.exports = randchar;
