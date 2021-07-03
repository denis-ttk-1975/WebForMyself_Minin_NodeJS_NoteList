const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const notesJsonPath = path.join(__dirname, 'notes.json');

const getNotes = (callbackFunction) => {
	fs.readFile(notesJsonPath, 'utf-8', (err, content) => {
		if (err) {
			throw new Error(err);
		}

		try {
			callbackFunction(JSON.parse(content));
		} catch (e) {
			callbackFunction([]);
		}
	});
};

const addNote = (title, text) => {
	getNotes((param) => {
		console.log('addNote', param);
		const duplicatedNote = param.find(note => note.title === title);

		if (duplicatedNote) {
			console.log(chalk.red.inverse('Note with the same title already exists'));
		} else {
			param.push({ title, text});
			console.log(chalk.green.inverse('Note is added'));
		}
	});
};

module.exports = {
	addNote
};