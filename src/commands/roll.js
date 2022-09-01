const { rollDice } = require('../modules/dice.js');

function roll(message) {
    try {
        let reply_message = "The format of your roll command is not correct";
        const dice_arguments = message.content.split(' ');
    
        if (dice_arguments.length == 2) {
            const dice_roll_modifier = dice_arguments[1].split('+');
            const roll_number_value = dice_roll_modifier[0].split('d');
            const number = parseInt(roll_number_value[0]);
            const value = parseInt(roll_number_value[1]);
    
            let modifier = parseInt(dice_roll_modifier[1]);
            if (Number.isNaN(modifier)) {
                modifier = 0;
            }
    
            const roll_values = rollDice(number, value, modifier).toString();
            reply_message = reply_message = `Rolled: [${roll_values}]`;
        }
    
        message.reply(reply_message);
    } catch (err) {
        message.reply("Oopsies, something has gone wrong.");
    }
}

module.exports = roll