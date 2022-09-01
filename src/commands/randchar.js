const { rollDice } = require('../modules/dice.js');

function randchar(message) {
    const sorted_roll_values = rollDice(4, 6, 0).sort();
    const smallest_roll = sorted_roll_values.shift();
    const reply_message = `Generated random stats:\n[${sorted_roll_values}] (deleted ${smallest_roll})`;
    message.reply(reply_message);
}

module.exports = randchar