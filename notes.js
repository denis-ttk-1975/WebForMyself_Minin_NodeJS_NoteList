const chalk = require('chalk');

const addNote = (title, text) => {
	console.log(chalk.green.inverse(`${title} ${text}`))
};

module.exports = {
	addNote
};