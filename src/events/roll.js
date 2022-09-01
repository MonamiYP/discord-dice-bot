const { ContextMenuCommandBuilder } = require('discord.js');
const { rollDice } = require('../modules/dice.js');

module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) { return }

        if (message.content.substring(0, 5) == ".roll") {
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
        } else if (message.content == "!randchar") {
            let reply_message = `Generated random stats:\n`
            for (let i = 0; i < 6; i ++) {
                const sorted_roll_values = rollDice(4, 6, 0).sort();
                const smallest_roll = sorted_roll_values.shift();
                const sum = sorted_roll_values.reduce((partialSum, number) => partialSum + number, 0);
                reply_message = reply_message.concat(`[${sorted_roll_values},~~${smallest_roll}~~] = **${sum}**\n`);
            }
            message.reply(reply_message);
        }
    }
};