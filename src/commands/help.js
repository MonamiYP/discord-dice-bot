const { EmbedBuilder } = require('discord.js');

function help(message) {
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x13171A)
        .setTitle('Help')
        .setDescription("Here are the commands for the bot\nThe bot's prefix is **!**\n<> is required, () is optional")
        .addFields(
            { name: '📌 !help', value: 'Return a list of available commands' },
            { name: '📌 !roll <number>d<side>(+modifier)', value: 'Roll <number> number of <side> sided dice. If the modifier is provided, sum the outcomes and add the modifier' },
            { name: '📌 !randchar', value: 'Generate 6 numbers by rolling 4 dice and discarding the lowest value' },
        )
    message.reply({ embeds: [exampleEmbed] });
}

module.exports = help