const yargs = require('yargs');
const pkg = require('./package.json')

yargs.version(pkg.version);

yargs.command({
	command: 'add',
	describe: 'Add new note',
	handler() {
		console.log('Add command');
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
