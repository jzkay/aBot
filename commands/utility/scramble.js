const { SlashCommandBuilder } = require('discord.js');
// const { randomScrambleForEvent } = require('cubing/scramble');

// Simple command to generate a scramble from cubing/scramble

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scramble')
		.setDescription('Generates a 3x3 scramble')
        .addStringOption(option =>
			option.setName('puzzle')
				.setDescription('Which puzzle to scramble for')
				.setRequired(false)),
	async execute(interaction) {
		
        // Determine which puzzle to request from cubing/scramble

        const puzzleName = interaction.options.getString('puzzle', false).toLowerCase();

        (puzzleName).log();

        if (puzzleName == "") {
            puzzleName = "333";
        }

        try {
            const scramble = await randomScrambleForEvent(puzzleName);
        } catch {

        }

        console.log(scramble.toString())

        await interaction.reply(scramble.toString());
	},
};