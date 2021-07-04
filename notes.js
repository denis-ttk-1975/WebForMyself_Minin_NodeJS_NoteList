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

const saveNotes = (content) => {
	fs.writeFile(notesJsonPath, JSON.stringify(content), err => {
		if (err) {
			throw new Error (err);
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
			saveNotes(param);
			console.log(chalk.green.inverse('Note is added'));
		}
	});
};

const listNotes = () => {
getNotes(notes => {
	if (notes.length) {
		console.log(chalk.inverse('Your notes: '));
		notes.forEach(note => console.log(note.title));
	} else {
		console.log(chalk.blue('No one note is exist in file. Create first note!'));
		}
	});
};

const readNote = (title) => {
	getNotes(notes => {
		const note = notes.find(n => n.title === title);
		if (note) {
			console.log(chalk.inverse(note.title));
			console.log(note.text);
		} else {
			console.log(chalk.red.inverse(`Note with header "${title}" is absent.`));
		}
	});
};

const deleteNote = (title) => {
	getNotes(notes => {
		const updatedNotes = notes.filter(note => note.title !== title);

		if (updatedNotes.length !== notes.length) {
			saveNotes(updatedNotes);
			console.log(chalk.green('Note with header "${title}" deleted successfully'));
		} else {
			console.log(chalk.red.inverse(`Note with header "${title}" is not found.`));
		}
	});
};

module.exports = {
	addNote, listNotes, readNote, deleteNote
};