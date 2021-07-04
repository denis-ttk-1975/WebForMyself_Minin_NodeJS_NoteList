const yargs = require('yargs');
const pkg = require('./package.json');
const notes = require('./notes');

yargs.version(pkg.version);

yargs.command({
	command: 'add',
	describe: 'Add new note',
	builder: {
		title: {
			type: 'string',
			demandOption: true,
			describe: 'Note header'
		},
		text: {
			type: 'string',
			demandOption: true,
			describe: 'Note content'
		}
	},
	handler({title, text}) {
		notes.addNote(title, text);
	}
});

yargs.command({
	command: 'list',
	describe: 'show the list of notes',
	handler() {
		notes.listNotes();
	}
});

yargs.command({
	command: 'read',
	describe: 'Shows pointed note',
	builder: {
		title: {
			type: 'string',
			demandOption: true,
			describe: 'Note header'
		}
	},
	handler({title}) {
		notes.readNote(title);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Delete pointed note',
	builder: {
		title: {
			type: 'string',
			demandOption: true,
			describe: 'Note header'
		}
	},
	handler({title}) {
		notes.deleteNote(title);
	}
});

yargs.parse();
