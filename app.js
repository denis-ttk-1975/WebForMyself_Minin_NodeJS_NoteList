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
		console.log('List command');
	}
});

yargs.command({
	command: 'read',
	describe: 'Shows pointed note',
	handler() {
		console.log('Read command');
	}
});

yargs.command({
	command: 'remove',
	describe: 'Delete pointed note',
	handler() {
		console.log('Remove command');
	}
});

yargs.parse();
